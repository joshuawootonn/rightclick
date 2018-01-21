import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Loading from './loading';
import NotFound from './notfound';

import PlayerList from './matches/playerlist';
import GameStats from './matches/gamestats';
import PlayerStats from './matches/playerstats';
import ItemStats from './matches/itemstats';
import Profile from './stats/profile';
import Ladder from './stats/ladder';

import axios from 'axios';

const API_KEY = 'RGAPI-1ace6f9a-2ab1-4b50-b558-ca468d6bfd39';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

class Wrapper extends React.Component {
  constructor(props) {
    super(props)

    console.log("in construct")
    console.log(this.props)
    this.state = {
      player: {},
      recent_matches: [],
      league: {},
      ranked: 0,
      champions: null,
      versions: null,
      items: null,
      summoners: null,
      profileIcons: null,
      currentPage: 0
    };

    this.playerSearch = this.playerSearch.bind(this);
    this.matchSearch = this.matchSearch.bind(this);
    this.championSearch = this.championSearch.bind(this);
    this.versionSearch = this.versionSearch.bind(this);
    this.itemsSearch = this.itemsSearch.bind(this);
    this.summonerSearch = this.summonerSearch.bind(this);
    this.profileSearch = this.profileSearch.bind(this);
    this.leagueSearch = this.leagueSearch.bind(this);
  }

  componentDidMount(){    
    this.playerSearch();    
  }
  playerSearch() {
    const term = this.props.match.params.name;
    
    const url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${term}?api_key=${API_KEY}`;
    const request = axios.get(proxyurl + url)
    .then((response) => {
      
      if (response.data) {
        
        this.setState({ player: response.data });
        axios.all([this.matchSearch(), 
        this.leagueSearch(),
        this.versionSearch(),
        this.championSearch(),
        this.itemsSearch(),
        this.summonerSearch(),
        this.profileSearch()])
        .then(axios.spread((acct,perms) => {
          console.log("finished")
          console.log(this.state)
          this.setState({currentPage: 1})
        },(error) => {
          console.log("errored")
          this.setState({currentPage: 2})
        }))

      }
    }, (error) => {
      console.log("errored2")
      this.setState({ currentPage: 2 })
    })
  }
  
       
  versionSearch() {
    const cachedVersions = localStorage.getItem("riot_versions");
    if (cachedVersions) {
      this.setState({ versions: JSON.parse(cachedVersions) });
      return;
    }
    const url = `https://na1.api.riotgames.com/lol/static-data/v3/versions?api_key=${API_KEY}`;
    return axios.get(proxyurl + url)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("riot_versions", JSON.stringify(response.data));
          this.setState({ versions: response.data });
        } else {
          console.log("Error retrieving versions.");
        }
      })
  }
  championSearch() {
    const cachedChampions = localStorage.getItem("riot_champions");
    if (cachedChampions) {
      this.setState({ champions: JSON.parse(cachedChampions) });
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/champions?api_key=${API_KEY}&locale=en_US&tags=keys&dataById=true`;
    return axios.get(proxyurl + url)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("riot_champions", JSON.stringify(response.data));
          this.setState({ champions: response.data });

        } else {
          console.log("Error retrieving champions.");
        }
      })
  }
  itemsSearch() {
    const cachedItems = localStorage.getItem("riot_items");
    if (cachedItems) {
      this.setState({ items: JSON.parse(cachedItems) });
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/items?api_key=${API_KEY}&locale=en_US`;
    return axios.get(proxyurl + url)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("riot_items", JSON.stringify(response.data));
          this.setState({ items: response.data });

        } else {
          console.log("Error retrieving Items.");
        }
      })
  }
  summonerSearch() {
    const cachedSummoners = localStorage.getItem("riot_summoners");
    if (cachedSummoners) {
      this.setState({ summoners: JSON.parse(cachedSummoners) });
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/summoner-spells?api_key=${API_KEY}&locale=en_US&dataById=false`;
    return axios.get(proxyurl + url)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("riot_summoners", JSON.stringify(response.data));
          this.setState({ summoners: response.data });

        } else {
          console.log("Error retrieving summoners.");
        }
      })
  }
  profileSearch() {
    const cachedProfiles = localStorage.getItem("riot_profiles");
    if (cachedProfiles) {
      this.setState({ profiles: JSON.parse(cachedProfiles) });
      return;
    }

    const url = `https://na1.api.riotgames.com/lol/static-data/v3/summoner-spells?api_key=${API_KEY}&locale=en_US&dataById=false`;
    return axios.get(proxyurl + url)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("riot_profiles", JSON.stringify(response.data));
          this.setState({ profiles: response.data });

        } else {
          console.log("Error retrieving summoners.");
        }
      })
  }

  leagueSearch() {
    const url = `https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/${this.state.player.id}?api_key=${API_KEY}`;
    
    return axios.get(url)
      .then((response) => {
        if (response.data) {
          response.data.length == 0 ? this.setState({ ranked: 0}) : this.setState({ranked: 1});          
          this.setState({ league: response.data });
          console.log(response.data)
        } else {
          console.log("Error retrieving league.");
        }
      })
  }


  matchSearch() {
    const url = `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${this.state.player.accountId}/recent?api_key=${API_KEY}`;

    return axios.get(proxyurl + url)
      .then((response) => {
        this.setState({ recent_matches: [] })
        if (response.data) {
          response.data.matches.forEach((element, i) => {

            const subUrl = `https://na1.api.riotgames.com/lol/match/v3/matches/${element.gameId}?api_key=${API_KEY}`;
            const subRequest = axios.get(proxyurl + subUrl).
              then((subResponse) => {
                if (subResponse.data) {
                  var array = this.state.recent_matches.slice();
                  array.push(subResponse.data);
                  this.setState({ recent_matches: array })
                }
              })

          }, this);
        } else {
          console.log("error");
        }
      })
  }
  render() {
    const data = {
      player: this.state.player,
      versions: this.state.versions,
      champions: this.state.champions,
      items: this.state.items,
      summoners: this.state.summoners,
      league: this.state.league,
      ranked: this.state.ranked
    }
    var m = null;
    const matches = this.state.recent_matches.map((match, i) => {
      var participantData, participantIdentityData;
      if (match.gameMode == "CLASSIC") {
        match.participantIdentities.forEach(function (element) {
          if (element.player.accountId == this.state.player.accountId) {
            participantData = match.participants[element.participantId - 1];
            participantIdentityData = element.player;
          }
        }, this);
        if(i == 0 ){
          m = match;
        }
        

       
        return (

          <article key={i} className="tile is-child box match" >
            <div className="columns">
              <GameStats match={match} data={data} />
              <PlayerStats match={match} data={data} />
              <ItemStats match={match} data={data} />
              <PlayerList match={match} data={data} />
            </div>
          </article>
        );

      } else {

        return null;

      }
      
    })
      
   
    return (
      <div>
        {(this.state.currentPage == 0) ? <Loading /> : null}
        {(this.state.currentPage == 1) ?  
        <div className="columns">
          <div className="column is-3">
            <div className="tile is-vertical">
              {this.state.versions ? < Profile data={data} /> : null}
              {this.state.league ? <Ladder data={data} /> : null}
            </div>
          </div>
          <div className="column is 9">
            <div className="tile is-vertical">
              {matches}
            </div>
          </div>
        </div>
          : null}
        {(this.state.currentPage == 2) ? <NotFound /> : null}
      </div>
      
      

    );

  }
};
export default Wrapper;
