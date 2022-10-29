import React, { useEffect, useState } from 'react'
import videos from "../../data/dataVids"
function VideoComp() {
const [vid, setVid] = useState([])
useEffect(() => {
  setVid(videos)
},[])

  return (
  <div>

<div>
  {vid.map((v) =>(
      <video key={v.video} className='video-controls-plan' controls poster={v.img}>
        <source src={v.video} type="video/mp4"/>
      </video>
  ))}
</div>

    </div>
  )
}

export default VideoComp