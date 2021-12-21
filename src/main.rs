use components::header::Header;
use yew::prelude::*;

mod components;

#[function_component(App)]
fn app() -> Html {
    html! {
        <div class="bg-gray-800 h-full">
        <Header />
        </div>
    }
}

fn main() {
    yew::start_app::<App>();
}
