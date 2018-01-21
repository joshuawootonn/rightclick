import React from 'react';

class Profile extends React.Component {

  render() {

    return (
      <div className="media tile is-child box profile">
        <figure className="image is-128x128">
          <img src={`http://ddragon.leagueoflegends.com/cdn/${this.props.data.versions[0]}/img/profileicon/${this.props.data.player.profileIconId}.png `} />
        </figure>
        <p>
          <strong>{this.props.data.player.name}</strong>
          <br />
        </p>        
      </div>

    );
  }
};
export default Profile;
