import React from 'react';

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
    const songChangeHandler = () => {
        setCurrentSong(song);
        //Check song isPlaying
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (isPlaying !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }
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