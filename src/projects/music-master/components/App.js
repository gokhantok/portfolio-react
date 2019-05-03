import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
  state = { artist : null, tracks : [] };

  componentDidMount(){
    this.searchArtist('Ezhel'); // this is my favorite artist :)
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        console.log ('json',json)

        if(json.artists.total > 0){
          const artist = json.artists.items[0];
          console.log('artist',artist);
          this.setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks : json.tracks }))
            .catch(error => alert(error.message));
        }
      })
      .catch(error=> alert(error.message));
  }
  render() {
    console.log('this.state', this.state.artist ) 
    return (
      <div>
        <hr/>
        <p>Ezhel is my favorite artist in Turkey, I especially like the song called "Geceler". </p>
        <p>Do you have any?</p>
        <br/>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
