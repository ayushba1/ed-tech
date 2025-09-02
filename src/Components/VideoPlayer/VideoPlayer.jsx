import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/6145693-uhd_3840_2160_24fps.mp4'
const VideoPlayer = ({playState,setplayState}) => {

    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setplayState(false);
        }
    }
  return (
    <div className={`video-player ${playState ?'':'hide'}`} ref={player}
    onClick={closePlayer}>
      <video src={video} autoPlay={playState} muted controls></video>
    </div>
  )
}

export default VideoPlayer
