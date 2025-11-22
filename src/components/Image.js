import React from 'react'
import { storyblokEditable } from "@storyblok/react";

const Image = ({blok}) => {
  return (
    <div {...storyblokEditable(blok)}>
      {/* <img src={blok.image.filename} alt="hero" style={{ width: "50%", height: "50%" }} /> */}
      <h1>
        {blok.title}
        
      </h1>
      
    </div>
    
  )
}

export default Image
