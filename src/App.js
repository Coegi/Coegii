import React, { useEffect } from 'react';

// import memories from './images/coegi.png';
import useStyles from './style';
import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux';
// import Posts from './components/Posts/Posts';

import Navbar from './components/Navbar/Navbar';


import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards';

import Faq from './components/Faq/Faq';

import Footer from '../src/components/Footer'

import { Component } from 'react'

export class App extends Component {
    render() {
        const App = () => {
            const classes = useStyles();

            const dispatch = useDispatch();
            useEffect(() => {
                dispatch(getPosts());
            }, [dispatch]);


            return (
                <h1>asjhvb</h1>
            )
        }
        return (
            <div className="App">
                <Navbar />
                <Slider />
                <Cards />
                <Faq />
                <Footer />
            </div>
        )
    }
}



export default App;