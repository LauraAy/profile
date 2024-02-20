import React from 'react';

function DevSkillList() {
  return (
    <> 
    <div class="row" width="100%"> 
    <h4>Languages and Technologies</h4>
     <div class="col">
      <h5>Advanced</h5>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>SQL</li>
          <li>Sequelize</li>
        </ul>
      </div>
      <div class="col">
        <h5>Intermediate</h5>
        <ul>
          <li>Python</li>
          <li>MongoDB</li>
          <li>Wordpress</li>
        </ul>
      </div>
      <div class="col">
        <h5>Fundamental</h5>
        <ul>
          <li>PHP</li>
          <li>Ruby on Rails</li>
          <li>Solr</li>
          <li>Drupal</li>
        </ul>
      </div>
    </div> 
    </>
  )
};

export default DevSkillList;