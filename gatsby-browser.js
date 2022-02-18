/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/components/itLoader.scss"
export const onClientEntry = () => {
    console.log("from browser-out")
  }

  export const onInitialClientRender = () => {
    console.log("from render-out")
  }

  export const onPreRouteUpdate = () => {
    document.getElementById("preloader").classList.add('fadeOutDownX');
    setTimeout(() => {
      document.getElementById("preloader").setAttribute('hidden', 'true');
      document.getElementsByTagName("body")[0].classList.remove("preloader_active");
    }, 1000)
}
  