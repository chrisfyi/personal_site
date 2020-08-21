import React from 'react'

import "../components/YoutubeVid.css"

const YoutubeVid =() => {

return (
    <>
    
    <section class="section video is-primary">
        <div class="youtubeDiv container">
            <figure class="image is-16by9" >
            <iframe class="has-ratio" width="560px" height="315px" src="https://www.youtube.com/embed/B0FjSdrsGKs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"> </iframe>
            </figure>
        </div>
    </section>
    
    </>
)

}

export default YoutubeVid