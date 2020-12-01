import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            {songs.map((song) =>
                <LibrarySong
                    song={song}
                    songs={songs}
                    setCurrentSong={setCurrentSong}
                    key={song.id}
                    id={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    setSongs={setSongs}
                />)}

        </div>
    )
}

export default Library;