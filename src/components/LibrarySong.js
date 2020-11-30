import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong }) => {
    const songChangeHandler = () => {
        setCurrentSong(song);
    }

    return (
        <div className="library-song" onClick={songChangeHandler}>
            <img alt={song.name} src={song.cover} />
            <div className="library-song-description" >
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;