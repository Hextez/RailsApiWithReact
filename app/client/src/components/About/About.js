import React from 'react';

import './About.css';

class About extends React.Component {
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.props.onChangeRoute("About");
    //     },0)
        
    // }

    render(){
        return(<div><h1>About</h1>
            <p>
            The <a href="https://www.railstutorial.org/"><em>Ruby on Rails
            Tutorial</em></a>, part of the
            <a href="https://www.learnenough.com/">Learn Enough</a> family of
            tutorials, is a
            <a href="https://www.railstutorial.org/book">book</a> and
            <a href="https://screencasts.railstutorial.org/">screencast series</a>
            to teach web development with
            <a href="https://rubyonrails.org/">Ruby on Rails</a>.
            This is the sample app for the tutorial.
            </p></div>);
    }
}

export default About;