import React from 'react';
import './Home.css'
import { Link, BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import SignUp from '../Signup/Signup';
import { getUserInfo} from '../../redux-js/actions/index';
import {connect} from 'react-redux';


import  store  from '../../redux-js/store/index';

class HomeComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            current_user: store.getState().current_user_id,
            user_information: store.getState().user_information
        }

        this.redirect_to_signup = this.redirect_to_signup.bind(this);


        store.subscribe(()=>{

            this.setState({
                current_user: store.getState().current_user_id,
                user_information: store.getState().user_information
            })
        })
    }

    componentDidMount(){
        if(this.state.current_user != ''){
            this.props.getUserInfo(this.state.current_user)
        }
    }


    redirect_to_signup(){
    }

    

    render(){
        if(this.state.current_user == '' || this.state.user_information == undefined){
            return(
                <div>
                    <h1>Sample App</h1>
                    <p>
                    This is the home page for the
                        <a href="https://www.railstutorial.org/">Ruby on Rails Tutorial</a>
                        sample application.
                    </p>
                    <a href="" onClick={this.redirect_to_signup}>Sign up</a>
                </div>
            )
        }else {
            return(
                <div>
                    <p>Name</p>
                    <p>{this.state.user_information.name}</p>

                    <p>Email</p>
                    <p>{this.state.user_information.email}</p>
                </div>
            )
        }
    }
}


function mapDispatchToProps(dispatch) {
    return {
        getUserInfo: current_user => dispatch(getUserInfo(current_user))
    };
}

const Home = connect(null, mapDispatchToProps) (HomeComponent);

export default withRouter(Home);