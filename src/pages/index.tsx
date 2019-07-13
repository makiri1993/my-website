import React from 'react'
import Layout from '../components/layout/main/layout'
import Image from '../components/util/image/image'
import SEO from '../components/util/seo/Seo'
import Introduction from '../components/introduction/Introduction'
import { graphql } from 'gatsby'

import TimelineElementModel, { TimelineElementModelProps } from '../model/TImelineElementModel'
import TimelineContainer from '../components/timeline/TimelineContainer'

interface IndexProps {
  data: {
    siteData: {
      frontmatter: {
        introduction: string[]
        timelineEvents: TimelineElementModelProps[]
      }
    }
  }
}

const IndexPage = ({ data }: IndexProps) => {
  const { introduction, timelineEvents } = data.siteData.frontmatter
  const timelineElements = parseToModel(timelineEvents)
  return (
    <Layout>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <Introduction content={introduction} />

      <TimelineContainer timelineElements={timelineElements} />
      {/* <Image imageName="gatsby-astronaut.png" maxWidth={500} className="test" />
    <Image imageName="gatsby-astronaut.png" maxWidth={250} className="karim" />
    <Image imageName="gatsby-icon.png" />
  <Image imageName="gatsby-icon.png" maxWidth={1000} /> */}
    </Layout>
  )
}

function parseToModel(timelineEvents: TimelineElementModelProps[]): TimelineElementModel[] {
  return timelineEvents.map(event => new TimelineElementModel(event))
}

export default IndexPage

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
      frontmatter {
        introduction
        timelineEvents {
          id
          header
          subheader
          place
          information
          time
          position
          icon
        }
      }
    }
  }
`
