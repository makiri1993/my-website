import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout/layout'
import { createTimelineEntry, TimelineFrontmatterProps } from '../model/TImelineElementModel'

interface TimelinePostProps {
  data: {
    timelinePost: {
      frontmatter: TimelineFrontmatterProps
      html: string
    }
  }
}

const TimelinePost: FC<TimelinePostProps> = ({ data: { timelinePost } }) => {
  const { frontmatter, html } = timelinePost
  const { header, subheader, time, place, link } = createTimelineEntry({
    fields: { slug: undefined },
    frontmatter,
    html,
  })
  return (
    <Layout>
      <div className="container py-4 px-6 xl:py-32 text-primary min-h-screen">
        <div className="md:w-3/4 flex flex-col items-start border-b-2 border-secondary space-y-4 pb-4">
          <h1 className="uppercase text-lg font-bold ">{header}</h1>
          <h2 className="font-semibold text-base ">{subheader}</h2>
          <p className="font-light">{time}</p>
          <p className="font-light">{place}</p>
          <a href={link} target="_blank" rel="noreferrer" className="border-2 rounded-lg border-secondary p-1">
            Link to website
          </a>
        </div>
        <div
          className="mt-10 xl:mt-32 md:w-6/12 whitespace-pre-line leading-snug"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
        link
        information
      }
      html
    }
  }
`
