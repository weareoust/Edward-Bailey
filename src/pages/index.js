import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Watch from "../components/watch"
import Listen from "../components/listen"
import texture from "../images/white-linen-paper-texture.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div style={{ background: `url(${texture})`, backgroundSize: "cover" }}>
      <Watch />
      <Listen />
      <section id="read"></section>
    </div>
    <section id="testimonial"></section>
    <footer></footer>
  </Layout>
)

export default IndexPage
