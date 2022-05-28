import "./App.css";
import { Routes, Route } from "react-router-dom"
import {Library} from "./pages/library"
import {Home} from "./pages/home"
import {Signin} from "./pages/login"
import {VideoListing} from "./pages/videoListing"
import {SingleVideoPage} from "./pages/singleVideoPage"
import { HistoryPage } from "./pages/history";
import {CategoryClub} from "./pages/categoryClub"
import {CategoryCountry} from "./pages/categoryCountry"
import {CategoryGeneral} from "./pages/categoryGeneral"
import { PlaylistsPage } from "./pages/playlists";
import {SinglePlaylistPage} from "./pages/singlePlaylistPage"
import {Signup} from "./pages/signup"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={ <Library />} />
          <Route path="/login" element={<Signin />} />
          <Route path = "/signup" element = {<Signup /> } />
          <Route path="/videos" element={<VideoListing />} />
          <Route path="/playlists" element={<PlaylistsPage/>} />
          <Route path = {`/video/:videoId`} element = {<SingleVideoPage />} />
          <Route path = {`/playlists/:playlistId`} element = {<SinglePlaylistPage />} />
          <Route path = {"/history"} element = {<HistoryPage />} />
          <Route path = {"/club"} element = {<CategoryClub />} />
          <Route path = {"/country"} element = {<CategoryCountry />} />
          <Route path = {"/general"} element = {<CategoryGeneral />} />
        </Routes>
    </div>
  );
}

export default App;
