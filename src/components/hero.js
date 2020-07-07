import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </section>
  )
}

export default Hero
