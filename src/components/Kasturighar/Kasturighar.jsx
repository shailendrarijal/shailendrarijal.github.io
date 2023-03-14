import React, { useState } from 'react';
import products from './products';
import collage from './images/collage.png';
import scroll1 from './images/scroll1.png';
import scroll2 from './images/scroll2.png';
import scroll3 from './images/scroll3.png';
import scroll4 from './images/scroll4.png';
import iconEmail from './images/icon-email.png';
import iconFacebook from './images/icon-facebook.png';
import iconInstagram from './images/icon-instagram.png';
import iconPhone from './images/icon-phone.png';
import testimonials from './images/testimonials.jpg';
import './styles.css';


function Kasturighar() {
    const yearNow = new Date().getFullYear();

    function About() {
        return (
            <div>
                <section id="about-kasturighar">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <img class="about-photo" src={collage} alt="working process" />
                        </div>
                        <div class="col-lg-8 col-md-6 col-sm-12">
                            <h2>Who are We?</h2>
                            <p>Kasturi Ghar is an agricultural business house which is focused on promoting ethnic products. Our motto is "One Community One Product". Our Ghar is mainly inclined towards ethnomedicine and helping the local communities to know the essence of their products.</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    function Carousel() {
        return (
            <div>
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="carousel-photo" src={scroll1} alt="Vijaysar tumblers" />
                            <p>'Nature comes to you when you care for yourself'</p><strong>-Kasturi Ghar </strong>
                        </div>

                        <div class="carousel-item ">
                            <img class="carousel-photo" src={scroll2} alt="Vijaysar tree" />
                            <p>'Do you wish to be in symmetry with the nature? Join Us!'</p><strong>-Vijaysar tree</strong>
                        </div>

                        <div class="carousel-item ">
                            <img class="carousel-photo" src={scroll3} alt="Vijaysar tumblers" />
                            <p>'Kasturi Ghar Presents you the kingly wooden products:'</p><strong>The elixir of Farwest </strong>
                        </div>

                        <div class="carousel-item ">
                            <img class="carousel-photo" src={scroll4} alt="Color change to blue" />
                            <p>'Vijaysar wood contains important metabolites which change the color of the water into bluish brown'</p><strong>Drink with your favourite flavor </strong>
                        </div>

                    </div>
                    <a class="carousel-control-prev carousel-button" href="#header-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next carousel-button" href="#header-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
    function Contacts() {

        const [visibility, setVisibility] = useState(false);

        function showInfo() {
            setVisibility(!visibility);
        }

        return (
            <div>
                <section id="contactUs" class="container">
                    <h2>Get In Touch</h2>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-4">
                            <a href="https://www.facebook.com/kasturighar" target="_blank"><div id="facebook-icon-container" class="icon-container-kasturighar">
                                <img class="icon" src={iconFacebook} alt="facebook link" />
                                <span>Facebook</span>
                            </div></a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4">
                            <a href="https://www.instagram.com/kasturi.ghar/" target="_blank"><div id="instagram-icon-container" class="icon-container-kasturighar">
                                <img class="icon" src={iconInstagram} alt="instagram link" />
                                <span>Instagram</span>
                            </div></a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4">
                            <div id="phone-icon-container" class="icon-container-kasturighar" onClick={showInfo}>
                                <img class="icon" src={iconPhone} alt="phone link" />
                                <span id="btn-phone" class="contact-item mr-5">Phone</span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4">
                            <div id="email-icon-container" class="icon-container-kasturighar" onClick={showInfo}>
                                <img class="icon" src={iconEmail} alt="email link" />
                                <span id="btn-email" class="contact-item mr-5">Email</span>
                            </div>
                        </div>
                        {visibility ? <div className={visibility, "text-center container"}><span>Email: kasturighar@gmail.com</span><br /><span>Phone: +977 985-8779677</span></div> : null}

                    </div>
                </section>
            </div>
        );
    }
    function Footer() {
        return (
            <div>
                <footer id="footer">
                    <div class="column">
                        <p>Kasturi Ghar &copy; {yearNow}</p>
                        <p id="design">Designed By: Aasha Design Studio</p>
                    </div>
                </footer>
            </div>
        );
    }
    function Header() {
        return (

            <section id="header-kasturighar">
                <nav id="navbar-kasturighar" class="navbar fixed-top navbar-expand-md">
                    <a class="navbar-brand-kasturighar" href="#carousel"> Kasturi Ghar </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon-kasturighar">&lt;</span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link-kasturighar" href="#ourProducts">Products</a>
                            </li>
                            <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link-kasturighar" href="#about">About Us</a>
                            </li>
                            <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
                                <a class="nav-link-kasturighar" href="#contactUs">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Carousel />

            </section>
        );
    }
    function PopUp() {
        return (
            <div>
                <div id="myModal" class="modal">
                    <div id="modal" class="modal-content">
                        <span class="close">&times;</span>
                        <p id="emailAddress" class="emailAddress">Email: <a href="mailto:kasturighar@gmail.com"><strong>kasturighar@gmail.com</strong></a></p><hr />
                        <p id="phoneNumber" class="phoneNumber">Phone: <strong>+977 985-8779677</strong></p>
                    </div>
                </div>
            </div>
        );
    }
    function ProductCard(props) {
        return (
            <div>
                <div class="row">
                    <div class=" card col-lg-5 col-md-6 product-card">
                        <img class="card-top-img product-img" src={props.imgUrl} alt="The regular vase" />
                        <h3 class="card-title product-name">{props.name}</h3>
                        <div class="card-body">
                            <p class="usability"><strong>Usability:</strong> {props.usability} </p>
                            <p class="volume"><strong>Volume:</strong> {props.volume}</p>
                        </div>
                        <p class="card-footer price">{props.price}</p>
                    </div>
                </div>
            </div>
        );
    }
    function Products() {
        return (
            <div>
                <section id="ourProducts" class="container">
                    <h2 id="product-heading" class="h2-kasturighar">Our Products</h2>

                    {products.map(productItem => (
                        <ProductCard
                            key={productItem.key}
                            name={productItem.name}
                            imgUrl={productItem.imgUrl}
                            volume={productItem.volume}
                            usability={productItem.usability}
                            price={productItem.price}
                        />
                    ))}
                </section>
            </div>
        );
    }
    function Testimonials() {
        return (
            <div>
                <section id="testimonials">
                    <h2>Testimonials</h2>
                    <div class="container testimonial-container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3">
                                <img class="testimonial-photo" src={testimonials} alt="testimonial Soma Panta" />
                            </div>
                            <div class="col-lg-9 col-md-9">
                                <p class="testimonial-text"> "Not neglected anymore, our ancient ayurvedic medicine is back with a bang. Kasturi ghar is ready to serve you. Don't wait too long, order now and feel the benefits!" </p>
                                <span id="testimonial-person1" class="testimonial-person"><strong>- Soma Pant</strong></span><br />
                                <address id="testimonial-person-designation1" class="testimonial-person-designation">Woman Entrepreneur and French tutor<br />
                                    Director of School <br />(Shridiwa International School, Bishalnagar, Kathmandu)</address>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }




    return (
        <div className="Kasturighar">
            <Header />

            <About />

            <Products />

            <Testimonials />

            <Contacts />

            <Footer />
            {/* <script src="src\kasturighar.js"></script> */}
        </div>
    );
}

export default Kasturighar;
