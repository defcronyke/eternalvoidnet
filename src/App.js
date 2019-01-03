import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const showcase = [
      {
        'title': 'JCCSS',
        'text1': 'Jeremy Carter\'s Computer Service and Sales',
        'text2': 'Buy a new high quality custom Linux or Windows desktop or laptop computer. Full stack development services available as well.',
        'link': 'https://jccss.ca'
      },

      {
        'title': 'Telephone Sound',
        'text1': 'Daphne and Jeremy\'s band, formed in 2013.',
        'text2': 'The debut album is available here for streaming or digital download purchase. Recorded and produced entirely using free open source software, such as Ardour, ZynAddSubFX, Hydrogen, etc.',
        'link': 'https://telephonesound.com'
      }
    ];

    return (
      <div className="App">
        <header>
          <span>
            <h3><a href="/">EternalVoid.net</a></h3>
          </span>
        </header>

        <main>
          <span>
            <h1>The Eternal Void Network</h1>
          </span>

          <div>
            {showcase.map(item => (
              <a
                key={item.title}
                href={item.link}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.link}</p>
                </div>
              </a>
            ))}
          </div>
        </main>

        <footer>
          <span>
            <h4>By <a href="https://jccss.ca">Jeremy Carter</a> &lt;<a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a>&gt; 2019, with art by <a href="https://prettyweird.ca">Daphne Volante of Pretty Weird</a> and <a href="https://github.com/google/deepdream">Google Deep Dream</a>.</h4>
          </span>
        </footer>
      </div>
    );
  }
}

export default App;
