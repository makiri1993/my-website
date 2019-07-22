import { graphql } from 'gatsby'
import React, { ReactNode } from 'react'
import Layout from '../components/layout/main/layout'
import TimelineElementModel, { TimelineFrontmatterProps } from '../model/TImelineElementModel'

interface TimelinePostProps {
  data: {
    timelinePost: {
      frontmatter: TimelineFrontmatterProps
      html: string
    }
  }
}

const TimelinePost = ({ data: { timelinePost } }: TimelinePostProps): ReactNode => {
  const { frontmatter, html } = timelinePost
  const timelineElement = new TimelineElementModel({ fields: {}, frontmatter })
  const { header, subheader, time, place } = timelineElement
  return (
    <Layout>
      <div className="container py-4 px-6 xl:py-32 text-orange-900 min-h-screen">
        <div className="md:w-3/4 border-b-2 border-orange-900 md:pb-4">
          <div className="uppercase text-lg font-bold mb-4">{header}</div>
          <div className="font-semibold mb-3">{subheader}</div>
          <div className="mb-2">{time}</div>
          <div className="mb-2">{place}</div>
        </div>
        {/* <div>{information}</div> */}
        <div className="mt-10 xl:mt-32 md:w-6/12 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default TimelinePost

export const pageQuery = graphql`
  query TimelinePostBySlug($slug: String!) {
    timelinePost: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        header
        subheader
        place
        time
        information
      }
      html
    }
  }
`
