import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import readText from "../images/read.svg"
import scribble from "../images/scribble.svg"
import arrow from "../images/arrow.svg"
import accent from "../images/accent-2@2x.png"

const Read = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPage(id: { eq: "a281e1c1-97ce-5d9f-b907-47b658d964a0" }) {
        blogSectionDescription {
          blogSectionDescription
        }
      }
      allMediumPost(limit: 2, sort: { fields: firstPublishedAt, order: DESC }) {
        nodes {
          id
          mediumUrl
          title
          uniqueSlug
          author {
            username
          }
          firstPublishedAt(formatString: "DD MMMM YYYY")
          virtuals {
            previewImage {
              imageId
            }
            subtitle
          }
        }
      }
    }
  `)
  return (
    <section
      className="relative min-h-screen py-20 overflow-hidden"
      id="blogSection"
    >
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        <div class="mb-0 relative w-2/3 md:w-1/5 self-start">
          <img
            src={accent}
            alt="Edward Bailey"
            className="absolute top-0 right-0 transform origin-right scale-150"
          />
          <img src={readText} alt="Read" className="relative mr-auto md:mr-8" />
        </div>
        <div class="mb-24 md:mb-32 relative w-4/5 md:w-2/5 self-start">
          <img
            src={accent}
            alt="Edward Bailey"
            className="absolute top-0 right-0 transform origin-right"
            style={{
              transform: "scale(1.8) rotate(4deg) translate(0%, 10%)",
            }}
          />
          <h2 className="relative font-normal text-xl md:pt-4">
            {data.contentfulPage.blogSectionDescription.blogSectionDescription}
          </h2>
        </div>
        <div className="grid md:grid-cols-6 md:gap-4 w-full md:pr-20">
          {data.allMediumPost.nodes.map((p, i) => (
            <a
              href={`https://medium.com/@${p.author.username}/${p.uniqueSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block md:col-span-2 relative ${
                i === 0 ? "md:col-start-1" : "md:col-start-4"
              }`}
              key={i}
            >
              <div
                style={{
                  background: `url(https://miro.medium.com/max/1000/${p.virtuals.previewImage.imageId}) center center/cover`,
                  padding: "66.25% 0 0 0",
                }}
              />
              <h3 className="font-normal uppercase text-2xl border-b-2 border-black pb-4 mt-8 mb-2">
                {p.title}
              </h3>
              <p className="uppercase font-bold">{p.firstPublishedAt}</p>
              <p>{p.virtuals.subtitle}</p>
              <p className="underline font-bold text-xs uppercase">Read More</p>
              <img
                src={scribble}
                alt="Edward Bailey"
                className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-20"
              />
            </a>
          ))}
          <a
            href="https://medium.com/@edward_49788"
            className="self-center"
            style={{ justifySelf: "center" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={arrow} alt="Edward Bailey" />
            More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Read
