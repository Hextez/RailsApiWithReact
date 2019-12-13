import React from 'react';

import { Link }from 'react-router-dom';
import store from '../../../redux-js/store/index';
import {logoutUser} from '../../../redux-js/actions/index'

import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';

class NavigationComponent extends React.Component{
    constructor(props){
        super(props);
        this.logoutUser = this.logoutUser.bind(this);

        if(store.getState().current_user_id == ''){
            this.state = {
                html: <li><Link to="/Login">Login</Link></li>

            }
        }else{
            this.state = {
                html: <li><a href="" onClick={this.logoutUser}>Logout</a></li>
            }
        }

        store.subscribe(()=>{
            var info = store.getState();
            if(info.current_user_id != '' & info.auth_token != ''){
                this.setState({
                    html: (<><li><a href="" onClick={this.logoutUser}>Logout</a></li><li><Link to="/Edit">Edit</Link></li></>)
                })
            }else{
                this.setState({
                    html: <li><Link to="/Login">Login</Link></li>
                })
            }
        })
       
    }

    logoutUser(){
        this.props.logoutUser().then(res => this.props.history.push("/"))
        
    }



   

    render(){
        return(<div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Help">Help</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                {this.state.html}
                
            </ul>
        </div>)
    }
}



function mapDispatchToProps(dispatch) {
    return {
        logoutUser: () => dispatch(logoutUser())
    };
}

const Navigation = connect(null, mapDispatchToProps) (NavigationComponent);

export default withRouter(Navigation);