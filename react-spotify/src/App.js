import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home"
import Artist from "./components/Artist"
import Album from "./components/Album"
import Sidebar from "./components/Sidebar"
import BottomPlayer from "./components/BottomPlayer"

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (

    <div>
      <Router>
      <Sidebar></Sidebar>



      <BottomPlayer></BottomPlayer>
      </Router>
    </div>

  );
}

export default App;
