import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <section id="watch"></section>
    <section id="listen"></section>
    <section id="read"></section>
    <section id="testimonial"></section>
    <footer></footer>
  </Layout>
)

export default IndexPage
