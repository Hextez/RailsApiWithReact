import React from 'react';
import UserForm from '../shared/UserForm/UserForm';

import {connect} from 'react-redux';
import {addUser} from '../../redux-js/actions/index';

import {SUCCESS, ERROR_FOUND} from '../../redux-js/constants/action-types';

import { withRouter} from 'react-router-dom';

class ConnectedSignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        };
        this.submitSignUpForm = this.submitSignUpForm.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(this);
    }

    submitSignUpForm(event){
        
        event.preventDefault();
        this.props.addUser(this.state).then(res => {
            if (res != null && res != undefined && res.type === SUCCESS){
                this.props.history.push('/');
            }
        });
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        });
    }
    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        });
    }
    handlePasswordConfirmationChange(e){
        this.setState({
            password_confirmation: e.target.value
        });
    }
    render(){
        return (<div>
            
            <UserForm title="Sign up" onSubmit={this.submitSignUpForm}
                nameChange={this.handleNameChange}
                emailChange={this.handleEmailChange} 
                passwordChange={this.handlePasswordChange}
        passwordConfirmationChange={this.handlePasswordConfirmationChange} mypros={this.state} />
        </div>);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: current_user => dispatch(addUser(current_user))
    };
}

const SignUp = connect(null, mapDispatchToProps) (ConnectedSignUp);

export default withRouter(SignUp);

