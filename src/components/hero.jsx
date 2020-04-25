import React, { Component } from 'react'
import SliderItem from './sliderItem'

export default class Hero extends Component {
    render() {
        return (
            <section className="home-slider owl-carousel js-fullheight">
                {
                    Object.keys(this.props.items).map((k) => {
                        const item = this.props.items[k]
                        return <SliderItem key={k} title={item.title} description={item.description} />
                    })
                }
            </section>
        )
    }
}