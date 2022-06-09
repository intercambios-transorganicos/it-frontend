import "./src/components/itLoader.scss"
import React from "react"
import { FormOpenContextProvider } from "./src/Contexts/FormOpenContext";

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

export const wrapRootElement = ({ element }) => (
  <FormOpenContextProvider>{element}</FormOpenContextProvider>
)