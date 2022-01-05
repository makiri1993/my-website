use yew::{function_component, html, Children, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    #[prop_or_default]
    pub children: Children,
}

#[function_component(TimelineTechnology)]
pub fn timeline_technology(props: &Props) -> Html {
    html! {
        <div class="px-2 bg-primary-900  rounded text-primary-300 text-xs">
            {props.children.clone()}
        </div>
    }
}
