use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Serialize, Deserialize, Clone)]
pub struct TimelinePost {
    pub id: u32,
    pub header: String,
    pub subheader: String,
    pub place: String,
    pub time: String,
    pub information: String,
    pub description: String,
    pub technologies: Option<Vec<String>>,
}
