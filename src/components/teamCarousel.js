import React, {useState, useEffect} from 'react';
import {useStaticQuery, graphql} from "gatsby"

const Teamcarousel = () => {

    const data = useStaticQuery(graphql`
    {
      allStrapiMembers {
        edges {
          node {
            id
            nombre
            titulo
            descripcion
          }
        }
      }
    }
  `);

  var[members, setMembers] = useState(null)

  console.log(data.allStrapiMembers.edges);
  //var members = data.allStrapiMembers.edges;

  useEffect(() => {
    setMembers(data.allStrapiMembers.edges);

    console.log(members);
},[])

    return (
        <div className="columns member-cards">
            
            
                  {/* <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div>
                  <div className="column member-card">
                      <div className=" member-content" >
                          <h1>lorem</h1>
                      </div>
                  </div> */}
              </div>
    );
}

export default Teamcarousel;
