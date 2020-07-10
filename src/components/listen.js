import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import listenText from "../images/listen.svg"
import accent from "../images/accent-2@2x.png"
import accent1 from "../images/video-1.svg"
const Listen = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        featuredPodcasts {
          embed {
            embed
          }
          title
          description {
            description
          }
          publishedDate(formatString: "DD MMMM YYYY")
        }
      }
    }
  `)
  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div class="mb-12 relative w-1/2 md:w-1/3 self-end">
          <img
            src={accent}
            alt="Edward Bailey"
            className="absolute top-0 left-0 transform origin-left scale-150"
          />
          <img src={listenText} alt="Watch" className="relative ml-auto" />
        </div>
        <div className="bg-black w-full">
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulPage.featuredPodcasts[0].embed.embed,
            }}
          />
          <div className="bg-black text-white grid md:grid-cols-4 p-4 px-8 col-gap-12 row-gap-4 md:row-gap-0">
            <h2 className="uppercase font-normal text-lg order-1 md:col-span-4">
              Now Playing:
              <span
                className="w-full md:w-1/4 bg-white h-px block mt-2"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,1) 26%, rgba(255,255,255,0) 100%)",
                }}
              />
            </h2>
            <div style={{ order: 1 }} className="relative">
              <h3 className="uppercase font-normal text-lg mb-2">
                {data.contentfulPage.featuredPodcasts[0].title}
              </h3>
              <h3 className="uppercase font-normal text-xs">
                {data.contentfulPage.featuredPodcasts[0].publishedDate}
              </h3>
              <div className="bg-white absolute bottom-0 md:top-0 right-0 w-full md:w-px h-px md:h-full md:-mr-4 transform scale-x-125 md:scale-x-110 md:origin-top" />
            </div>
            <div
              style={{ order: 1 }}
              className="text-left flex md:col-span-3 items-start"
            >
              <img src={accent1} alt="Edward Bailey" className="mr-4" />
              <p className="uppercase font-normal text-xs">
                {
                  data.contentfulPage.featuredPodcasts[0].description
                    .description
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Listen
