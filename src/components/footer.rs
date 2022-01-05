use crate::Route;
use yew::{function_component, html};
use yew_router::components::Link;

#[function_component(Footer)]
pub fn footer() -> Html {
    html! {
        <div class="bg-background-900">
            <div class="container px-6 py-4 space-x-4 flex justify-center text-primary-300">
                <Link<Route> to={Route::Imprint}>{ "Imprint" }</Link<Route>>
                <Link<Route> to={Route::Privacy}>{ "Privacy" }</Link<Route>>
            </div>
        </div>
    }
}
