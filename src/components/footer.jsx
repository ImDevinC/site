import React, { Component } from 'react'
import SocialMediaLink from './socialMediaLink'

export default class Footer extends Component {
    render() {
        return (
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-5 text-center">
                            <div className="ftco-footer-widget mb-5">
                                <ul className="ftco-footer-social list-unstyled">
                                    <li className="ftco-animate"><SocialMediaLink username={this.props.twitter} site="twitter" /></li>
                                    <li className="ftco-animate"><SocialMediaLink username={this.props.instagram} site="instagram" /></li>
                                    <li className="ftco-animate"><SocialMediaLink username={this.props.linkedin} site="linkedin" /></li>
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