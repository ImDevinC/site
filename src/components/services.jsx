import React, { Component } from 'react'
import ServiceItem from './serviceItem'

export default class Services extends Component {
    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <span>What i do</span>
                            <h2>My services</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            Object.keys(this.props.services).map((k, i) => {
                                return <ServiceItem key={i} icon={k} lines={this.props.services[k]} />
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}