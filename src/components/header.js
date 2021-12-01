import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import Menu from "./menu"
import { StaticImage } from "gatsby-plugin-image"
const Header = () => {

  const [click, isClick] = useState(false);
  const miClase = click? "modal is-active" : "modal"; 
  
  function handleclick(){
    isClick(true)
  }
  

  function handleClose(){
    isClick(false);
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
    <header className="level is-mobile">
      <div className="level-left">
        <div className="level-item">
          <div className="logosvg">
          <Link to="/" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 929.92 464.96">
              <circle  cx="232.48" cy="232.48" r="232.48" fill="#4ca899"/>
              <rect x="464.96" width="464.96" height="464.96" fill="#4ca899"/>
            </svg>
          </Link>
          </div>
        </div>
        <div className="level-item">
          <div className="itTitulo">
            <h1 className="title">Intercambios Transorganicos.</h1>
          </div>
        </div>
      </div>

      <div className="level-right">
        <div className="level-item">
        {/* <FontAwesomeIcon className="menuicon" icon={faEllipsisH} onClick={handleclick} /> */}
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
    </header>

    
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
