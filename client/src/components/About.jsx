import React from "react";
import displayPicture from '../images/about-image.jpg';


function About() {
  
  return (
    <div>
        <section id="about" class="container-fluid about">
          <div class="row">
            <div class="col-lg-4 col-md-8 col-sm-12 img-container">
              <img src={displayPicture} class="img-fluid" alt ="display"/>
              <span class="text-center">Web-developer</span>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 desc">

              <h3>S.Rijal</h3>
              <p>
                Thank you for visiting my website. Following my passion toward web development, I started with HTML, CSS and gradually learned SQL, PHP, BootStrap, JavaScript, NodeJS, Express and React. Applying my skills, I have created some websites which you can find in the projects section. My recent learning was a bootcamp with a developer Angela Yu from Udemy where I learnt about numerous applications as well as learnt how to search for solutions. 
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default About;
