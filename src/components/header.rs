use yew::{function_component, html, virtual_dom::VNode};
use yew_router::components::Link;

use crate::Route;

#[derive(Clone)]
struct HeaderItem {
    name: String,
    link: String,
}

#[function_component(Header)]
pub fn header() -> Html {
    let items = vec![
        HeaderItem {
            name: "home".to_string(),
            link: "/".to_string(),
        },
        HeaderItem {
            name: "github".to_string(),
            link: "https://github.com/makiri1993".to_string(),
        },
        HeaderItem {
            name: "LinkedIn".to_string(),
            link: "https://de.linkedin.com/in/%F0%9F%92%BB-martin-kireew-93912a153/en-us"
                .to_string(),
        },
    ];

    let header_items = items
        .iter()
        .cloned()
        .map(|item| {
            if item.link.contains("https://") {
                html! {
                    <a class="text-primary-300 border-b border-primary-600" href={item.link}>
                       {item.name}
                    </a>
                }
            } else {
                html! {
                    <Link<Route> to={Route::Home} classes="text-primary-300 border-b border-primary-600">{ item.name }</Link<Route>>
                }
            }
        })
        .collect::<Vec<VNode>>();

    html! {
        <nav class="sticky top-0 bg-background-900 flex justify-center z-10">
            <div class="py-3 space-x-12">
                {for header_items}
        </div>
      </nav>
    }
}
