import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import FooterV2 from "./FooterV2";
import "./layout.scss";
import { FormOpenContextProvider } from "../Contexts/FormOpenContext";


const Layout = ({ children, setForm, setGoToForm }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(setForm)
  return (
    
    <FormOpenContextProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        {children}
      </main>
      <FooterV2 setForm={setForm} setGoToForm={setGoToForm}/>
    </FormOpenContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout