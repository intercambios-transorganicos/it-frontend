import React from "react"
//import ReactPageScroller from 'react-page-scroller';
import Layout from "../components/layout"
import Seo from "../components/seo"
import About1 from "../components/about1"
import SecProyectos from "../components/secProyectos"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"
import SecAventura from "../components/SecAventura"
import useSecProQuery from '../hooks/secProyectQuery'



const IndexPage = () => {

    // const {secProyect} = useSecProQuery();
    // console.log(secProyect);

    return(
      <Layout >
        <div className="landing-wrapper">
        <Seo title = "Home" / >
        <About1 / >
        <SecAventura / >
        <SecProyectos / >
        </div>
      </Layout>
    )
}

export default IndexPage