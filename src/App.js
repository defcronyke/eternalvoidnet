import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    const mainContainerFillClass = (window.innerHeight > window.innerWidth / 1.7)
      ? 'fillheight'
      : 'fillwidth';

    this.state = {
      showcase: [],
      mainContainerFillClass
    };

    window.addEventListener('resize', e => {
      const mainContainerFillClass = (e.target.innerHeight > e.target.innerWidth / 1.7)
        ? 'fillheight'
        : 'fillwidth';

      this.setState(() => ({
        mainContainerFillClass
      }));
    });
  }

  async componentDidMount() {
    const showcase = await fetch('showcase.json').then(res => res.json());

    this.setState(() => ({
      showcase
    }));
  }

  render() {
    const { showcase, mainContainerFillClass } = this.state;

    return (
      <div className={`App ${mainContainerFillClass}`}>
        <header>
          <div className="header">
            <h3><a href="/">EternalVoid.net</a></h3>
          </div>
        </header>

        <main>
          <div className="title">
            <h1>The Eternal Void Network</h1>
          </div>

          <div className="showcaseItems">
            {showcase.map(item => (
              <a
                key={item.title}
                href={item.link}
                className="showcaseItem"
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
          <div className="footer">
            <h4>By <a href="https://jccss.ca">Jeremy Carter</a> &lt;<a href="mailto:Jeremy@JeremyCarter.ca">Jeremy@JeremyCarter.ca</a>&gt; 2019, with art by <a href="https://prettyweird.ca">Daphne Volante of Pretty Weird</a> and <a href="https://github.com/google/deepdream">Google Deep Dream</a>.</h4>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
