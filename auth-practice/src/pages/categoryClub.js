import { Header } from "../components/Header"
import axios from "axios"
import { useState, useEffect } from "react"
import "./videoListing.css"
import {Sidebar} from "../components/Sidebar"
import {useNavigate, Link} from "react-router-dom"
import { useAuth } from "../contexts/auth-context"

const CategoryClub = () => {
    const [videos , setVideos ] = useState([])
    const {auth : {token}} = useAuth()
 
    const navigate = useNavigate()
  
    useEffect(() => {
      axios.get("/api/videos").then((res) => {
        const allVideos = res.data.videos
        setVideos(allVideos)
      })
    },[])

    const addToHistoryService = async (video) => {
      try {
        await axios.post(
          "/api/user/history" ,
            {video}  , { headers : {authorization : token}})
      } catch(e){
        console.log(e)
      }
    }

      const getSingleVideo = async (video, token) => {
        await addToHistoryService(video , token)
        navigate(`/video/${video._id}`)
    }

    return(<div>
        <Header />
        <div className = "main-wrapper">
        <Sidebar />
<div>
<div className = "chip-container">
     <button ><Link to = "/videos" className="chip"> Explore</Link></button>
     <button ><Link to = "/club" className="chip active-link">Club</Link></button>
     <button ><Link to = "/country" className="chip">Country</Link></button>
     <button ><Link to = "/general" className="chip">General</Link></button>
   </div>

    <hr/>
    
<main className = "home-main">
{videos.map(video => video.category === "club" && (<div key = {video._id} className = "video-card" onClick = {() => getSingleVideo(video)} >
            <img src= {video.imgsrc} className = "video" alt=""/>
            <h4 className = "margin">{video.title}</h4>
            <div className = "flex">
              <img className = "avatar" src={video.imgsrc} alt=""/>
              <p className = "font-small margin" >{video.creator}</p>
            </div>
        </div>))}
</main>
</div>
</div>
    </div>)
}

export {CategoryClub}