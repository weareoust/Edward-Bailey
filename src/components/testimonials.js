import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LinkDirector from "./linkDirector"
import { css } from "@emotion/core"

import accent from "../images/test-accent-2.png"
import bg from "../images/testimonial-accent.png"
import oq from "../images/quote-open.svg"
import cq from "../images/quote-close.svg"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        testimonialBackground {
          fluid(quality: 100, maxWidth: 4000) {
            src
          }
        }
        testimonialCta {
          __typename
          emailAddress
          displayText
          subjectLine
        }
        testimonialSectionTitle
        testimonials {
          jobTitle
          author
          quote {
            quote
          }
        }
      }
    }
  `)
  return (
    <section
      className="relative min-h-screen py-20 overflow-hidden"
      id="testimonialSection"
      css={css`
        background: url(${data.contentfulPage.testimonialBackground.fluid.src})
          center center/cover;
        background-position-x: 70%;

        @media (max-width: 768px) {
          background-position-x: 63%;
        }
      `}
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div class="relative w-4/5 md:w-1/2 xl:w-2/5 self-start mt-20 lg:mt-4 mb-4">
          <img
            src={accent}
            alt="Edward Bailey"
            className="absolute top-0 right-0 transform origin-right scale-150 opacity-75"
          />
          <h2 className="relative font-normal text-3xl lg:text-5xl lg:pt-4 mt-4">
            {data.contentfulPage.testimonialSectionTitle}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 mt-20 lg:-mt-20 relative">
          {data.contentfulPage.testimonials.map((t, i) => {
            return (
              <div
                key={i}
                className={`relative lg:row-span-2 lg:col-start-${
                  i % 2 ? 1 : 2
                }`}
              >
                <img src={bg} alt="Edward Bailey" className="opacity-75" />
                <div
                  className="absolute inset-0 flex flex-col justify-center items-start"
                  style={{ padding: "0 20% 0 24%" }}
                >
                  <div className="relative">
                    <img
                      src={oq}
                      alt="Edward Bailey"
                      className="absolute top-0 left-0 transform -translate-x-full -translate-y-1/2 p-2"
                    />
                    <h2 className="font-normal text-xl md:text-2xl">
                      {t.quote.quote}
                    </h2>
                    <img
                      src={cq}
                      alt="Edward Bailey"
                      className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-full p-2"
                    />
                  </div>
                  <h3 className="text-lg font-normal mb-0">{t.author}</h3>
                  <p className="text-base font-normal">{t.jobTitle}</p>
                </div>
              </div>
            )
          })}
          <LinkDirector
            link={data.contentfulPage.testimonialCta}
            className="lg:absolute lg:left-0 md:bottom-0 bg-black text-white text-center p-4 uppercase font-bold inline-block mt-20 text-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
