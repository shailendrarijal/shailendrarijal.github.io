import React, {useState} from "react";
import {Link} from "react-router-dom";

function Contact() {
  
  const [visibility, setVisibility] = useState(false);

    function showInfo() {
        setVisibility(!visibility);
    }

  return (
    <div className="container-fluid">
        <section id="contact" class="contact text-center">
            <h2>Get in touch</h2>
            <div class="container">
                <div class="row">
                <a class="contact-item mr-5" href="https://www.linkedin.com/in/shailendrarijal/" target="_blank">LinkedIn</a>
                <a class="contact-item mr-5" target="_blank" href="https://github.com/shailendrarijal">GitHub</a>
                
                <a class="contact-item mr-5" href="https://www.freecodecamp.org/shailendrarijal" target="_blank">FreeCodeCamp</a>
                <p id="btn-email" class="contact-item mr-5" onClick={showInfo}>Email</p>
                </div>
            </div>

            {visibility? <div className={visibility}><span>Email: shailendrarijal@gmail.com</span></div> : null }

        </section>
    </div>
  );
}

export default Contact;
export {Link};
