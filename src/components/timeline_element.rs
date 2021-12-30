use crate::components::timeline_technology::TimelineTechnology;
use crate::models::timeline_post::TimelinePost;

use gloo::timers::callback::Timeout;
use yew::{
    classes, function_component, html, use_effect_with_deps, use_mut_ref, use_node_ref, use_state,
    Callback, Properties,
};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub timeline_post: TimelinePost,
}

#[function_component(TimelineElement)]
pub fn timeline_element(props: &Props) -> Html {
    let node_ref = use_node_ref();
    let show = use_state(|| false);
    let expanded_height = use_mut_ref(|| 0);

    let onclick = {
        let show = show.clone();
        Callback::from(move |_: yew::MouseEvent| show.set(!*show))
    };

    // let window = window();
    // log::info!("{:?}", window.inner_height());
    // {
    use_effect_with_deps(
        move |(node_ref, expanded_height)| {
            let node_ref = node_ref.clone();
            let expanded_height = expanded_height.clone();

            Timeout::new(200, move || {
                if let Some(div) = node_ref.cast::<web_sys::HtmlElement>() {
                    *expanded_height.borrow_mut() = div.scroll_height();
                };
            })
            .forget();
            || ()
        },
        (node_ref.clone(), expanded_height.clone()),
    );
    // }
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
            <p class="text-xs whitespace-pre-line text-primary-300 mb-4">
                {props.timeline_post.information.clone()}
            </p>
            <div ref={node_ref} class={classes!(
                "h-0",
                "overflow-hidden",
                "transition-[height]",
                "duration-1000",
                "ease-in-out",
            )}
            style={format!("height: {}px", if *show { *expanded_height.borrow() } else { 0 })}
            >
                <p class="text-xs whitespace-pre-line font-light text-primary-300">
                    {props.timeline_post.description.clone()}
                </p>
            </div>
        </div>
    }
}
