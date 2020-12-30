import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Register from '../components/Register';
import Testmonial from '../components/Testmonial';
// import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Card from '../components/Cards'
import ABoutUs from '../components/AboutUs'
import HowItsWorks from '../components/HowItsWorks';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar />


            <Register />
            <Card />
            <ABoutUs />
            <Testmonial />
            <HowItsWorks />
            <Faq />
            {/* <Footer /> */}
        </>
    );
};

export default Home

