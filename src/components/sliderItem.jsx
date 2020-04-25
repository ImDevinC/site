import React, { Component } from 'react'

export default class SliderItem extends Component {
    render() {
        return (
            <div className="slider-item js-fullheight">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row slider-text align-items-center text-center justify-content-center"
                        data-scrollax-parent="true">
                        <div className="col-md-12 ftco-animate" data-scrollax="properties: { translateY: '70%' }">
                            <p><button className="scroll">{this.props.title}</button></p>
                            <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">{this.props.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}