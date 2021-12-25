use crate::{components::timeline_row::TimelineRow, models::timeline_post::TimelinePost};
use yew::{function_component, html, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub timeline_posts: Vec<TimelinePost>,
}

#[function_component(TimelineContainer)]
pub fn timeline_container(props: &Props) -> Html {
    let timeline_rows = props
        .timeline_posts
        .iter()
        .enumerate()
        .map(|(index, post)| {
            html! {
                <TimelineRow index={index} timeline_post={post.clone()} />
            }
        });

    html! {
        <div class="bg-background-darker">
            <div class="container flex flex-col px-6 py-24 ">
                {for timeline_rows}
            </div>
        </div>
    }
}
