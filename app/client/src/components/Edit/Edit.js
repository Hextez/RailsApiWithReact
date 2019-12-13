import React from 'react';
import UserForm  from '../shared/UserForm/UserForm'

import {connect} from 'react-redux';
import {updateUser, getUserInfo} from '../../redux-js/actions/index';

import {SUCCESS, ERROR_FOUND} from '../../redux-js/constants/action-types';

import { withRouter} from 'react-router-dom';
import store from '../../redux-js/store';
import ErrorMessage from '../shared/MessagesAction/ErrorMessage';

class EditComponent extends React.Component {
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
        store.subscribe(()=>{

            this.setState({
                name: (store.getState().user_information) ? store.getState().user_information.name : '',
                email: (store.getState().user_information) ? store.getState().user_information.email: ''
                
            })
        })
    }

    componentWillMount(){
        this.props.getUserInfo(localStorage.getItem('user_id')).then(
            res => {
                if (res != null && res != undefined && res.type === ERROR_FOUND){
                    this.props.history.push('/');
                }
            }
        )

    }

    submitSignUpForm(event){
        
        event.preventDefault();
        this.props.updateUser(store.getState().current_user_id,this.state).then(res => {
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
            
            <UserForm title="Edit" onSubmit={this.submitSignUpForm}
                nameChange={this.handleNameChange}
                emailChange={this.handleEmailChange} 
                passwordChange={this.handlePasswordChange}
        passwordConfirmationChange={this.handlePasswordConfirmationChange} mypros={this.state} />
        </div>);
    }
}


function mapDispatchToProps(dispatch) {
    return {
        updateUser: (id, info) => dispatch(updateUser(id,info)),
        getUserInfo: (user_id) => dispatch(getUserInfo(user_id))
    };
}

const Edit = connect(null, mapDispatchToProps) (EditComponent);

export default withRouter(Edit);

