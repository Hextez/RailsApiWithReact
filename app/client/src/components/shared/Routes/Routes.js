import React from 'react';
import { Route, BrowserRouter as Router, Switch}from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import Home from '../../Home/Home';
import Help from '../../Help/Help';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import SignUp from '../../Signup/Signup';
import SuccessMessage from '../MessagesAction/SuccessMessage';
import ErrorMessage from '../MessagesAction/ErrorMessage';
import Login from '../../Login/Login';
import Edit from '../../Edit/Edit';

class Routes extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
        <Router>
            <div>
                <Navigation />
                <div>
                    <SuccessMessage />
                    <ErrorMessage />
                </div>
                <Switch>
                    <Route exact path="/" component={ () => <Home onChangeRoute={this.props.onChangeRoute}/>}></Route>
                    <Route path="/Help" component={ () => <Help onChangeRoute={this.props.onChangeRoute} />}></Route>
                    <Route path="/About" component={() =><About onChangeRoute={this.props.onChangeRoute} />}></Route>
                    <Route path="/Contact" component={() =><Contact onChangeRoute={this.props.onChangeRoute} />}></Route>
                    <Route path="/Signup" component={() =><SignUp/>}></Route>
                    <Route path="/Login" component={() => <Login />}></Route>
                    <Route path="/Edit" component={() => <Edit />}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </Router>)
    }
}

export default Routes;
