import React from 'react';

const LibrarySong = ({ songs, song, id, setCurrentSong, audioRef, isPlaying, setSongs }) => {
    const songChangeHandler = () => {
        setCurrentSong(song);
        //add active state
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        })

        setSongs(newSongs);

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
        <div className={`library-song ${song.active ? 'selected' : ""}`}
            onClick={songChangeHandler}>
            <img alt={song.name} src={song.cover} />
            <div className="library-song-description" >
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;