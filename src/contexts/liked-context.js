import { useState, createContext, useContext, useReducer } from "react";
 const LikedContext = createContext();

 const likeReducer = (state , action ) => {
     switch (action.type) {
        case "SET_LIKED_VIDEOS" :
            return {...state , likedVideos : [state.likedVideos , action.payload] }
        case  "GET_LIKED_VIDEOS" :
            return {...state ,  likedVideos : (state.likedVideos , action.payload)}
        case "DELETE_LIKED_VIDEOS" :
            return {...state , likedVideos : (state.likedVideos.filter(video => video._id !== action.payload._id))}


        case "SET_WATCHLATER_VIDEOS" :
            return {...state , watchLater : [state.watchLater , action.payload] }
        case  "GET_WATCHLATER_VIDEOS" :
            return {...state , watchLater : (state.watchLater , action.payload)}
        case  "DELETE_WATCHLATER_VIDEOS" :
            return {...state , watchLater : (state.watchLater.filter(video => video._id !== action.payload._id))}


        case "SET_HISTORY_VIDEOS" :
            return {...state , historyVideos : [state.historyVideos , action.payload] }
        case  "GET_HISTORY_VIDEOS" :
            return {...state , historyVideos : (state.historyVideos , action.payload)}
        case  "DELETE_HISTORY_VIDEO" :
            return {...state , historyVideos : (state.historyVideos.filter(video => video._id !== action.payload._id))}
        case  "DELETE_ALL_HISTORY_VIDEOS" :
            return {...state , historyVideos : []}


        case "SET_PLAYLISTS" :
            return {...state , playlists : [state.playlists , action.payload]}
        case "GET_PLAYLISTS" :
            return {...state , playlists : (state.playlists , action.payload)}
        case "DELETE_PLAYLISTS" :
            return {...state , playlists : (state.playlists.filter(playlist => playlist._id !== action.payload._id))}


        case "SET_PLAYLIST_VIDEOS" :
            return {...state , playlistVideos : [state.playlistVideos , action.payload]}
        case "GET_PLAYLIST_VIDEOS" :
            return {...state , playlistVideos : (state.playlistVideos , action.payload)}
        case "DELETE_PLAYLIST_VIDEOS" :
            return {...state , playlistVideos : (state.playlistVideos.filter(playlist => playlist._id !== action.payload._id))}


        default :
            return {...state }
     }
 }


 const LikedVideosProvider = ({children}) => {
    const [videoState  , dispatchVideo] = useReducer(likeReducer ,  {likedVideos : [] , watchLater : [] , historyVideos : [] , playlists : [] , playlistVideos : [] })

    return <LikedContext.Provider value = {{   videoState , dispatchVideo }}>
        {children}
    </LikedContext.Provider>
 }

 const useLikedVideos = () => useContext(LikedContext)

 export {useLikedVideos , LikedVideosProvider}