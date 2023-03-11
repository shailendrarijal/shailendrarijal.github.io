import React from "react";
import displayPicture from '../images/about-image.jpg';


function About() {
  
  return (
    <div className="container-fluid">
        <section id="about" class="about">
          <div class="row">
            <div class="col-lg-4 col-md-8 col-sm-12 img-container">
              <img src={displayPicture} class="img-fluid" alt ="display"/>
              <span class="text-center">Software engineer</span>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 desc">

              <h3>S.Rijal</h3>
              <p>
                Thank you for visiting my website. Currently, I am working as a software engineer at Service NSW. While this is my current spotlight, I have had many spotlights throughout my life as a biotechnology graduate, cook, restaurant supervisor, tutor and call centre agent. One thing that remained the same is my passion for learning and shining at the spotlight. My learning curve never flattens as I always find something new to learn. 
                      </p>
                      <p>If you want to have chat about your career or discuss any opprotunity, please feel free to reach out to me via LinkedIn or email.</p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default About;
