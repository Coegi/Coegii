import React, { useEffect } from 'react';

// import memories from './images/coegi.png';
import useStyles from './style';
import { getPosts } from './actions/posts'
import { useDispatch } from 'react-redux';
// import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Route, Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards';
import AboutUs from './components/AboutUS/Abouts';
import Faq from './components/Faq/Faq';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Abouts from './components/AboutUS/Abouts'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
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

// {/* <>
//     <Navbar />
//     <Slider />
//     <Cards />
//     {/* <Container maxWidth="lg">
//                 <Card style={{ height: '30huhj%' }}>
//                     <Grid container spacing={5}>
//                         <Grid item xs={12} sm={5} >
//                             <Paper className={classes.paper}><Form /></Paper>

//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <Paper className={classes.paper} ><Abouts /></Paper>
//                         </Grid>
//                     </Grid>
//                 </Card>
//             </Container> */}



//     <Faq />

//     <Footer />

//     {/* <Form /> */}
// </>
//     )
// } */}


export default App;