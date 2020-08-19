import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';
// import { FontAwesomIcon } from '@fortawesome/react-fontawesome';
// import { falaptop } from '@fortawesome/free-solid-svg-icons'


import "../components/SkillsSection.css"

const SkillsCardDeck=() =>{

   return ( 
    <div class="hero is-transparent">
        <section class="section skills is-primary is-medium">
            <div class="hero-head">
                <p class="title is-size-2 has-text-centered">Skills</p>
            </div>

        <div class="container is-narrow">
            <div class="box">
                <div class="content">
               
                    <div class="columns is-centered">
                    <div class=" skills column">
                        <div class="skills card">
                        <figure class="image">
                            <ion-icon name="desktop-outline"></ion-icon>
                        </figure>
                        <h1 class="title is-size-4 is-spaced">Front-End</h1>
                       
                        <p class="has-text-centered"> I have used and learned a variety of Front-End technologies that have allowed me to create responsive and agile applications.</p>
                        <p class="list-title is-primary  has-text-weight-normal has-text-centered">Front-End Technologies I have used:</p>
                        <div class="columns is-multiline">
                        <div class="column is-half">
                            <ul>
                                <li> Javascript </li>
                                <li> HTML 5 </li>
                                <li> CSS 3 </li>
                                <li> React </li>
                                <li> React Bootstrap </li>
                            </ul>
                        </div>

                        <div class="column is-half">
                            <ul>
                                <li> Bulma </li>
                            </ul>
                        </div>

                        
                       
                        </div>
                        </div>
                        </div>
                        
                    
                    <div class=" skills column">
                    <div class="skills card">
                        <figure class="image">
                           <ion-icon name="code-slash-outline"></ion-icon>
                        </figure>
                        <h1 class="title is-size-4 is-spaced">Back-End</h1>
                        <p class="has-text-centered"> I have used Back-End technologies to build databases, create servers,and serve front-end technolgies with data. Writing databases </p>
                        <p class="list-title is-primary  has-text-weight-normal has-text-centered">Back-End Technologies I have used:</p>
                        <ul>
                            <li> Node.js </li>
                            <li> Express </li>
                            <li> PostgreSQL </li>
                            <li> Bcrypt </li>
                            <li> Webpack </li>
                        </ul>
                        </div>
                        </div>
                    
                    <div class=" skills column">
                        <div class="skills card">
                            <figure class="image">
                                <ion-icon name="add-circle-outline"></ion-icon>
                            </figure>
                        <h1 class="title is-size-4 is-spaced">Other</h1>
                        <p class="has-text-centered"> There are plenty of other skills that I have acquired both through life and during my coding bootcamp experience.</p>
                        <p class="list-title is-primary  has-text-weight-normal has-text-centered">Other Skills I have acquired:</p>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe InDesign</li>
                            <li> Managing Projects and Teams</li>
                            <li>Paired Programming</li>
                        </ul>
                    </div>
                    </div>
             </div> 
         </div>
        </div>
      </div>
     </section>
    </div>
)
}

export default SkillsCardDeck