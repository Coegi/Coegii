import React, { Component } from 'react'
import Home from './Slider/Slider'
import OurService from './Cards/Cards'
import Faq from './Faq/Faq'
import { Route } from 'react-router-dom'


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/Ourservice" component={OurService} />
                <Route path="/Faq" component={Faq} />
            </section>
        )
    }
}

export default Section