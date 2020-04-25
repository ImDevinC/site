import React, { Component } from 'react'
import SliderItem from './sliderItem'

export default class Hero extends Component {
    render() {
        return (
            <section className="home-slider owl-carousel js-fullheight">
                <SliderItem title="Hello! I'm" description="Devin Collins" />
                <SliderItem title="I'm from the US" description="An SRE" />
            </section>
        )
    }
}