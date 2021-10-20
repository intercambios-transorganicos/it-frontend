import React from "react"
import "./mystyles.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Homepage from "../components/homepage"
import Homepage2 from "../components/homepage2"
import About1 from "../components/about1"
import About2 from "../components/about2"
import About3 from "../components/about3"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Home" />
    <Homepage2/>
    <Homepage/>
    <About1/>
    <About2/>
    <About3/>
  </Layout>
)

export default IndexPage
