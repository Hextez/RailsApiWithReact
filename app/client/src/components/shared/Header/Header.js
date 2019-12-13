import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <title>{this.props.title} | Ruby on Rails Tutorial Sample App</title>
            
        )
    }
}

export default Header;


