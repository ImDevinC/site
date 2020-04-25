import React, { Component } from 'react'

export default class SkillBox extends Component {
    render() {
        return (
            <div className="col-md-4 text-center animate-box">
                <div className={"services color-" + this.props.color}>
                    <span className="icon">
                        <i className={"icon-" + this.props.icon} />
                    </span>
                    <div className="desc">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.details}</p>
                    </div>
                </div>
            </div >
        );
    }
}