import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

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
          {navigation.map(({ name, link }, index) => {
            if (link.includes('http')) {
              return (
                <a key={index} className="py-3 text-indigo-100 mx-4 xl:mx-10" href={link}>
                  {name}
                </a>
              )
            } else {
              return (
                <Link key={index} className="py-3 text-indigo-100 mx-4 xl:mx-10" to={link}>
                  {name}
                </Link>
              )
            }
          })}
        </nav>
      )
    }}
  />
)

export default Nav
