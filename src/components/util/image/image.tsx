import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

/*
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

interface Props {
  imageName: string
  maxWidth?: number
  className?: string
}

export const Image: FC<Props> = ({ imageName, maxWidth = 500, className = '' }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allFile.edges?.find(
        (edge: { node: { childImageSharp: { fluid: { originalName: string } } } }) =>
          edge?.node?.childImageSharp?.fluid?.originalName === imageName,
      )

      if (!image) {
        return null
      }
      return (
        <div style={{ maxWidth: maxWidth }}>
          <Img className={className} fluid={image.node.childImageSharp.fluid} />
        </div>
      )
    }}
  />
)
