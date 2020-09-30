import React from "react";

import bbnImg from "../images/bbn.JPG";
import kasturigharImg from "../images/kasturighar.JPG";
import documentationImg from "../images/technical-documentation.JPG";
import surveryFormImg from "../images/survey-form.JPG";



function Projects() {
  
  return (
    <div className="container-fluid">
        <section id="portfolio" class="portfolio">
        <h2 class="text-center">Projects</h2>
         <div class="container">
          <div class="row text-center">
           <div class="card card-portfolio mb-5 mx-auto">
              <img class="card-img-top" src={bbnImg} alt="Blackboard Nepal" />
              <div class="card-body">
                <h5 class="card-title">Blackboard Nepal</h5>
                <p class="card-text">My first project using SQL and PHP - This website was created to provide free vocabulary resources to the NAATI CCL Nepali Test takers</p> 
                <a href="https://www.blackboardnepal.com" target="_blank" class="btn seemore">Take me there</a>
              </div>
            </div>
       
              <div class="card card-portfolio mb-5 mx-auto">
              <img class="card-img-top" src={kasturigharImg} alt="Kasturi Ghar" />
              <div class="card-body">
                <h5 class="card-title">Kasturi Ghar</h5>
                <p class="card-text">My first client based project using HTML, CSS and JavaScript - created with the aim of promoting their ethno-community based business through web presence. </p> 
                <a href="https://dry-beyond-48330.herokuapp.com/" target="_blank" class="btn seemore">Take me there</a>
              </div>
            </div>
              
              <div class="card card-portfolio mt-5 mx-auto">
              <img class="card-img-top" src={documentationImg} alt="Technical documentation for Blackboard Nepal" />
              <div class="card-body">
                <h5 class="card-title">Technical documentation</h5>
                <p class="card-text">Technical documentation for Blackboard Nepal - created as a project of freecodecamp Responsive Web design course</p> 
                <a href="https://codepen.io/shailendrarijal/pen/ZEQyezB" target="_blank" class="btn seemore">Take me there</a>
              </div>
            </div>
              
              <div class="card card-portfolio mt-5 mx-auto">
              <img class="card-img-top" src={surveryFormImg} alt="Survey Form" />
              <div class="card-body">
                <h5 class="card-title">Survey form</h5>
                <p class="card-text">A form for survey - created as a project of freecodecamp Responsive Web design course</p> 
                <a href="https://codepen.io/shailendrarijal/pen/MWKmprQ" target="_blank" class="btn seemore">Take me there</a>
              </div>
            </div>
          </div>
         </div>
     </section>

    </div>
  );
}

export default Projects;


