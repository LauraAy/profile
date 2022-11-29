import React from 'react'
// import {LinkContainer} from 'react-router-bootstrap'

const ThreeLinkCards = () => {
    return ( 

<div class="container">
  <div class="row" width="100%">
    
    <div class="col-sm blend_card">
     <h4>Developer</h4>
     <hr></hr>
     <p>Interested in the code? Click here to see a sample of my development work.
        <ul>
            <li>Javascript & React</li>
            <li>Ruby on Rails</li>
            <li>SQL</li>
            <li>and more...</li>
        </ul>  
     </p>
    </div>

    <div class="col-sm blend_card">
     <h4>Project Manager</h4>
     <hr></hr>
    </div>

    <div class="col-sm blend_card">
      <h4>Curator & Historian</h4>
      <hr></hr>
    </div>
   
  </div>
</div>

 )
}

export default ThreeLinkCards