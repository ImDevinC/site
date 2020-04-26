import React, { Component } from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import Services from './services'
import Portfolio from './portfolio'
import Achievements from './achievements'
import Footer from './footer'

export default class Page extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <Header image={this.props.headerImage} title={this.props.name} />
                <Hero items={this.props.sliders} />
                <About
                    image={this.props.aboutPhoto}
                    name={this.props.name}
                    description={this.props.description}
                    resume_url={this.props.resumeUrl}
                    twitter={this.props.socialMediaName}
                    instagram={this.props.socialMediaName}
                    linkedin={this.props.socialMediaName}
                    email={this.props.email}
                    phone={this.props.phone} />
                <Services services={this.props.services} />
                <Portfolio items={this.props.portfolio} />
                <Achievements />
                <Footer
                    twitter={this.props.socialMediaName}
                    instagram={this.props.socialMediaName}
                    linkedin={this.props.socialMediaName}
                    email={this.props.email} />
            </div>
        )
    }
}