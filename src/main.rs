use pages::{home::Home, imprint::Imprint, privacy::Privacy};
use yew::prelude::*;
use yew_router::prelude::*;

mod components;
mod hooks;
mod models;
mod pages;

#[derive(Clone, Routable, PartialEq)]
enum Route {
    #[at("/")]
    Home,
    #[at("/imprint")]
    Imprint,
    #[at("/privacy")]
    Privacy,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: &Route) -> Html {
    match routes {
        Route::Home => html! { <Home /> },
        Route::Imprint => html! { <Imprint /> },
        Route::Privacy => html! { <Privacy /> },
        Route::NotFound => html! { <h1>{ "404" }</h1> },
    }
}
#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={Switch::render(switch)} />
        </BrowserRouter>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::start_app::<App>();
}
