import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/util/seo/Seo'
import { graphql } from 'gatsby'

interface PrivacyProps {
  data: {
    siteData: {
      html: string
    }
  }
}

const Privacy = ({
  data: {
    siteData: { html },
  },
}: PrivacyProps) => {
  return (
    <Layout>
      <SEO
        lang="en"
        title="Martin Kireew - Freelancer based in Berlin"
        metaDescription="Website of Martin Kireew for informations about projects and more. Feel free to contact any time about projects in web and mobile development."
        author="Martin Kireew"
      />
      <div className="container text-primary px-6 py-10 min-h-screen">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default Privacy

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_privacy" } }) {
      html
    }
  }
`
