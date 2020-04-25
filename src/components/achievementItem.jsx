import React, { Component } from 'react'

export default class AchievementItem extends Component {
    render() {
        return (
            <div className={"row d-flex justify-content-" + this.props.align}>
                <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
                    <div className="block-18">
                        <div className="text">
                            <span className="ftco-label">{this.props.name}</span>
                            <strong className="number" data-number={this.props.number}>0</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}