import React , { Component } from 'react';
import Header from './Header';

const Joke = ({ joke: {setup, punchline} }) => (
     <p style= {{margin:20}}> {setup} <em> {punchline} </em></p>
)

class Jokes extends Component {
    state = { joke : {}, jokes : [] };

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke : json}))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes : json}))
        .catch(error => alert(error.message));
    }

    render () {
        const { setup, punchline } = this.state.joke;

        return (
            <div> 
                <h2>Highlighted Joke</h2>    
                <Joke joke= {this.state.joke} />
                <hr/>
                <h3> Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {this.state.jokes.map( joke =>  <Joke key={joke.id} joke={joke}/> )}
            </div>
        )
    }
}

/* look for other apis from this link;
 https://github.com/toddmotto/public-apis   */

export default Jokes;