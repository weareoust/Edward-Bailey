import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LinkDirector from "./linkDirector"

import ic1 from "../images/icon-1.svg"
import ic2 from "../images/icon-2.svg"
import ic3 from "../images/icon-3.svg"
import ic4 from "../images/icon-4.svg"

const icons = [ic1, ic2, ic3, ic4]

export default function Navigation(props) {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        menuLinks {
          __typename
          ... on ContentfulAnchorLink {
            id
            displayText
            destinationSection
          }
          ... on ContentfulMailToLink {
            id
            emailAddress
            subjectLine
            displayText
          }
          ... on ContentfulOutBoundLink {
            id
            destinationUrl
            displayText
          }
        }
      }
    }
  `)
  return (
    <div className={props.className} style={{ ...props.style }} css={props.css}>
      {data.contentfulPage.menuLinks.map((m, i) => {
        return (
          <LinkDirector
            key={i}
            link={m}
            className="uppercase flex mb-2"
            onClick={props.click}
          >
            <img src={icons[i]} alt="Edward Bailey" className="h-6 mr-4 mb-0" />
          </LinkDirector>
        )
      })}
    </div>
  )
}
