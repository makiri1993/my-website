import React, { FC } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

interface NavData {
  siteData: {
    frontmatter: {
      navigation: [{ name: string; link: string }]
    }
  }
}

const Nav: FC = () => (
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
        <nav className="sticky top-0 bg-background-darker flex justify-center">
          <div className="py-3">
            {navigation.map(({ name, link }, index) => {
              if (link.includes('http')) {
                return (
                  <a key={index} className="text-primary border-b border-secondary mx-4 xl:mx-10" href={link}>
                    {name}
                  </a>
                )
              } else {
                return (
                  <Link key={index} className="text-primary border-b border-secondary mx-4 xl:mx-10" to={link}>
                    {name}
                  </Link>
                )
              }
            })}
          </div>
        </nav>
      )
    }}
  />
)

export default Nav
