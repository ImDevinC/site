import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {
        return (
            <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services p-3 py-4 d-block text-center">
                    <div className="icon mb-3"><span className={"icon-" + this.props.icon}></span></div>
                    <div className="media-body">
                        {Object.keys(this.props.lines).map((k) => {
                            return <h3 key={k} className="heading">{this.props.lines[k]}</h3>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}