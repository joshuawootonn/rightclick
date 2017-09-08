import React from 'react';
import moment from 'moment';

class ItemStats extends React.Component{ 
 
  render() {     
    var participantData,participantIdentityData;
    this.props.match.participantIdentities.forEach(function(element) {
      if(element.player.accountId == this.props.player.accountId){
        participantData = this.props.match.participants[element.participantId-1];
        participantIdentityData = element.player;              
      }           
    }, this);
    
    
    
              
    return(
      <div className="column">
        <figure class="image is-24x24">
          <img src="http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Lux.png" alt="item-1"/>
        </figure>
        <figure class="image is-24x24">
          <img src="" alt="item-2"/>
        </figure>
        <figure class="image is-24x24">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="item-3"/>
        </figure>
        <figure class="image is-24x24">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="item-4"/>
        </figure>
        <figure class="image is-24x24">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="item-5"/>
        </figure>
        <figure class="image is-24x24">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="item-6"/>
        </figure>
        <figure class="image is-24x24">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="totem"/>
        </figure>
      </div>
    );   
  }
};
export default ItemStats;
