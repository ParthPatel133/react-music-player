import React from 'react';
import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            {songs.map((song) =>
                <LibrarySong
                    song={song}
                    songs={songs}
                    setCurrentSong={setCurrentSong}
                    key={song.id}
                />)}

        </div>
    )
}

export default Library;