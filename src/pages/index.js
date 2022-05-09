import React from "react"
//import ReactPageScroller from 'react-page-scroller';
import Layout from "../components/layout"
import Seo from "../components/seo"
import About1 from "../components/about1"
import SecProyectos from "../components/secProyectos"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"
import SecAventura from "../components/SecAventura"

const IndexPage = () => (

    <Layout >
        <Seo title = "Home" / >
        <About1 / >
        <SecAventura / >
        <SecProyectos / >
    </Layout>
)

export default IndexPage