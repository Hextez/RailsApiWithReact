import React from 'react';
import store from '../../../redux-js/store';

class MessageAction extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            success: ''
        }
        store.subscribe(()=>{
            this.setState({
                errors: store.getState().errors,
                success: store.getState().success
            })
        })
    }
    render(){
        return(<div>
            <div>
                
            </div>
        </div>);
    }
}

export default MessageAction;


