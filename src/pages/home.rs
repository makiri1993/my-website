use crate::components::{
    footer::Footer, header::Header, testimonials::Testimonials,
    timeline_container::TimelineContainer,
};
use crate::models::{index_content::IndexContent, timeline_post::TimelinePost};
use std::include_str;
use yew::{function_component, html};

const INDEX_CONTENT: &str = include_str!("../../content/pages/index.yaml");

macro_rules! incl_profiles {
    ( $( $x:expr ),* ) => {
        {
            let mut posts = vec![];
            $(
                posts.push(include_str!(concat!("../../content/timeline-posts/", $x, ".yaml")));
            )*

            posts
        }
    };
}

fn convert_to_timeline_posts(items: Vec<&str>) -> Vec<TimelinePost> {
    items
        .iter()
        .map(|text| serde_yaml::from_str::<TimelinePost>(text).unwrap())
        .collect()
}

#[function_component(Home)]
pub fn home() -> Html {
    let index_content = serde_yaml::from_str::<IndexContent>(INDEX_CONTENT).unwrap();
    let timeline_post_content: Vec<&str> =
        incl_profiles!("1", "2", "3", "4", "5", "6", "7", "8", "10", "11");
    let timeline_posts = convert_to_timeline_posts(timeline_post_content);

    html! {
        <>
            <Header />
            <Testimonials testimonials={index_content.testimonials} />
            // <TimelineContainer timeline_posts={(*timeline_posts).clone()} />
            <TimelineContainer timeline_posts={timeline_posts} />
            <Footer />
        </>
    }
}

// async fn get_timeline_posts() -> Vec<TimelinePost> {
//     let mut posts: Vec<TimelinePost> = vec![];
//     let mut yaml_index = 1;
//     loop {
//         let timeline_post_yaml =
//             get_yaml_content(&format!("{}{}.yaml", TIMELINE_POST_YAML, yaml_index)).await;
//         let post = serde_yaml::from_str::<TimelinePost>(&timeline_post_yaml);
//         match post {
//             Ok(post) => posts.push(post),
//             Err(_) => break,
//         }

//         yaml_index += 1;
//     }

//     posts
// }

// async fn get_yaml_content(url: &str) -> String {
//     reqwasm::http::Request::get(url)
//         .send()
//         .await
//         .expect("Fetching yaml file worked")
//         .text()
//         .await
//         .expect("No value found")
// }
