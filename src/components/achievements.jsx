import React, { Component } from 'react'
import AchievementItem from './achievementItem'

export default class Achievements extends Component {
    render() {
        return (
            <section className="ftco-section ftco-counter" id="section-counter">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <span>Portfolio</span>
                            <h2>I love to share my achievements</h2>
                        </div>
                    </div>
                    <AchievementItem name="Clients" number="420" align="start" />
                    <AchievementItem name="Projects Completed" number="890" align="center" />
                    <AchievementItem name="Cups of Coffee" number="1000" align="end" />
                </div>
            </section>
        )
    }
}