import React from 'react';

class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.props.onChangeRoute("Contact");
    //     },0)
    // }

    render(){
        return(<div>
            <h1>Contact</h1>
                <p>
                Contact the Ruby on Rails Tutorial about the sample app at the
                <a href="https://www.railstutorial.org/contact">contact page</a>.
                </p>
        </div>)
    }
}

export default Contact;