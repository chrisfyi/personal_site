import React from 'react'
// import { Navbar,  } from 'react-bootstrap'

import "../components/NavigationBar.css"



const NavigationBar = () => {

    return (
       <>
          <section class="hero is-transparent is-small">
  {/* <!-- Hero head: will stick at the top --> */}
            <div class="hero">
              <nav class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    
                  </div>
                  </div>
              </nav>
            </div>

  {/* <!-- Hero content: will be in the middle --> */}
            <div class="hero-body has-text-centered">
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
              <a class="is-size-5">About Me</a>
            </p>
            <p class="level-item has-text-centered">
              <a class="is-size-5">Skills</a>
            </p>

            <p class="level-item has-text-centered">
              <a class="is-size-5"
              >Projects</a>
            </p>
            <p class="level-item has-text-centered">
              <a class="is-size-5"
              >Contact</a>
            </p>
          </nav>
        </section>
       </>   
    )


}

export default NavigationBar