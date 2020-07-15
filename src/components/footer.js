import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import EmailForm from "./emailForm"
import Navigation from "./navigation"

import linkin from "../images/in.svg"
import fb from "../images/fb.svg"
import ig from "../images/ig.svg"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        id
        footerTitle
        footerDescription {
          footerDescription
        }
        footerBottomText
        linkedinUrl
        instagramUrl
        facebookUrl
      }
    }
  `)
  return (
    <footer className="bg-black py-20 relative">
      <div className="container mx-auto px-4 text-white">
        <div className="flex flex-col md:flex-row justify-between mb-20">
          <div>
            <h2 className="font-normal text-4xl mb-2">
              {data.contentfulPage.footerTitle}
            </h2>
            <h3 className="font-normal text-xl mb-12">
              {data.contentfulPage.footerDescription.footerDescription}
            </h3>
            <EmailForm />
          </div>
          <Navigation
            className="flex flex-col"
            css={css`
              img {
                filter: invert(1);
              }
            `}
          />
        </div>
        <div className="flex flex-col max-w-sm">
          <a
            href={data.contentfulPage.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xl mb-4"
          >
            <img src={linkin} alt="linkedin" className="h-6 mr-2 mb-0 inline" />{" "}
            Edward Bailey
          </a>
          <a
            href={data.contentfulPage.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xl mb-4"
          >
            <img src={ig} alt="instagram" className="h-6 mr-2 mb-0 inline" />{" "}
            @edwardbailey1980
          </a>
          <a
            href={data.contentfulPage.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase text-xl mb-4"
          >
            <img src={fb} alt="facebook" className="h-6 mr-2 mb-0 inline" />{" "}
            Edward Bailey
          </a>
        </div>
        <p className="absolute inset-x-0 bottom-0 text-center">
          {data.contentfulPage.footerBottomText}
        </p>
      </div>
    </footer>
  )
}

export default Footer
