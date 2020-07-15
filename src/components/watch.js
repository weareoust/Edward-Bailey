import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import VideoPlayer from "./videoPlayer"
import LinkDirector from "./linkDirector"

import watchText from "../images/watch.svg"
import accent from "../images/accent-2@2x.png"
const Watch = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        videoSectionCta {
          __typename
          emailAddress
          displayText
          bodyCopy {
            bodyCopy
          }
          subjectLine
        }
      }
    }
  `)
  return (
    <section className="relative min-h-screen pb-20" id="videoSection">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div class="mb-32 md:mb-10 transform translate-y-20 md:-translate-y-6 relative w-1/2 md:w-1/5 self-start">
          <img
            src={accent}
            alt="Edward Bailey"
            className="absolute top-0 right-0 transform origin-right scale-150"
          />
          <img src={watchText} alt="Watch" className="relative" />
        </div>
        <VideoPlayer />
        <LinkDirector
          link={data.contentfulPage.videoSectionCta}
          className="bg-black text-white text-center p-4 uppercase font-bold inline-block mt-20 text-xl"
        />
      </div>
    </section>
  )
}

export default Watch
