import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faLink, faMapMarked} from '@fortawesome/free-solid-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import OembedIframe from './oembedIframe'
import "./actividadesExpand.scss";

const Actividadesexpand = ({fecha, titulo, id, link_, desc, lugar, mainData}) => {

    var[isActive, setActive] = useState(false);
    function handleClick(){
        setActive(!isActive);
    }
 
    return (
        <div key={id} className="">
                       {/* TOP */}
                          <div className="actividadElement columns">
                            <div className="column has-text-centered">
                              <h1 className="subtitle fecha">
                                {fecha}
                              </h1>
                          </div>
                          <div className="column  is-8">
                            <h1 className="title titulo" >
                            {
                              titulo
                            }
                            </h1>
                          </div>
                          <div id={id} className="column has-text-centered">
                            
                              <AnchorLink href={`#${id}`}>
                                <FontAwesomeIcon
                                onClick={handleClick} 
                                className="actividadExpand"
                                size="2x" 
                                icon={faExpand} />
                              </AnchorLink>
                            
                          </div>
                        </div>
                        {/* BOTTOM */}
                        {
                            isActive?
                        <div className="columns">
                          <div className="column">
                              <div className="content  box">
                                    <div className="level">
                                        
                                        <div className="level-left">
                                            <div className="level-item">
                                            <FontAwesomeIcon
                                                size="2x" 
                                                icon={faMapMarked} />
                                            </div>
                                            <div className="level-item">
                                                <h1>{ lugar }</h1>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            
                                        </div>

                                    </div>
                                    
                                    
                                    <div className="level">
                                        
                                        <div className="level-left">
                                            <div className="level-item">
                                            <FontAwesomeIcon
                                                size="2x" 
                                                icon={faLink} />
                                            </div>
                                            <div className="level-item">
                                                <h1>{ link_ }</h1>
                                            </div>
                                        </div>
                                        <div className="level-right">
                                            
                                        </div>

                                    </div>


                                    <div >
                                         <p>{ desc }</p>
                                    </div>
                                    <div>
                                        {mainData.length > 0 && <OembedIframe videoData={mainData}/> }
                                    </div>
                              </div>
                          </div>
                        </div>
                        :
                        <div></div>
                        }
                     </div>
    );
}

export default Actividadesexpand;
