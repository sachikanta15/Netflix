
import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import ReactPlayer from 'react-player'
import {video } from "../public/video.mp4";
import favicon from "../public/favicon.ico"
import Image from 'next/image';


function videoPlayer() {
  {/*useing usenavigate hook which helps us to provide arrow through which we can go back or we can perform other functions like that  */ }

  
  return (
    
      <div className="player">
        <div className="back">
          <BsArrowLeft />
        </div>
        <Image src={favicon}/>
        <video className='h-100' autoPlay loop controls>
        <source src={video} />
      </video> 
        {/* <video url="https://www.youtube.com/watch?v=BbTyUo99Qvs&t=1968s" autoPlay loop controls></video> */}
    </div>


  )
}

export default videoPlayer