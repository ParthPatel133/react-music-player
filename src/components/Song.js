

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.name} ></img>
            <h2>{currentSong.artist}</h2>
            <h3>{currentSong.name}</h3>
        </div>
    )
}

export default Song;
