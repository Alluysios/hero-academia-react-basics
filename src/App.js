import React, { Fragment } from 'react';
import HeroList from './Components/Card/HeroList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeroDetail from './Components/HeroDetail';

const App = () => {

    return (
        <Router>
            <Fragment>
                <Route exact path ='/' component={HeroList} />
                <Route exact path ='/hero/:hero' component={HeroDetail} />
            </Fragment>
        </Router>
        
    );
}

export default App;