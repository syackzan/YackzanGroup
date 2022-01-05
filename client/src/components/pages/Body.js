import React from 'react';

import AboutUs from './AboutUs';
import Develop from './Develop';
import Property from './Property';
import Contact from './Contact';

import { Route } from 'react-router-dom'

const Body = () => {

    return (
        <>
            <Route exact path='/aboutus'>
                <AboutUs />
            </Route>
            <Route exact path='/developments'>
                <Develop />
            </Route>
            <Route exact path='/properties'>
                <Property />
            </Route> 
            <Route exact path='/contact'>
                <Contact />
            </Route>
        </>
    )
}

export default Body;