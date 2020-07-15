import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slogan from "./slogan"
import accent from "../images/accent-1@2x.png"
import poster from "../images/eb.gif"
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        heroImage {
          file {
            url
            contentType
          }
        }
        heroBio {
          heroBio
        }
      }
    }
  `)

  const vidRef = useRef()

  useEffect(() => {
    if (vidRef.current && window.innerWidth > 768) {
      vidRef.current.muted = true
      vidRef.current.play()
    }
  }, [vidRef])

  return (
    <section className="relative min-h-screen pt-32 md:pt-20">
      <div className="container px-8 mx-auto">
        <div className="relative md:w-1/2 md:min-h-screen flex flex-col items-center justify-center">
          <div className="relative w-full">
            <img
              src={accent}
              alt="Edward Bailey"
              className="absolute inset-0 transform scale-150 translate-y-10 md:translate-y-0 origin-right"
            />
            <Slogan className="relative z-10 md:max-w-sm" />
          </div>
          <h1 className="font-normal mt-12 text-xl md:text-2xl">
            {data.contentfulPage.heroBio.heroBio}
          </h1>
        </div>
      </div>
      <video
        playsinline
        autoplay
        muted
        loop
        ref={vidRef}
        poster={poster}
        className="md:w-1/2 md:absolute right-0 z-0 bottom-0"
      >
        <source
          src={data.contentfulPage.heroImage.file.url}
          type={data.contentfulPage.heroImage.file.contentType}
        />
      </video>
    </section>
  )
}

export default Hero
