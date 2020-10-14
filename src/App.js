import React from 'react'
import Characters from './components/Characters'
import './App.css';

const baseURL = "https://www.potterapi.com/v1/"
const APIkey = "$2a$10$sRrWQqZm24LXeb4jnql/kecAlHx.2vImHFSJ7uY46AEhiUKjHWYO2"
class App extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    // fetch(`${baseURL}${APIkey}/name`) 
    fetch(`${baseURL}characters?key=${APIkey}`)
      .then(response => response.json())
      .then(characters => this.setState({characters}))
  }

  displayCharacters = () => this.state.characters.map(character => <Characters key={character._id} character={character}/>)

  // stylefunction = () => {
  //   return("--i:1")
  // }

  render() {
    return(
      <div className="App">
        <div class="box">
          <span style={{"--i":"1"}}><img src="https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg" alt="Harmoine"/></span>
          <span style={{"--i":"2"}}><img src="https://allears.net/wp-content/uploads/2020/08/Harry-Potter-Characters-Harry-Potter-625x625.jpg" alt="Harmoine"/></span>
          <span style={{"--i":"3"}}><img src="https://i.pinimg.com/originals/d5/1e/9b/d51e9b2f3260b4fd2bd73bb4e1b0e21f.jpg" alt="Harmoine"/></span>
        </div>
    </div>
    )
  }
}

export default App;
