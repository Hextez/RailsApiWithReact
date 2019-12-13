import React from 'react';
import './Help.css'

class Help extends React.Component {
    constructor(props){
        super(props);

    }


    // componentDidMount(){
    //     setTimeout(() => {
    //         this.props.onChangeRoute("Help");
    //     },0)
    // }
    render(){
        return(
            <div>
                <h1>Help</h1>
                <p>
                Get help on the Ruby on Rails Tutorial at the
                <a href="https://www.railstutorial.org/help">Rails Tutorial Help page</a>.
                To get help on this sample app, see the
                <a href="https://www.railstutorial.org/book"><em>Ruby on Rails Tutorial</em>
                book</a>.
                </p>
            </div>
        )
    }
}

export default Help;