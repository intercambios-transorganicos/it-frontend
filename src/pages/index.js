import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Homepage from "../components/homepage"
import About1 from "../components/about1"
import About2 from "../components/about2"
import About3 from "../components/about3"
import Loader from "../components/itLoader"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"

const IndexPage = () => (
  
  <Layout>
    <Seo title="Home" />
    {/* <Loader/> */}
    {/* <Homepage/>
    <About1/>
    <About2/>
    <About3/> */}
  </Layout>
)

export default IndexPage
