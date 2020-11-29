import { useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    //Ref setting
    const audioRef = useRef(null);

    //state
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
    });

    //Event Handelers
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ currentTime: current, duration });
    }

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

    return (
        <div className='player'>
            <div className='time-control'>
                <p>{getTime(songInfo.currentTime)}</p>
                <input type='range' />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon className='skip-back' size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className='play' size="2x" icon={faPlay} />
                <FontAwesomeIcon className='skip-forward' size="2x" icon={faAngleRight} />
            </div>
            <audio
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio} />
        </div>
    )
}

export default Player;