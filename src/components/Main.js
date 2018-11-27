import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './Landingpage';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/Aboutme" component={AboutMe} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Project" component={Project} />
        <Route path="/Resume" component={Resume} />
    </Switch>
)

export default Main