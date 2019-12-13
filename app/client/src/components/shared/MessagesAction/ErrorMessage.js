import React from 'react';
import store from '../../../redux-js/store';

class ErrorMessage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errors: ''
        }
        store.subscribe(()=>{
            this.setState({
                errors: store.getState().errors
            })
        })
    }
    render(){
        if(this.state.errors !== '') {
            return(<div>
                <ul>
                    {Object.keys(this.state.errors).map((key,i) => {
                        console.log(this.state.errors[key][0]);
                        return (<li key={key+i}>{key + " " +this.state.errors[key][0]}</li>)
                    })}
                </ul>
            </div>);
        }else {
            return(<></>)
        }
    }
}

export default ErrorMessage;


