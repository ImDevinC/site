import React, { Component } from 'react'

export default class PortfolioItem extends Component {
    render() {
        return (
            <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                <a href={this.props.link} className={"image d-flex justify-content-center align-items-center" + (this.props.alignRight ? " order-2" : "")}
                    style={{ backgroundImage: "url('images/" + this.props.image + "')" }} data-scrollax=" properties: { translateY: '-30%'}">
                    <div className="icon d-flex text-center justify-content-center align-items-center">
                        <span className="icon-search"></span>
                    </div>
                </a>
                <div className="text">
                    <h4 className="subheading">{this.props.header}</h4>
                    <h2 className="heading"><a href={this.props.link}>{this.props.heading}</a></h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}