use yew::{function_component, html, Children, Properties};

#[derive(Properties, PartialEq)]
pub struct PageProps {
    #[prop_or_default]
    pub children: Children,
}

#[function_component(Page)]
pub fn page(props: &PageProps) -> Html {
    html! {
        <div class="bg-black">
        { for props.children.iter() }
        </div>
    }
}
