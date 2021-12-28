use crate::components::timeline_technology::TimelineTechnology;
use crate::models::timeline_post::TimelinePost;
use yew::{classes, function_component, html, use_state, Callback, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub timeline_post: TimelinePost,
}

#[function_component(TimelineElement)]
pub fn timeline_element(props: &Props) -> Html {
    let show = use_state(|| false);
    let onclick = {
        let show = show.clone();
        Callback::from(move |_: yew::MouseEvent| show.set(!*show))
    };

    let technologies = match &props.timeline_post.technologies {
        Some(technologies) => technologies
            .iter()
            .map(|technology| {
                html! {<TimelineTechnology>{technology}</TimelineTechnology>}
            })
            .collect(),
        None => vec![],
    };

    html! {
        <div {onclick} class="py-6 px-2 mb-6 flex flex-col border border-primary-300 rounded-xl cursor-pointer select-none">
            <h2 class="font-bold mb-1 text-primary-300">
                {props.timeline_post.header.clone()}
            </h2>
            <h3 class="text-sm mb-1 underline text-primary-400">
                {props.timeline_post.subheader.clone()}
            </h3>
            <h4 class="text-sm mb-2 text-primary-300">
                {format!("{} | {}", props.timeline_post.place, props.timeline_post.time)}
            </h4>
            <div class="flex flex-wrap gap-x-2 gap-y-1 items-start">
                {for technologies.clone()}
            </div>
            <hr class="mt-2 mb-4 w-4/12 border-primary-600" />
            <p class="text-sm whitespace-pre-line text-primary-300 mb-4">
                {props.timeline_post.information.clone()}
            </p>
            <div class={classes!(
                "h-0",
                "overflow-hidden",
                show.then(|| Some("h-auto")),
            )}>
                <p class="text-sm whitespace-pre-line font-light text-primary-300">
                    {props.timeline_post.preview()}
                </p>
            </div>
        </div>
    }
}
