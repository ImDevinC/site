import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-5 text-center">
                            <div className="ftco-footer-widget mb-5">
                                <ul className="ftco-footer-social list-unstyled">
                                    <li className="ftco-animate"><a href={"https://www.twitter.com/" + this.props.twitter} alt="Twitter" target="_blank" rel="noopener noreferrer"><span className="icon-twitter"></span></a></li>
                                    <li className="ftco-animate"><a href={"https://www.instagram.com/" + this.props.instagram} alt="Instagram" target="_blank" rel="noopener noreferrer"><span className="icon-instagram"></span></a></li>
                                    <li className="ftco-animate"><a href={"https://www.linkedin.com/in/" + this.props.linkedin} alt="Facebook" target="_blank" rel="noopener noreferrer"><span className="icon-linkedin"></span></a></li>
                                </ul>
                            </div>
                            <div className="ftco-footer-widget">
                                <h2 className="mb-3">Contact Me</h2>
                                <p className="h3 email"><a href={"mailto:" + this.props.email}>{this.props.email}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}