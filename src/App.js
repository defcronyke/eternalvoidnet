import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span>
            <a href="/">EternalVoid.net</a>
          </span>
        </header>

        <main>
          <span>Welcome.</span>
        </main>

        <footer>
          <span>
            By <a href="https://jccss.ca">Jeremy Carter</a> &lt;<a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a>&gt; 2019, with art by <a href="https://prettyweird.ca">Daphne Volante of Pretty Weird</a> and <a href="https://github.com/google/deepdream">Google Deep Dream</a>.
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
