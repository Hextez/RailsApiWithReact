import React from 'react';

import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../../redux-js/actions/index';

import {SUCCESS, ERROR_FOUND} from '../../redux-js/constants/action-types';
import store from '../../redux-js/store/index';


class LoginComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.clickGoToSignUp = this.clickGoToSignUp.bind(this);
       
    }

    componentWillMount(){
        this.checkAuth()
    }

    checkAuth(){
        var info = store.getState();
        
        if(info.current_user_id != '' && info.auth_token != ''){
            this.props.history.push("/");
        }
    }

    clickGoToSignUp(){
        this.props.history.push('/Signup');
        
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.loginUser(this.state).then(res => {
            debugger;
            if (res != null && res != undefined && res.type === SUCCESS){
                this.props.history.push('/');
            }
        })
    }

    handleChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }


    handleChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }

    render(){
       
        return (store.getState().current_user_id == '' && store.getState().auth_token == '') ? (<div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" onChange={this.handleChangeEmail} />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChangePassword} />
                    </div>
                    <button type="submit">Login</button>
                 </form>
                <div>
                    <a href="" onClick={this.clickGoToSignUp}>Sign up</a>
                </div>
            </div>):null;
    }

}


function mapDispatchToProps(dispatch) {
    return {
        loginUser: current_user => dispatch(loginUser(current_user))
    };
}

const Login = connect(null, mapDispatchToProps) (LoginComponent);

export default withRouter(Login);