import React from 'react'
import Layout from '../components/layout/main/layout'
import SEO from '../components/util/seo/Seo'

const Privacy = () => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Martin Kireew - Freelancer based in Berlin"
        metaDescription="Website of Martin Kireew for informations about projects and more. Feel free to contact any time about projects in web and mobile development."
        author="Martin Kireew"
      />
      <div className="container px-6 py-10 min-h-screen">
        <div className="text-xl font-bold text-orange-900 my-4">
          Privacy Policy for Martin Kireew - Freelancer based in Berlin
        </div>
        <div className="text-orange-900 my-2">
          If you require any more information or have any questions about our privacy policy, please feel free to
          contact us by email at <a href="mailto:kireew.martin@icloud.com">kireew.martin@icloud.com</a>.
        </div>
        <div className="text-orange-900 my-4">
          At www.kireew.com we consider the privacy of our visitors to be extremely important. This privacy policy
          document describes in detail the types of personal information is collected and recorded by www.kireew.com and
          how we use it.
        </div>
        <div className="text-orange-900 my-2">
          <div className="text-lg font-semibold text-orange-900 my-4">Log Files</div>
          Like many other Web sites, www.kireew.com makes use of log files. These files merely logs visitors to the site
          - usually a standard procedure for hosting companies and a part of hosting services's analytics. The
          information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service
          Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is
          used to analyze trends, administer the site, track user's movement around the site, and gather demographic
          information. IP addresses, and other such information are not linked to any information that is personally
          identifiable.
        </div>
        <div className="text-orange-900">
          <div className="text-lg font-semibold text-orange-900 my-4">Cookies and Web Beacons</div>
          www.kireew.com does not use cookies.
        </div>
        <div className="text-orange-900">
          <div className="text-orange-900">
            <em>
              While each of these advertising partners has their own Privacy Policy for their site, an updated and
              hyperlinked resource is maintained here:
              <a href="http://www.privacypolicyonline.com/privacy-policies">Privacy Policies</a>. You may consult this
              listing to find the privacy policy for each of the advertising partners of www.kireew.com.
            </em>
          </div>
          <div className="text-orange-900">
            www.kireew.com has no access to or control over these cookies that are used by third-party advertisers.
          </div>
          <div className="text-orange-900">
            If you wish to disable cookies, you may do so through your individual browser options. More detailed
            information about cookie management with specific web browsers can be found at the browsers' respective
            websites. <a href="http://www.privacypolicyonline.com/what-are-cookies">What Are Cookies?</a>
          </div>
          <div className="text-lg font-semibold text-orange-900 my-4">Children's Information</div>
          <div className="text-orange-900">
            We believe it is important to provide added protection for children online. We encourage parents and
            guardians to spend time online with their children to observe, participate in and/or monitor and guide their
            online activity. www.kireew.com does not knowingly collect any personally identifiable information from
            children under the age of 13. If a parent or guardian believes that www.kireew.com has in its database the
            personally-identifiable information of a child under the age of 13, please contact us immediately (using the
            contact in the first paragraph) and we will use our best efforts to promptly remove such information from
            our records.
            <div className="text-orange-900">
              <div className="text-lg font-semibold text-orange-900 my-4">Online Privacy Policy Only</div>
              This privacy policy applies only to our online activities and is valid for visitors to our website and
              regarding information shared and/or collected there. This policy does not apply to any information
              collected offline or via channels other than this website.
            </div>
            <div className="text-orange-900">
              <div className="text-lg font-semibold text-orange-900 my-4">Consent</div>
              <div className="text-lg font-semibold text-orange-900 my-4">
                By using our website, you hereby consent to our privacy policy and agree to its terms.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Privacy
