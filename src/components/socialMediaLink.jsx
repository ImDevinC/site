import React, { Component } from 'react'

export default class SocialMediaLink extends Component {
    constructor(props) {
        super(props);
        this.socialMediaMap = {
            'twitter': 'https://www.twitter.com/',
            'linkedin': 'https://www.linkedin.com/in/',
            'instagram': 'https://www.instagram.com/'
        }
    }

    render() {
        return (
            <a href={this.socialMediaMap[this.props.site] + this.props.username} alt={this.props.site} target="_blank" rel="noopener noreferrer"><span className={"icon-" + this.props.site}></span></a>
        )
    }
}