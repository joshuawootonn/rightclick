import React from 'react';

class Profile extends React.Component {

  render() {
    console.log(this.props.data.versions)
    var version = '7.17.2';
    version = this.prop.data.verions[0];





    return (
      <div  className="tile is-child box match" >
        <figure className="image is-48x48 champion-img">
          <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/Annie.png`} /> 
        </figure>
    
 
      </div>
      
    );
  }
};
export default Profile;
