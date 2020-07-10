import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import accent1 from "../images/video-1.svg"
import accent2 from "../images/video-2.svg"
import accent3 from "../images/video-3.svg"

const icons = [accent1, accent2, accent3]

const VideoPlayer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        featuredVideos {
          videoUrl
          videoType
          title
          location
        }
      }
    }
  `)
  const [active, setActive] = useState(0)

  let video_id
  if (data.contentfulPage.featuredVideos[active].videoType === "Youtube") {
    video_id = data.contentfulPage.featuredVideos[active].videoUrl.split(
      "v="
    )[1]
    var ampersandPosition = video_id.indexOf("&")
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition)
    }
  }
  return (
    <div className="bg-black">
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        {data.contentfulPage.featuredVideos[active].videoType === "Vimeo" ? (
          <iframe
            title="Edward Bailey"
            src={`https://player.vimeo.com/video/${data.contentfulPage.featuredVideos[
              active
            ].videoUrl.match(/\d+/g)}?title=0&byline=0&portrait=0`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          >
            <script src="https://player.vimeo.com/api/player.js"></script>
          </iframe>
        ) : (
          <iframe
            title="Edward Bailey"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://www.youtube.com/embed/${video_id}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
      <div className="bg-black text-white grid md:grid-cols-4 p-4 px-8 col-gap-12 row-gap-4">
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
        {data.contentfulPage.featuredVideos.map((v, i) => {
          if (i === active) {
            return (
              <div style={{ order: 1 }} className="relative">
                <h3 className="uppercase font-normal text-lg mb-2">
                  {v.title}
                </h3>
                {v.location ? (
                  <h3 className="uppercase font-normal text-xs">
                    {v.location}
                  </h3>
                ) : (
                  ""
                )}
                <div className="bg-white absolute bottom-0 md:top-0 right-0 w-full md:w-px h-px md:h-full md:-mr-4 transform scale-x-125 md:scale-x-110 md:origin-top" />
              </div>
            )
          } else {
            return (
              <button
                onClick={() => setActive(i)}
                style={{ order: active + 1 }}
                className="text-left grid grid-cols-5"
              >
                <img src={icons[i > 2 ? 0 : i]} alt="Edward Bailey" />
                <div className="col-span-4">
                  <h2 className="uppercase font-normal text-base mb-2">
                    {v.title}
                  </h2>
                  {v.location ? (
                    <h3 className="uppercase font-normal text-xs">
                      {v.location}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              </button>
            )
          }
        })}
      </div>
    </div>
  )
}

export default VideoPlayer
