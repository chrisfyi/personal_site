import React from 'react'

import "../components/ParagraphCard.css"

const ParagraphCard =() =>{

    return (
        <section class="section is-primary is-medium has-text-centered">
             <div class="container">
              <div class="hero is-transparent is small">
                <div class="hero-head is-transparent"></div>
                <h1 class="title is-size-1-desktop"> Hello, Im Chris! </h1>
                </div>
                <div class="columns is-centered">
                  
                  <div class= "columns is-three-fifths">
                     
                      <p class="subtitle is-size-4-desktop">
                        I am a Web Developer. I recently received a certificate from the Coding Bootcamp at CalPoly hosted by Fullstack Academy. This was a rigorous program where I learned front-end and back-end technologies such as Javascript, React, Node and more. 
                        <br></br>
                        <br></br> 
                        Up next I intend to put my skilld to use in either front-end, back-end or fullstack development. My project portfolio demonstrates a mix of technologies as well as my own creative touch. I have a particular interest in building robust and fluid front-end applications. I love to learn, am easy to work with, and I work tirelessly to ensure my work is quality material.
                        <br></br> 
                        <br></br>
                        I look forward to working with you!
                      </p>
                  </div>
               </div>
             </div>
        </section>
   )
}

export default ParagraphCard