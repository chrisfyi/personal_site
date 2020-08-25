import React from 'react'

import "./LogoFigure.css"


import desk from '../assets/desk.png'

const MyImage = () => {


    return(
        <article class="media mb-5">
        
        <div class="media-content">
          <div class="columns is-centered">
           <img src= {desk}  alt=" desk "/>
          </div>
         
        </div>
        
      </article>


    )
}

export default MyImage