import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"
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


  useEffect(() => {
      console.log(click);
  },[click])

  
 
  return(
    <div>
    <div className={miClase}>
      <div className="modal-background"></div>
      <div className="modal-content menuModalContent">
        <div className="">
          <Menu click={click} /> 
        </div>
      </div>
      <button onClick={handleClose} className="modal-close is-large menuClose" aria-label="close" ></button>
    </div>

    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand">
        <Link to="/">
          <a className="navbar-item">
            <svg className="logosvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 929.92 464.96">
                <circle  cx="232.48" cy="232.48" r="232.48" fill="#4ca899"/>
                <rect x="464.96" width="464.96" height="464.96" fill="#4ca899"/>
            </svg>
          </a>
        </Link>

        <a 
        role="button" 
        className={`navbar-burger burger ${burger ? "is-active" : "" }`}class="navbar-burger" 
        onClick={() =>{
          setBurger(!burger);
          isClick(true);
        }} 
        aria-label="menu" aria-expanded="false" 
        data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

      </div>

      <div className="navbar-menu" >
        
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="itTitulo">
              <h1 className="title">Intercambios Transorganicos.</h1>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
          <div className="menuit" onClick={handleclick}>
              
              <StaticImage
              src="../images/menuit.svg"
              alt="LogoIt"
              placeholder="tracedSVG"
              layout = "CONSTRAINED"
              className="menuImgWrapper"
              
              
            />
            </div>
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