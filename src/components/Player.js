import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({
    audioRef,
    songInfo,
    setCurrentSong,
    setSongInfo,
    currentSong,
    isPlaying,
    setIsPlaying,
    songs,
    setSongs }) => {

    useEffect(() => {

        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
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
    }, [currentSong])

    //Event Handelers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTime = (time) => {
        //formating time
        let minutes = Math.floor(time / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        let seconds = Math.floor(time % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                if (isPlaying) audioRef.current.play();
                return
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
        if (isPlaying) audioRef.current.play();
    }

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} onChange={dragHandler}
                    value={songInfo.currentTime} type='range' />
                <p>{songInfo.duration ? getTime(songInfo.duration) : "00:00"}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon
                    className='skip-back'
                    onClick={() => skipTrackHandler('skip-back')}
                    size="2x"
                    icon={faAngleLeft} />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className='play'
                    size="2x"
                    icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon
                    className='skip-forward'
                    onClick={() => skipTrackHandler('skip-forward')}
                    size="2x"
                    icon={faAngleRight} />
            </div>

        </div>
    )
}

export default Player;