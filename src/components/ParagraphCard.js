import React from 'react'

import "../components/ParagraphCard.css"

const ParagraphCard =() =>{

    return (
        <section class="section is-primary is-medium has-text-centered is-long">
             <div class="container">
              <div class="hero is-transparent is small">
                <div class="hero-head is-transparent"></div>
                <h1 class="title is-size-1-desktop"> Hello, Im Chris! </h1>
                </div>
                <div class="columns is-centered">
                  
                  <div class= "columns is-three-fifths">
                     
                      <p class="subtitle is-size-4-desktop">
                        I am a Web Developer. I recently received a certificate from the Coding Bootcamp at California State Polytechnic University, Pomona. I intend to put this certificate to use in either Front-end, Back-end or Fullstack development. I have experience with Front-end and Back-end technologies and have done projects that implement them. I have a particular interest in building robust and fluid front-end applications. I love to learn, am easy to work with, and I work tirelessly to ensure my work is quality material.<br></br> I look forward to working with you!
                      </p>
                  </div>
               </div>
             </div>
        </section>
   )
}

export default ParagraphCard