import React, { useState, useRef } from 'react'
import './styles/app.scss';
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import data from './data'

function App() {
  //Ref setting
  const audioRef = useRef(null);

  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  //handler
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ currentTime: current, duration });
  }

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library audioRef={audioRef} isPlaying={isPlaying} songs={songs} setCurrentSong={setCurrentSong} />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio} />
    </div>
  );
}

export default App;
