import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Account from './page/Account/Account';
import Post from './page/AddPost/Post';
import Dashboard from './page/Dashboard/Dashboard';

class App extends Component {
  state = {
    display: 'Dashboard',
  };

  handleSwitchDisplay = (value: string) => {
    this.setState({
      display: value,
    });
  };

  render() {
    const switchComponent = () => {
      switch (this.state.display) {
        case 'Dashboard':
          return <Dashboard />;
        case 'Account':
          return <Account />;
        case 'Post':
          return <Post />;

        default:
          return <h1>No project match</h1>;
      }
    };
    return (
      <div className="App">
        {switchComponent()}
        <Navigation handleSwitchDisplay={this.handleSwitchDisplay} />
      </div>
    );
  }
}

export default App;
