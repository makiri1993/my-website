use yew::{function_component, html};

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

    html! {
        <nav class="sticky top-0 bg-background-900 flex justify-center z-10">
            <div class="py-3">
                {for items.iter().cloned().map(|item| html! {
                    <a class="text-primary-300 border-b border-primary-600 mx-4 xl:mx-10" href={item.link}>
                        {item.name}
                    </a>
                })}
        //   {navigation.map(({ name, link }, index) => {
        //     if (link.includes('http')) {
        //       return (
        //         <a key={index} class="text border-b border- mx-4 xl:mx-10" href={link}>
        //           {name}
        //         </a>
        //       )
        //     } else {
        //       return (
        //         <Link key={index} class="text border-b border- mx-4 xl:mx-10" to={link}>
        //           {name}
        //         </Link>
        //       )
        //     }
        //   })}
        </div>
      </nav>
    }
}
