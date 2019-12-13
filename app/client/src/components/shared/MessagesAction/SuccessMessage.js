import React from 'react';
import store from '../../../redux-js/store';

class SuccessMessage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errors: '',
            success: ''
        }
        store.subscribe(()=>{
            this.setState({
                success: store.getState().success
            })
        })
    }
    render(){
        if(this.state.success !== '') {
            return(<div>
                <p>{this.state.success}</p>
            </div>);
        }else {
            return(<></>)
        }
    }
}

export default SuccessMessage;


