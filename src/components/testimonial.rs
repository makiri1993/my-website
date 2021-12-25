use yew::{function_component, html, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub name: String,
    pub image: String,
    pub text: String,
    pub link: String,
}

#[function_component(Testimonial)]
pub fn testimonial(props: &Props) -> Html {
    html! {
        <div class="flex flex-col md:flex-row items-center border-2 border-secondary rounded-lg py-4 md:p-6">
            <a class="w-3/12 flex flex-col items-center justify-center" href={props.link.clone()} target="_blank" rel="noreferrer">
                <img class="w-20 md:w-24" src={props.image.clone()} />
                <h2 class="py-4 text-primary">{props.name.clone()}</h2>
            </a>
            <blockquote class="w-10/12 md:w-9/12 lg:px-24 xl:px-40 font-light lg:text-lg text-center text-primary leading-relaxed">
              {format!("\"{}\"", props.text)}
            </blockquote>
        </div>
    }
}
