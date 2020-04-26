import React, { Component } from 'react';
import './App.css';

// Begin JS pre-loads
import AOS from 'aos'
import 'aos/dist/aos.css'
// End JS pre-loads

// Being components
import ProgressBar from './components/progressBar'
import Page from './components/page'
// End components

const headerImage = 'person_1.jpg'
const name = 'Devin Collins'
const description = ''
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
    title: 'I\'m a',
    description: 'Technology Enthusiast'
  },
  {
    title: 'With a passion for',
    description: 'Site Reliability Engineering'
  },
  {
    title: 'And',
    description: 'Developing software'
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

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    AOS.init({
      duration: 800,
      easing: 'slide'
    })
  }

  render() {
    return (
      <div>
        <ProgressBar />
        <div className="page">
          <Page
            headerImage={headerImage}
            name={name}
            description={description}
            aboutPhoto={aboutPhoto}
            resumeUrl={resumeUrl}
            socialMediaName={socialMediaName}
            email={email}
            phone={phone}
            sliders={sliders}
            services={services}
            portfolio={portfolio}
          />
        </div>
      </div>
    );
  }
}

export default App;
