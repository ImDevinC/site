import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="colorlib-navbar-brand">
                                <a className="colorlib-logo" href="#"><span className="logo-img"
                                    style={{ backgroundImage: "url(images/" + this.props.image + ")" }}></span>{this.props.title}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}