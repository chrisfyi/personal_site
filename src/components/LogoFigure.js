import React from 'react'


import desk from '/Users/chrisfyi/Desktop/course_work/personal_site/src/assets/desk.png'

const MyImage = () => {


    return(
        <article class="media mb-5">
        
        <div class="media-content">
          <div class="columns is-centered">
           <img src= {desk} />
          </div>
         
        </div>
        
      </article>


    )
}

export default MyImage