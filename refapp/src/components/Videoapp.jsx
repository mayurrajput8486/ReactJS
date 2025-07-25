import { useRef } from 'react'
import myvideo from '../assets/video.mp4'
const Videoapp = () => {
    const videoRef = useRef()

    const playVideo = () =>{
        videoRef.current.play()
    }

    const pauseVideo = () =>{
        videoRef.current.pause()
    }
  return (
    <div>
        <h2>Play and Pause Video</h2>
        <button onClick={playVideo}>PLAY</button>
        <button onClick={pauseVideo}>PAUSE</button>
        <br/><br/>
        <video src={myvideo} width={500} ref={videoRef}></video>
    </div>
  )
}

export default Videoapp