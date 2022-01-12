use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Serialize, Deserialize, Clone)]
pub struct TimelinePost {
    pub id: u32,
    pub header: String,
    pub subheader: String,
    pub place: String,
    pub time: String,
    pub summary: String,
    pub description: String,
    pub technologies: Option<Vec<String>>,
}

// impl TimelinePost {
//     pub fn preview(&self) -> String {
//         if self.description.len() >= 160 {
//             format!("{}...", &self.description[..160])
//         } else {
//             (&self.description).to_string()
//         }
//     }
// }
