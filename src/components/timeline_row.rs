use crate::{components::timeline_element::TimelineElement, models::timeline_post::TimelinePost};
use yew::{function_component, html, Html, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub index: usize,
    pub timeline_post: TimelinePost,
}

fn separator() -> Html {
    html! {
        <div class="w-2/12 grid items-center justify-items-center">
            <span class="animate-pulse col-start-1 row-start-1 h-full w-1 bg-secondary flex items-center overflow-visible">
            </span>
            <span class="animate-ping-slow col-start-1 row-start-1 h-3 w-3 rounded-full bg-secondary">
            </span>
            <span class="col-start-1 row-start-1 h-3 w-3 rounded-full bg-secondary"></span>
        </div>
    }
}

#[function_component(TimelineRow)]
pub fn timeline_row(props: &Props) -> Html {
    let left = html! {
        <div class="flex">
            <div class="md:w-5/12">
                <TimelineElement timeline_post={props.timeline_post.clone()} />
            </div>
            {separator()}
            <div class="hidden md:block md:w-5/12"></div>
        </div>

    };

    let right = html! {
        <div class="flex">
            <div class="hidden md:block md:w-5/12"></div>
            {separator()}
            <div class="md:w-5/12">
                <TimelineElement timeline_post={props.timeline_post.clone()} />
            </div>
        </div>
    };

    if props.index % 2 == 0 {
        left
    } else {
        right
    }
}
