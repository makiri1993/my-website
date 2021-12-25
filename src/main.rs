use components::{
    header::Header, testimonials::Testimonials, timeline_container::TimelineContainer,
};

use models::index_content::IndexContent;

use reqwasm::http::Request;
use yew::prelude::*;

use crate::models::timeline_post::TimelinePost;

mod components;
mod models;

const INDEX_YAML: &str = "http://localhost:8080/content/pages/index.yaml";
const TIMELINE_POST_YAML: &str = "http://localhost:8080/content/timeline-posts/";

#[function_component(App)]
fn app() -> Html {
    let index_content = use_state(|| IndexContent {
        page_key: "".to_string(),
        introduction: "".to_string(),
        testimonials: vec![],
        navigation: vec![],
    });

    let timeline_posts = use_state(|| vec![] as Vec<TimelinePost>);

    {
        let index_content = index_content.clone();
        let timeline_posts = timeline_posts.clone();
        use_effect_with_deps(
            move |_| {
                let timeline_posts = timeline_posts.clone();

                wasm_bindgen_futures::spawn_local(async move {
                    let index_yaml = get_yaml_content(INDEX_YAML).await;
                    index_content.set(serde_yaml::from_str(&index_yaml).unwrap());

                    let posts = get_timeline_posts().await;
                    timeline_posts.set(posts);
                });
                || ()
            },
            (),
        );
    }

    html! {
        <div class="bg-gray-800 h-full">
            <Header />
            <Testimonials testimonials={index_content.testimonials.clone()} />
            <TimelineContainer timeline_posts={(*timeline_posts).clone()} />
        </div>
    }
}

async fn get_timeline_posts() -> Vec<TimelinePost> {
    let mut posts: Vec<TimelinePost> = vec![];
    let mut yaml_index = 1;
    loop {
        let timeline_post_yaml =
            get_yaml_content(&format!("{}{}.yaml", TIMELINE_POST_YAML, yaml_index)).await;
        let post = serde_yaml::from_str::<TimelinePost>(&timeline_post_yaml);
        match post {
            Ok(post) => posts.push(post),
            Err(_) => break,
        }

        yaml_index += 1;
    }

    posts
}

async fn get_yaml_content(url: &str) -> String {
    Request::get(url)
        .send()
        .await
        .expect("Fetching yaml file worked")
        .text()
        .await
        .expect("No value found")
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::start_app::<App>();
}
