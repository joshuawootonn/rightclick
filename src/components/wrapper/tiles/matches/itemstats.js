import React from 'react';
import moment from 'moment';

class ItemStats extends React.Component{ 
 
  render() {     
    var participantData,participantIdentityData;
    this.props.match.participantIdentities.forEach(function(element) {
      if(element.player.accountId == this.props.data.player.accountId){
        participantData = this.props.match.participants[element.participantId-1];
        participantIdentityData = element.player;              
      }           
    }, this);
    
    var items = [participantData.stats.item0,participantData.stats.item1,participantData.stats.item2,
      participantData.stats.item3,participantData.stats.item4,participantData.stats.item5]
    var items1, items2;
    items1 = items.map((item,i)=>{
        if(i<3){
          return(<td>
            <figure class="image is-128x128">        
              { (items[i]==null || items[i]==0) ? null : <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/item/${items[i]}.png `} />}               
            </figure>            
            </td>);
        }else{
          return null;
        }      
      })
    items2 = items.map((item,i)=>{
      if(i>2){
        return(<td>
          <figure class="image is-128x128">            
          { (items[i]==null || items[i]==0) ? null : <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/item/${items[i]}.png `} />}              
            </figure> 
        </td>);
      }else{
        return null;
      }      
    })
    
    return(
      <div className="column">
        <div className="columns ">
        <div className="column">
          <table>   
            <tbody>
              <tr>{items1}</tr>
              <tr>{items2}</tr>
            </tbody>
          </table> 
        </div>          
      </div>   
      </div>
    );   
  }
};
export default ItemStats;
