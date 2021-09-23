import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"
const Header = () => {

  const [click, isClick] = useState(false);
  
  function handleclick(){
    isClick(!click)
  }

  var styleActive = click? true : false;


  useEffect(() => {
      console.log(click);
  })

  return (
    <div>
      <header className="level">
        <div className="level-left">
          <div className="level-item">
            <div className="logosvg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 929.92 464.96">
              <circle  cx="232.48" cy="232.48" r="232.48" fill="#4ca899"/>
              <rect x="464.96" width="464.96" height="464.96" fill="#4ca899"/>
            </svg>
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
            
          /></div>
          </div>
        </div>
      </header>

      <Menu style={styleActive} />
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
