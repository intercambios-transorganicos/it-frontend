import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Usevideoquery = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiPlaylists {
        id
        videos {
          id
          name
          url
        }
      }
    }
  `);
  const playlist = data.strapiPlaylists.videos.map(node =>{
    const {id, name, url} = node;
    return {
      id,
      name,
      url
    }
  });
  //console.log(playlist);

 if(playlist){
  return{
    playlist
  }
 }else{
   console.log("no data en videoQuery")
 }
  
}

export default Usevideoquery

