import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

interface NavData {
  siteData: {
    frontmatter: {
      navigation: [{ name: string; link: string }]
    }
  }
}

const Nav = () => (
  <StaticQuery
    query={graphql`
      {
        siteData: markdownRemark(frontmatter: { pageKey: { eq: "page_index" } }) {
          frontmatter {
            navigation {
              name
              link
            }
          }
        }
      }
    `}
    render={({ siteData }: NavData) => {
      const { navigation } = siteData.frontmatter
      return (
        <nav className="bg-orange-900 flex justify-center">
          {navigation.map(({ name, link }, index) => (
            <a key={index} className="py-3 text-indigo-100 mr-4" href={link}>
              {name}
            </a>
          ))}
        </nav>
      )
    }}
  />
)

export default Nav
