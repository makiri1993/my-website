use crate::components::testimonial::Testimonial as TestimonialComp;
use crate::models::index_content::Testimonial;
use yew::{function_component, html, Properties};

#[derive(Properties, PartialEq)]
pub struct Props {
    pub testimonials: Vec<Testimonial>,
}

#[function_component(Testimonials)]
pub fn testimonials(props: &Props) -> Html {
    let testimonials = props.testimonials.iter().map(|testimonial| html! {
        <TestimonialComp name={testimonial.name.clone()} image={testimonial.image.clone()} text={testimonial.text.clone()} link={testimonial.link.clone()} />
    });

    html! {
        <div class="container px-2 md:px-6 py-24">
            {for testimonials}
        </div>
    }
}
