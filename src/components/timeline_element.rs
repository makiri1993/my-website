use crate::models::timeline_post::TimelinePost;
use yew::{function_component, html, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub timeline_post: TimelinePost,
}

#[function_component(TimelineElement)]
pub fn timeline_element(props: &Props) -> Html {
    html! {
        <a class="cursor-pointer">
            <div
                class="pt-6 pb-16 flex flex-col transition-opacity duration-200 ease-in-out"
                //  ${
                // visible ? 'opacity-100' : 'opacity-0'
                // } border-t-2 border-secondary hover:shadow"
                // ref={ref}
            >
                <h2 class="font-bold mb-1 text-primary">{props.timeline_post.header.clone()}</h2>
                <h3 class="text-sm mb-1 underline text-primary">{props.timeline_post.subheader.clone()}</h3>
                // <h4 class="text-sm mb-2 text-primary">
                //     {props.timeline_post.place.clone()} | {props.timeline_post.time.clone()}
                // </h4>
                <p class="text-sm whitespace-pre-line text-primary">{props.timeline_post.information.clone()}</p>
                    <hr class="border-secondary mb-4" />
                <p
                    class="text-sm whitespace-pre-line font-light text-primary"
                    // dangerouslySetInnerHTML={{ __html: cutProjectDescription(html) }}
                ></p>
            </div>
        </a>
    }
}
