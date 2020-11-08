import React,{useState} from 'react'
import Player from './components/Player'
import Song from './components/Song'
import './styles/app.scss'
import data from './util'

function App() {
 const [songs, setSongs] = useState(data());
 const [currentSong, setCurrentSong] =useState(songs[0])

  return (
    <div className="App">
      <h1>Music Player</h1>
      <Song currentSong={currentSong} />
      <Playe current={currentSong} />
    
    </div>
  );
}

export default App;
