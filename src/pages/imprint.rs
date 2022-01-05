use crate::components::{footer::Footer, header::Header};

use yew::{function_component, html};

#[function_component(Imprint)]
pub fn imprint() -> Html {
    html! {
        <>
            <Header />
            <div class="flex-grow py-8 container text-primary-300">
                <h1 class="text-lg font-bold">{"Impressum"}</h1>
                <h2 class="font-bold underline">{"Angaben gemäß § 5 TMG"}</h2>
                <div>{"Martin Kireew"}</div>
                <div>{"Full Stack Developer in Berlin"}</div>
                <div>{"Voltairestraße 11"}</div>
                <div class="mb-4">{"10179 Berlin"}</div>
                <h2 class="font-bold underline">{"Kontakt"}</h2>
                <div>{"Telefon: +49 176 41828286"}</div>
                <div class="mb-4">{"E-Mail: mailto:martin@techstudio.dev"}</div>
                <h2 class="font-bold underline">{"Streitschlichtung"}</h2>
                <div>{"Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr."}</div>
                <div>{"Unsere E-Mail-Adresse finden Sie oben im Impressum."}</div>
                <div class="mb-4">{"Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}</div>
                <h3 class="underline">{"Haftung für Inhalte"}</h3>
                <div>{"Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."}</div>
                <div class="mb-4">{"Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."}</div>
                <h3 class="underline">{"Haftung für Links"}</h3>
                <div>{"Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."}</div>
                <div class="mb-4">{"Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."}</div>
                <h3 class="underline">{"Urheberrecht"}</h3>
                <div>{"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."}</div>
                <div>{"Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."}</div>
                <div class="mt-4">{"Quelle:"}</div>
                <div>{"https://www.e-recht24.de"}</div>
            </div>
            <Footer />
        </>
    }
}
