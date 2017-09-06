import React from 'react';

class Matches extends React.Component{
  constructor(props){
    super(props)

    this.state ={matches:[]}

    
    this.initializedata = this.initializedata.bind(this);
    
  }
  componentDidMount(){
    this.initializedata();
  }
  initializedata(){    
    
      var data, teamId,championId,spell1Id,spell2Id;
      this.props.data.recent_matches.map((match)=>{
        
        if(match.gameMode == "CLASSIC"){
          match.participantIdentities.forEach(function(element,index) {
            if(element.player.accountId == this.props.data.player.accountId){
              data = match.participants[element.participantId];
            }
          }, this);
        }
        if (data != null){
          var matches = this.state.matches.slice()
          matches.push(data)
          this.setState({ matches })
        }
      });
      

      

      console.log(data,teamId,championId,spell1Id,spell2Id);
       
  }


  render() {
    return (        
        <div className="tile is-ancestor">  
          <div className="tile is-parent is-vertical is-12">
            {this.state.matches.map((match,index)=>{
              console.log(match);
              return(     
                
                <article key={index} 
                         className="tile is-child notification is-success"
                        
                         >
                  <p className="title">{this.props.data.player.name}....</p>
                  <p className="subtitle">Top tile</p>
                </article> 
              );
            })}
          </div>
        </div>       
    );
  }
};
export default Matches;


// getParticipantId(match){
//   match.participantIdentities.forEach(function(element,index) {
//     if(element.player.accountId == this.props.data.player.accountId){
     
//       return element.participantId;
//     }        
//   }, this); 

// }
// getTeamId(match){
//   var p = this.getParticipantId(match);
//   var data = match.participants.findIndex(function(element){
//     console.log(element.participantId , p);
//     return element.participantId == p;
//   })
//   console.log("team" +match.participants[data].teamId);
//   return match.participants[data].teamId;

// }
// getWin(match){
//   var teamId = this.getTeamId(match);
//   var data = match.teams.findIndex(function(element){
//     return element.teamId == teamId;
//   })
//   console.log("win" +match.teams[data].win);
//   return match.teams[data].win;

// }