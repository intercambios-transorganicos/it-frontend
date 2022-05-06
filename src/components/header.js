import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"
import "./header.scss"

const Header = () => {

  const [click, isClick] = useState(false);
  const[burger, setBurger] = useState(false);
  const miClase = click? "modal is-active" : "modal"; 
  
  function handleclick(){
    isClick(true)
  }
  

  function handleClose(){
    isClick(false);
    setBurger(!burger);
  }


  return(
    <div>
      <div className={miClase}>
        <div className="modal-background"></div>
        <div className="menuModalContent">
          <div>
            <Menu click={click} /> 
          </div>
        </div>
        <button onClick={handleClose} className="modal-close is-large menuClose" aria-label="close" ></button>
      </div>


      <nav className="level is-mobile myNav">
        <div className="logoNav level-left">
          <Link to="/" >
            <svg className="logosvg" xmlns="http://www.w3.org/2000/svg" viewBox="-200 -200 1400 900">
              <circle  cx="232.48" cy="232.48" r="232.48" fill="#03BF9E"/>
              <rect x="464.96" width="464.96" height="464.96" fill="#03BF9E"/>
            </svg>

            <div className="itTitulo">
              <h1 className="title">Intercambios Transorgánicos</h1>
            </div>
          </Link>
        </div>

        <div className="level-right">
          <div className="level-item">
          <div className="menuit" onClick={handleclick}>
                
                <StaticImage
                src="../images/menuit.svg"
                placeholder="tracedSVG"
                layout = "CONSTRAINED"
                className="menuImgWrapper"
                
                
              />
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
  
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
