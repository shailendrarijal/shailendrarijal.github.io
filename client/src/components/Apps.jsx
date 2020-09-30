import React from "react";
import { Link } from 'react-router-dom';

function Apps(){

    return (
        <div className="container-fluid">
            <section id="portfolio" class="portfolio">
                <h2 class="text-center">Apps</h2>
                <div class="container">
                <div class="row text-center">
                    
            
                    <div class="card card-portfolio mb-5">
                        <div class="card-body">
                            <h5 class="card-title">Drumset</h5>
                            <p class="card-text"> Relax with some drum rolls - Click on the pictures to make drum sound </p> 
                            <Link to="/Drumset" class="btn seemore">Take me there</Link>
                        </div>
                    </div>
                    
                    <div class="card card-portfolio mb-5">
                        <div class="card-body">
                            <h5 class="card-title">BMI Calculator</h5>
                            <p class="card-text">Enter your weight and height and calcualate your BMI</p> 
                            <Link to="/Calculator" class="btn seemore">Take me there</Link>
                        </div>
                    </div>

                    {/* <div class="card card-portfolio mb-5">
                        <div class="card-body">
                            <h5 class="card-title">Weather-App</h5>
                            <p class="card-text">This app uses API from openweather to display some weather characterstics of cities entered by the user.</p>
                            <Link to="/WeatherApp" class="btn seemore">Take me there</Link>
                        </div>
                    </div> */}

                    <div class="card card-portfolio mt-5">
                        <div class="card-body">
                        <h5 class="card-title">NotePad</h5>
                        <p class="card-text">Take Notes with this note taking app</p> 
                        <Link to="/toDoList" class="btn seemore">Take me there</Link>
                        </div>  
                    </div>

                    <div class="card card-portfolio mt-5">
                        <div class="card-body">
                        <h5 class="card-title">Dice Game</h5>
                        <p class="card-text">Resolve yur dispute with this Dice game. Higher number wins! </p> 
                        <Link to="/DiceGame" class="btn seemore">Take me there</Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Apps;
export {Link};