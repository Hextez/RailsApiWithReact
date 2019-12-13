import React from 'react';

import './App.css';
import Routes from './shared/Routes/Routes';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Home'
    }
    this.changeTitle = this.changeTitle.bind(this);
    
  }

  changeTitle(title){
    this.setState({title: title});
  }


  render(){
    return (
      <div className="App">
        <Header title={this.state.title}/>
        
        <Routes onChangeRoute={this.changeTitle}/>
        <Footer />
      </div>
    );
  }
}

export default App;
