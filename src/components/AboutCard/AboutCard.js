import React from 'react'
import {
  Link
} from 'react-router-dom'
const image = require('./head_shot.jpg')


const AboutCard = () => {
 return (
    <>
    <div class="card m-3" >
      <h2 class="card-title">About Me</h2>
      <hr />
      <div class="row single-post mt-5 no-gutters">
        <div class="card-body">
          <div class="col-md-12">
            <img src={image} class="card-img float-left pr-4 col-md-6" alt="Laura Aydelotte headshot"/>
            <p class="single-post-content-wrapper p-8">
               Laura Aydelotte is a Full-Stack developer and graduate of the Coding Bootcamp at the University of California Irvine. She specializes in adapting creative ideas to common sense design for responsive applications that provide a smoth and enjoyable user experience with an elegant and reliable backend. She has recent experience with the latest approaches to web development, including JavaScript, React, MySQL, MongDB, and Ruby on Rails. 
               <br/><br/>
               Dr. Aydelotte's web development expertise has grown out of a unique blend of skills as a digital project manager and rare book historian.  She holds a PhD in Renaissance Literature from the University of Chicago and a Master's in Library and Information Science from the University of Illinois Urbana-Champaign.  She has over 5 years of exprience combining her historical and technical expertise as PI and Project Manager for digital humanities projects at the University of Pennsylvania Libraries, and Princeton University Libraries, including the < a href="https://provenanceonlineproject.wordpress.com/">Provenance Online Project</a>, and the NEH funded < a href="https://philadelphiaplaybills.com/">Philadelphia Playbills Project</a>. Her background in project management gives her the skills to work collaboratively to translate the needs of customers and website users into workable data models and ux designs. Her extensive data management experience in the library world provides the foundation for reliable data driven applications, and her skills as a developer who understands both front and backend needs, allow her to make your ideas a reality on the web.
               <br></br><br></br>
               Learn more on <a href="https://www.linkedin.com/in/laura-aydelotte-2499066a/">LinkedIn</a>
            </p>
          </div>
        </div>
          </div>
        </div> 
    </>
  )
}

export default AboutCard