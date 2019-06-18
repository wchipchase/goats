import React from 'react';

import myGoats from './goats';

import GoatCorral from '../components/GoatCorral/GoatCorral';

import './App.scss';


class App extends React.Component {
// Data stuff goes here (axios calls to get data) Anything that modifies state.
// Anything defined here requires this. syntax
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats: myGoats });
  }

  render() {
    const { goats } = this.state;
    // This is where you would iterate over an array. No need for this. syntax . {} is javascript
    // no {} = string
    return (
      // This is where JSX is written (domstring stuff)
      <div className='App'>
        <div>Goat Yoga</div>
        <GoatCorral goats={goats}/>
      </div>

    );
  }
}

export default App;
