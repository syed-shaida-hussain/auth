import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {AuthProvider} from "./contexts/auth-context"
import {LikedVideosProvider} from "./contexts/liked-context"
import { BrowserRouter as Router } from "react-router-dom";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <LikedVideosProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
    </LikedVideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
