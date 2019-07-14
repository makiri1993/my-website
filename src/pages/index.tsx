import { graphql } from 'gatsby'
import React from 'react'
import Introduction from '../components/introduction/Introduction'
import Layout from '../components/layout/main/layout'
import Skills from '../components/skills/Skills'
import TimelineContainer from '../components/timeline/TimelineContainer'
import SEO from '../components/util/seo/Seo'
import SkillModel, { SkillModelProps } from '../model/SkillModel'
import TimelineElementModel, { TimelineElementModelProps } from '../model/TImelineElementModel'

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
      <SEO
        lang="en"
        title="Martin Kireew - Freelancer based in Berlin"
        metaDescription="Website of Martin Kireew for informations about projects and more. Feel free to contact any time about projects in web and mobile development."
        author="Martin Kireew"
      />
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
