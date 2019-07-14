import React from 'react'
import Layout from '../components/layout/main/layout'
import Image from '../components/util/image/image'
import SEO from '../components/util/seo/Seo'
import Introduction from '../components/introduction/Introduction'
import { graphql } from 'gatsby'

import TimelineElementModel, { TimelineElementModelProps } from '../model/TImelineElementModel'
import TimelineContainer from '../components/timeline/TimelineContainer'
import SkillModel, { SkillModelProps } from '../model/SkillModel'
import Skills from '../components/skills/Skills'

interface IndexProps {
  data: {
    siteData: {
      frontmatter: {
        introduction: string[]
        timelineEvents: TimelineElementModelProps[]
        skills: SkillModelProps[]
      }
    }
  }
}

const IndexPage = ({ data }: IndexProps) => {
  const { introduction, timelineEvents, skills } = data.siteData.frontmatter
  const timelineElements = parseToTimelineModel(timelineEvents)
  const skillElements = parseToSkillModel(skills)

  return (
    <Layout>
      <SEO title="SEO Title Home" metaDescription="SEO Desc Home" />
      <Introduction content={introduction} />
      <TimelineContainer timelineElements={timelineElements} />
      <Skills skills={skillElements} />
    </Layout>
  )
}

function parseToTimelineModel(timelineEvents: TimelineElementModelProps[]): TimelineElementModel[] {
  return timelineEvents.map(event => new TimelineElementModel(event))
}

function parseToSkillModel(skills: SkillModelProps[]): SkillModel[] {
  return skills.map(skill => new SkillModel(skill))
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
        }
        skills {
          name
          description
        }
      }
    }
  }
`
