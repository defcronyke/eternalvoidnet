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
                  <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p dangerouslySetInnerHTML={{ __html: item.text1 }} />
                  <p dangerouslySetInnerHTML={{ __html: item.text2 }} />
                  <p dangerouslySetInnerHTML={{ __html: item.text3 }} />
                  <p dangerouslySetInnerHTML={{ __html: item.text4 }} />
                  <p dangerouslySetInnerHTML={{ __html: item.link }} />
                </div>
              </a>
            ))}
          </div>
        </main>

        <footer>
          <div className="footer">
            <div id="gameServers">
              
              <iframe title="Eternal Void Unreal Tournament 2004 Server" src="https://cache.gametracker.com/components/html0/?host=ut2004.eternalvoid.net:7877&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="536"></iframe> &nbsp; 
              {/* <iframe title="The Eternal Void Network Unreal Tournament 2004 Server" src="https://cache.gametracker.com/components/html0/?host=ut2004.eternalvoid.net:7777&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="536"></iframe>  &nbsp; */}

              <iframe title="Eternal Void Unreal Tournament 3 Server" src="https://cache.gametracker.com/components/html0/?host=ut3.eternalvoid.net:7777&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="536"></iframe>  &nbsp; 
              
              <iframe title="The Eternal Void Network Ark Survival Evolved Server" src="https://cache.gametracker.com/components/html0/?host=ark.eternalvoid.net:7777&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="536"></iframe> &nbsp; 
              {/* <iframe title="The Eternal Void Network Ark Survival Evolved Server" src="https://cache.gametracker.com/components/html0/?host=ark.eternalvoid.net:7777&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="536"></iframe> */}
              
              {/* <iframe title="The Eternal Void Network Unreal Tournament 3 Server" src="https://cache.gametracker.com/components/html0/?host=ut3.eternalvoid.net:7777&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&topPlayersHeight=100&showTopPlayers=1&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="536"></iframe>  &nbsp; */}
              
              {/* <iframe title="The Eternal Void Network Minecraft Server" src="https://cache.gametracker.com/components/html0/?host=minecraft.eternalvoid.net:25565&bgColor=333333&fontColor=cccccc&titleBgColor=222222&titleColor=ff9900&borderColor=555555&linkColor=ffcc00&borderLinkColor=222222&showMap=1&currentPlayersHeight=100&showCurrPlayers=1&showTopPlayers=0&showBlogs=0&width=240" frameBorder="0" scrolling="no" width="240" height="412"></iframe> */}

              <div className="ut">
                <p>
                  <span>The Eternal Void Network CA Unreal Tournament Pre-Alpha Hub</span><br />
                  <span>ut.eternalvoid.net:7777</span>
                </p>
              </div>
            </div>

            <h4>By <a href="https://jccss.ca">Jeremy Carter</a> &lt;<a href="mailto:Jeremy Carter <jeremy@jeremycarter.ca>">jeremy@jeremycarter.ca</a>&gt; 2020, with art by <a href="https://prettyweird.ca">Fern Vale Volante of Pretty Weird</a> and <a href="https://github.com/google/deepdream">Google Deep Dream</a>.</h4>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
