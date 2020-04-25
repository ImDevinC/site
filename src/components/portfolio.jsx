import React, { Component } from 'react'
import PortfolioItem from './portfolioItem'

export default class Portfolio extends Component {
    render() {
        return (
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <span>Portfolio</span>
                            <h2>Checkout a few of my works</h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        {
                            Object.keys(this.props.items).map((k, i) => {
                                const item = this.props.items[k]
                                return <PortfolioItem
                                    key={k}
                                    link={item.link}
                                    image={item.image}
                                    header={item.header}
                                    heading={item.heading}
                                    description={item.description}
                                    alignRight={i % 2 !== 0} />
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}