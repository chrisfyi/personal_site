import React from 'react'

import "../components/PortfolioCard.css"

import afc from "../assets/afc.png"
import link from "../assets/linkerator.png"
import userhub from "../assets/userhub.png"
import deckBuilder from "../assets/deckBuilder.png"
import devjobs from "../assets/devjobs.png"
import todo from "../assets/todo.png"

const PortfolioCardGroups = () => {


    return (
      <div class="hero is-transparent">
      <section class="section portCards is-primary is-small has-text-centered">
        <div class="hero-head">
              <p class="title is-size-2 has-text-centered"> Portfolio </p>
          </div>

      <div class="container">
          <div class="portfolio-grid">
              <div class="columns is-multiline level">
                  
                  <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                      <div class="port card">
                      <div class="port box">
                       
                        <figure class="image">
                          <img src= { afc } alt=""></img>
                        </figure>
                      
                      <h1 class="title is-size-4 is-spaced">AFC Skate Shop</h1>
                     
                      <p class=" portText has-text-centered"> A Full Stack e-commerce web application where users can shop for skate wear and supplies. Users have the ability to to create an account, shop and checkout easily. I developed this along with two talented teammates in Aiden Weber and Frak Stefanski.</p>
                      <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                        <div class="columns is-multiline">
                        <div class="column is-half">
                            <ul>
                                <li> Javascript </li>
                                <li> React </li>
                                <li> React Bootstrap </li>
                                <li> Node.js </li>
                            </ul>
                        </div>
                            
                        <div class="column is-half">  
                             <ul>
                                <li> Express </li>
                                <li> PostgreSQL </li>
                                <li> Weboack </li>
                                <li> Bcrypt </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                      </div>
                      </div>
                    
                  
                <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div class="port card">
                      <div class="port box">
                  <figure class="link image">
                         <img src= { link } alt="" ></img>
                      </figure>
                      <h1 class="title is-size-4 is-spaced">The Great Linkerator</h1>
                      <p class="portText has-text-centered"> A Fullstack bookmark web application that allows users to keep track of their favorite links, add comments and tags to categorize them. I developed this project with two of my classmates, Kevin Hassencamp and Garrett Wren.</p>
                      <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                      <ul>
                          <li> Node.js </li>
                          <li> Express </li>
                          <li> PostgreSQL </li>
                          <li> Bcrypt </li>
                          <li> Webpack </li>
                      </ul>
                      </div>
                      </div>
                      </div>
                      <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                      <div class="port card">  
                      <div class="box">
                            <a href="https://dreamy-neumann-52f444.netlify.app">
                  <figure class="image">
                          <img src= { userhub } alt=""></img>
                      </figure>
                      <h1 class="title is-size-4 is-spaced">User Hub</h1>
                      <p class="portText has-text-centered"> A web application that displays users posts and todo lists that they have created. This project utilizes the React framework for asynchronous programming and also the React Router to handle the front-end routing. This app was styled with CSS3 that was also rendered with React.  </p>
                      <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                      <ul>

                          <li>React.js</li>
                          <li>Javascript</li>
                          <li>CSS3</li>
                          <li>HTML5</li>
                          <li>Axios</li>
                      </ul>
                      </a>
                      </div>
                      </div>
                  </div>

                  <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div class="port card">
                      <div class="port box">
                  <figure class="link image">
                         <img src= { deckBuilder } alt=""></img>
                      </figure>
                      <h1 class="title is-size-4 is-spaced">Deckbuilder</h1>
                      <p class="portText has-text-centered"> A web application that I designed around the Magic: The Gathering Card Game. It allows users to research and build card decks for the game. It was built using the React framework,made its API call using Axios, and it was styled with CSS3.</p>
                      <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                      <ul>
                          <li> React.js</li>
                          <li> Javascript </li>
                          <li> HTML5 </li>
                          <li> CSS3 </li>
                          <li> Axios</li>
                      </ul>
                      </div>
                      </div>
                      </div>
                      <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                      <div class="port card" >  
                      <div class="box" >
                          <a href="https://polar-depths-01375.herokuapp.com/">
                  <figure class="image">
                          <img src= { devjobs } alt=""></img>
                      </figure>
                      <h1 class="title is-size-4 is-spaced">Dev Jobs</h1>
                      <p class="portText has-text-centered"> A web application that displays users posts and todo lists that they have created. This project utilizes the React framework for asynchronous programming and also the React Router to handle the front-end routing. This app was styled with CSS3 that was also rendered with React.  </p>
                      <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                      <ul>

                          <li>React.js</li>
                          <li>Javascript</li>
                          <li>CSS3</li>
                          <li>HTML5</li>
                      </ul>
                      </a>
                      </div>
                      </div>
                  </div>

                <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div class="port card">
                      <div class="box">
                         <a href="https://modest-noether-862f3a.netlify.app">
                            <figure class="image">
                            <img src= { todo } alt="" ></img>
                            </figure>
                                <h1 class="title is-size-4 is-spaced">TODO App</h1>
                                <p class="portText has-text-centered"> TODO App is a simple, three-column to-do JavaScript app, allowing users to create and delete todo items. This app automatically filters items as complete, pending, or expired. It also allows users to manually move complete items to incomplete, and expired and incomplete items to complete.  </p>
                                <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML 5</li>
                                        <li>CSS3</li>
                                    </ul>
                         </a>
                        </div>
                    </div>
                </div>  

{/* 
                <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div class="port card">
                      <div class="box">
                         <a href="https://modest-noether-862f3a.netlify.app">
                            <figure class="image">
                            <img src= { todo } alt="" ></img>
                            </figure>
                                <h1 class="title is-size-4 is-spaced">TODO App</h1>
                                <p class="portText has-text-centered"> TODO App is a simple, three-column to-do JavaScript app, allowing users to create and delete todo items. This app automatically filters items as complete, pending, or expired. It also allows users to manually move complete items to incomplete, and expired and incomplete items to complete.  </p>
                                <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML 5</li>
                                        <li>CSS3</li>
                                    </ul>
                         </a>
                        </div>
                    </div>
                </div>  


                <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div class="port card">
                      <div class="box">
                         <a href="https://modest-noether-862f3a.netlify.app">
                            <figure class="image">
                            <img src= { todo } alt="" ></img>
                            </figure>
                                <h1 class="title is-size-4 is-spaced">TODO App</h1>
                                <p class="portText has-text-centered"> TODO App is a simple, three-column to-do JavaScript app, allowing users to create and delete todo items. This app automatically filters items as complete, pending, or expired. It also allows users to manually move complete items to incomplete, and expired and incomplete items to complete.  </p>
                                <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML 5</li>
                                        <li>CSS3</li>
                                    </ul>
                         </a>
                        </div>
                    </div>
                </div>  


                <div class="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
                    <div class="port card">
                      <div class="box">
                         <a href="https://modest-noether-862f3a.netlify.app">
                            <figure class="image">
                            <img src= { todo } alt="" ></img>
                            </figure>
                                <h1 class="title is-size-4 is-spaced">TODO App</h1>
                                <p class="portText has-text-centered"> TODO App is a simple, three-column to-do JavaScript app, allowing users to create and delete todo items. This app automatically filters items as complete, pending, or expired. It also allows users to manually move complete items to incomplete, and expired and incomplete items to complete.  </p>
                                <p class="list-title is-primary  has-text-weight-normal has-text-centered">Technologies Used:</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>HTML 5</li>
                                        <li>CSS3</li>
                                    </ul>
                         </a>
                        </div>
                    </div>
                </div>           */}
           
           </div> 
         </div>
      </div>
    </section>
</div>

    )}

export default PortfolioCardGroups
