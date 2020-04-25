import React, { Component } from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import Services from './services'

export default class Page extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <Header image="person_1.jpg" title="Devin Collins" />
                <Hero />
                <About
                    image="author-1.jpg"
                    name="Devin Collins"
                    description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                          the blind texts. Separated they live in."
                    resume_url="#"
                    twitter="ImDevinC"
                    instagram="ImDevinC"
                    linkedin="ImDevinC"
                    email="me@imdevinc.com"
                    phone="6145943351" />
                <Services services={
                    {
                        "layers": ["UI/UX Design", "Mobile App Design", "Responsive Design"],
                        "gears": ["Product Strategy", "Design Sprints", "UX Strategy"],
                        "code": ["HTML/CSS", "Prototyping", "User Testing"]
                    }
                } />

                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section ftco-animate">
                                <span>Portfolio</span>
                                <h2>Checkout a few of my works</h2>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="portfolio-single.html" className="image d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: "url('images/work-1.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    <h4 className="subheading">Illustration</h4>
                                    <h2 className="heading"><a href="portfolio-single.html">Even the all-powerful Pointing has no control</a>
                                    </h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                        life One day however a small line of blind text.</p>
                                    <p><button>View Project</button></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="portfolio-single.html" className="image order-2 d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: "url('images/work-2.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text order-1">
                                    <h4 className="subheading">Application</h4>
                                    <h2 className="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a>
                                    </h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                        life One day however a small line of blind text.</p>
                                    <p><button>View Project</button></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="portfolio-single.html" className="image d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: "url('images/work-3.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    <h4 className="subheading">Web Design</h4>
                                    <h2 className="heading"><a href="portfolio-single.html">Even the all-powerful Pointing has no control</a>
                                    </h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                        life One day however a small line of blind text.</p>
                                    <p><button>View Project</button></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="portfolio-single.html" className="image order-2 d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: "background-image: url('images/work-4.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text order-1">
                                    <h4 className="subheading">Application</h4>
                                    <h2 className="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a>
                                    </h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                        life One day however a small line of blind text.</p>
                                    <p><button>View Project</button></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="portfolio-single.html" className="image d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: "url('images/work-5.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text">
                                    <h4 className="subheading">Animation</h4>
                                    <h2 className="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a>
                                    </h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                        life One day however a small line of blind text.</p>
                                    <p><button>View Project</button></p>
                                </div>
                            </div>
                            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                                <a href="portfolio-single.html" className="image order-2 d-flex justify-content-center align-items-center"
                                    style={{ backgroundImage: "url('images/work-6.jpg')" }} data-scrollax=" properties: { translateY: '-30%'}">
                                    <div className="icon d-flex text-center justify-content-center align-items-center">
                                        <span className="icon-search"></span>
                                    </div>
                                </a>
                                <div className="text order-1">
                                    <h4 className="subheading">Branding</h4>
                                    <h2 className="heading"><a href="portfoli-singleo.html">Even the all-powerful Pointing has no control</a>
                                    </h2>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                        life One day however a small line of blind text.</p>
                                    <p><button>View Project</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ftco-section ftco-counter" id="section-counter">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-5">
                            <div className="col-md-7 text-center heading-section ftco-animate">
                                <span>Portfolio</span>
                                <h2>I love to share my achievements</h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-start">
                            <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <span className="ftco-label">Clients</span>
                                        <strong className="number" data-number="420">0</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <span className="ftco-label">Project done</span>
                                        <strong className="number" data-number="890">0</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <div className="col-md-5 counter-wrap ftco-animate">
                                <div className="block-18">
                                    <div className="text">
                                        <span className="ftco-label">Cups of coffee</span>
                                        <strong className="number" data-number="1000">0</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="ftco-footer ftco-bg-dark ftco-section">
                    <div className="container">
                        <div className="row mb-5 justify-content-center">
                            <div className="col-md-5 text-center">
                                <div className="ftco-footer-widget mb-5">
                                    <ul className="ftco-footer-social list-unstyled">
                                        <li className="ftco-animate"><button><span className="icon-twitter"></span></button></li>
                                        <li className="ftco-animate"><button><span className="icon-facebook"></span></button></li>
                                        <li className="ftco-animate"><button><span className="icon-instagram"></span></button></li>
                                    </ul>
                                </div>
                                <div className="ftco-footer-widget">
                                    <h2 className="mb-3">Contact Us</h2>
                                    <p className="h3 email"><button>info@email.com</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">

                                <p>
                                    Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                      with <i className="icon-heart" aria-hidden="true" style={{ color: "red" }}></i> by <a href="https://colorlib.com"
                                        target="_blank" rel="noopener noreferrer">Colorlib</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>

                <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px">
                    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
                    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                        stroke="#F96D00" /></svg></div>

            </div>
        )
    }
}