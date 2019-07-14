import React from 'react'
import Layout from '../components/layout/main/layout'
import SEO from '../components/util/seo/Seo'

const Imprint = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Martin Kireew - Freelancer based in Berlin"
        metaDescription="Website of Martin Kireew for informations about projects and more. Feel free to contact any time about projects in web and mobile development."
        author="Martin Kireew"
      />
      <div className="container px-6 py-10 min-h-screen">
        <div className="text-xl font-bold text-orange-900 my-4">Legal Disclosure</div>
        <div className="my-4">
          <div className="text-orange-900 my-2">Information in accordance with Section 5 TMG</div>
          <div className="text-orange-900">Roennebergstr. 4</div>
          <div className="text-orange-900 my-2">12161 Berlin</div>
          <div className="text-lg font-semibold text-orange-900 my-4">Contact Information</div>
          <div className="text-orange-900 ">Telephone: +49 174 3098379</div>
          <div className="text-orange-900 ">
            E-Mail:{' '}
            <a className="cursor-pointer text-orange-500" href="mailto:kireew.martin@icloud.com">
              kireew.martin@icloud.com
            </a>
          </div>
          <div className="text-orange-900 ">
            Internet address:{' '}
            <a className="cursor-pointer text-orange-500" href="https://www.kireew.com" target="_blank">
              kireew.com
            </a>
          </div>
        </div>
        <div className="my-4">
          <div className="text-lg font-semibold text-orange-900 my-4">VAT number</div>
          <div className="text-orange-900 my-2">
            VAT indentification number in accorance with Section 27 a of the German VAT act
          </div>
          <div className="text-orange-900 my-2">000 000 00</div>
        </div>
        <div className="my-4">
          <div className="text-lg font-semibold text-orange-900 my-4">Disclaimer</div>
          <div className="font-semibold text-orange-900 my-2">Accountability for content</div>
          <div className="text-orange-900 my-2">
            The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
            accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
            our own content on these web pages. In this matter, please note that we are not obliged to monitor the
            transmitted or saved information of third parties, or investigate circumstances pointing to illegal
            activity. Our obligations to remove or block the use of information under generally applicable laws remain
            unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </div>
          <div className="font-semibold text-orange-900 my-2">Accountability for links</div>
          <div className="text-orange-900 my-2">
            Responsibility for the content of external links (to web pages of third parties) lies solely with the
            operators of the linked pages. No violations were evident to us at the time of linking. Should any legal
            infringement become known to us, we will remove the respective link immediately.
          </div>
          <div className="font-semibold text-orange-900 my-2">Copyright</div>
          <div className="text-orange-900 my-2">
            Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law,
            every form of utilizing, reproducing or processing works subject to copyright protection on our web pages
            requires the prior consent of the respective owner of the rights. Individual reproductions of a work are
            only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may
            violate copyright laws.
          </div>
        </div>
        <i>Quelle: </i>
        <a href="http://www.translate-24h.de" target="_blank">
          translate-24h Übersetzungen
        </a>{' '}
      </div>
    </Layout>
  )
}

export default Imprint
