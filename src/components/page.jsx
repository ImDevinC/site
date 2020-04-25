import React, { Component } from 'react'
import Header from './header'
import Hero from './hero'
import About from './about'
import Services from './services'
import Portfolio from './portfolio'
import Achievements from './achievements'
import Footer from './footer'

const headerImage = 'person_1.jpg'
const name = 'Devin Collins'
const aboutPhoto = 'author-1.jpg'
const resumeUrl = '#'
const socialMediaName = 'ImDevinC'
const email = 'me@imdevinc.com'
const phone = '+16145943351'

const sliders = [
    {
        title: 'Hello! I\'m',
        description: name
    },
    {
        title: 'I\'m from the US',
        description: 'An SRE'
    }
]

const services = {
    "layers": ["UI/UX Design", "Mobile App Design", "Responsive Design"],
    "gears": ["Product Strategy", "Design Sprints", "UX Strategy"],
    "code": ["HTML/CSS", "Prototyping", "User Testing"]
}

const portfolio = [
    {
        link: "#",
        image: "work-1.jpg",
        header: "Illustration",
        heading: "Even the all-powerful Pointing has no control",
        description: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."
    },
    {
        link: "#",
        image: "work-2.jpg",
        header: "Application",
        heading: "Even the all-powerful Pointing has no control",
        description: "ven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."
    },
    {
        link: "#",
        image: "work-3.jpg",
        header: "Web Design",
        heading: "Even the all-powerful Pointing has no control",
        description: "ven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."
    },
    {
        link: "#",
        image: "work-4.jpg",
        header: "Application",
        heading: "Even the all-powerful Pointing has no control",
        description: "ven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."
    },
    {
        link: "#",
        image: "work-5.jpg",
        header: "Animation",
        heading: "Even the all-powerful Pointing has no control",
        description: "ven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."
    },
    {
        link: "#",
        image: "work-6.jpg",
        header: "Branding",
        heading: "Even the all-powerful Pointing has no control",
        description: "ven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."
    },
]

export default class Page extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <Header image={headerImage} title={name} />
                <Hero items={sliders} />
                <About
                    image={aboutPhoto}
                    name={name}
                    description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                          the blind texts. Separated they live in."
                    resume_url={resumeUrl}
                    twitter={socialMediaName}
                    instagram={socialMediaName}
                    linkedin={socialMediaName}
                    email={email}
                    phone={phone} />
                <Services services={services} />
                <Portfolio items={portfolio} />
                <Achievements />
                <Footer
                    twitter={socialMediaName}
                    instagram={socialMediaName}
                    linkedin={socialMediaName}
                    email={email} />

            </div>
        )
    }
}