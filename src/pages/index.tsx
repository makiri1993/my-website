import React from 'react'
import Layout from '../components/layout/main/layout'
import Image from '../components/util/image/image'
import SEO from '../components/util/seo/Seo'
import Introduction from '../components/introduciton/Introduction'
import { graphql } from 'gatsby'

interface IndexProps {
  data: {
    siteData: {
      frontmatter: {
        introduction: string[]
      }
    }
  }
}

const IndexPage = ({ data }: IndexProps) => {
  const { introduction } = data.siteData.frontmatter
  return (
    <Layout>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <Introduction content={introduction} />
      {/* <Image imageName="gatsby-astronaut.png" maxWidth={500} className="test" />
    <Image imageName="gatsby-astronaut.png" maxWidth={250} className="karim" />
    <Image imageName="gatsby-icon.png" />
  <Image imageName="gatsby-icon.png" maxWidth={1000} /> */}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
      frontmatter {
        introduction
      }
    }
  }
`
