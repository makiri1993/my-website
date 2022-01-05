use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Serialize, Deserialize, Clone)]
pub struct NavigationItem {
    name: String,
    link: String,
}

#[derive(Debug, PartialEq, Serialize, Deserialize, Clone)]
pub struct Testimonial {
    pub name: String,
    pub link: String,
    pub image: String,
    pub text: String,
}

#[derive(Debug, PartialEq, Serialize, Deserialize, Clone)]
pub struct IndexContent {
    pub page_key: String,
    pub navigation: Vec<NavigationItem>,
    pub introduction: String,
    pub testimonials: Vec<Testimonial>,
}
