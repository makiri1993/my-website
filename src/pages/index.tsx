import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Introduction from '../components/introduction/Introduction'
import Layout from '../components/layout/main/layout'
import Skills from '../components/skills/Skills'
import TimelineContainer from '../components/timeline/TimelineContainer'
import SEO from '../components/util/seo/Seo'
import { parseToSkillModel, SkillModelProps } from '../model/SkillModel'
import { parseToTimelineModels, TimelineElementModelProps } from '../model/TImelineElementModel'
import FormButton from '../components/form/FormButton'

interface IndexProps {
  data: {
    siteData: {
      frontmatter: {
        introduction: string
        skills: SkillModelProps[]
      }
    }
    timelineEvents: {
      nodes: TimelineElementModelProps[]
    }
  }
}

const IndexPage: FC<IndexProps> = ({ data: { siteData, timelineEvents } }) => {
  const { introduction, skills } = siteData.frontmatter
  const { nodes } = timelineEvents
  const timelineElements = parseToTimelineModels(nodes)
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
      <FormButton />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
      frontmatter {
        introduction
        skills {
          name
          description
        }
      }
    }
    timelineEvents: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/timeline/" } } }
      sort: { fields: frontmatter___id, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          id
          header
          subheader
          time
          place
          information
        }
      }
    }
  }
`
