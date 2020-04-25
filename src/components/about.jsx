import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="ftco-section about-section">
                <div className="container">
                    <div className="row d-flex" data-scrollax-parent="true">
                        <div className="col-md-4 author-img" style={{ backgroundImage: "url(images/" + this.props.image + ")" }}
                            data-scrollax=" properties: { translateY: '-70%'}"></div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6 wrap ftco-animate">
                            <div className="about-desc">
                                <h1 className="bold-text">About</h1>
                                <div className="p-5">
                                    <h2 className="mb-5">Hi! I'm {this.props.name}</h2>
                                    <p>{this.props.description}</p>
                                    <p><a href={this.props.resume_url}>Checkout my resume</a></p>
                                    <ul className="ftco-footer-social list-unstyled mt-4">
                                        <li><a href={"https://www.twitter.com/" + this.props.twitter} alt="Twitter" target="_blank" rel="noopener noreferrer"><span className="icon-twitter"></span></a></li>
                                        <li><a href={"https://www.instagram.com/" + this.props.instagram} alt="Instagram" target="_blank" rel="noopener noreferrer"><span className="icon-instagram"></span></a></li>
                                        <li><a href={"https://www.linkedin.com/in/" + this.props.linkedin} alt="Facebook" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a></li>
                                    </ul>
                                    <h5>Contact me here!</h5>
                                    <p>Email: <a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
                                    <p>Phone: <a href={"tel:" + this.props.phone}>{this.props.phone}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}