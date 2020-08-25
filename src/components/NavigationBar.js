import React from 'react'

import "../components/NavigationBar.css"

import github from "../assets/logo-github.svg"
import LinkedIn from "../assets/logo-linkedin.svg"
import email from "../assets/mail-outline.svg"



const NavigationBar = () => {

    return (
       
       
       <>
      
          <section class="hero is-transparent is-11 is-small">
         
           <div class= "column is-11">
            <p class="buttons">
              
              <a href="https://www.github.com/chrisfyi">
                <button class="button is-small">
                  <span class="icon">
                    <img class="logo"  alt= " git hub "src= { github } />
                  </span>
                  <span>GitHub</span>
                </button>
              </a>

              <a href ="https://www.linkedin.com/in/chrisj117/">
                <button class="button is-small">
                  <span class="icon">
                    <img class="logo"  alt ="linked in" src= { LinkedIn } />
                  </span>
                  <span>LinkedIn</span>
                </button>
                </a>  
                <a href = "mailto: chrisfyi@hotmail.com">
                <button class="button is-small">
                  <span class="icon">
                  <img class="logo" alt="email" src= { email }></img>
                  </span>
                  <span>Email</span>
                </button>
                </a> 
            </p>
          </div>
        
                    
              

  {/* <!-- Hero content: will be in the middle --> */}
            <div class="hero-body has-text-centered is-11">
              <div>
                <h1 class="title is-spaced is-size-1 ">
                Christopher Jones
                </h1>
                <h2 class="subtitle">
                Developer | Designer | Game Enthusiast</h2>
                <br></br>
                
              </div>
            </div>
  

  {/* <!-- Hero footer: will stick at the bottom --> */}
            


            <nav class="level ">
            <p class="level-item has-text-centered has-text-justified ">
              {/* <a class="is-size-5" href= { ParagraphCard } >About Me</a> */}
            </p>
            <p class="level-item has-text-centered">
              {/* <a href="" class="is-size-5">Skills</a> */}
            </p>

            <p class="level-item has-text-centered">
              {/* <a class="is-size-5"
              >Projects</a> */}
            </p>
            <p class="level-item has-text-centered">
              {/* <a class="is-size-5">Contact</a> */}
            </p>
          </nav>
        </section>
       </>   
    )


}

export default NavigationBar