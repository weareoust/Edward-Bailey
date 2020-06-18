import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="fixed inset-0 flex items-center justify-center m-20">
      <h1 className="font-display text-6xl text-center">Standard OS</h1>
    </div>
  </Layout>
)

export default IndexPage
