import React, { useRef, useState } from 'react'
import "./video.css"

function Video() {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handleStart() {

    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/X2Download.app-������30%20Segundos%20status������%23Shitpost%20%23Statusmemes%20%2330segundosparastatus%20%23Shitpostraiz%20%23memes(720p).mp4?alt=media&token=3aad9e8d-b49a-4ec0-bfa1-57849e1cca79
        "
      ></video>
    </div>
  )
}

export default Video