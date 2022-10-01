import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Web from './Web';
import Landing from './Landing';
import Template from './Template';
import Home from './Home';
import Game from './Game';
import About from './services/About/About';
import Privacy from './services/privacy/Privacy';
import StoryReel from './StoryReel'; 
import { useSelector} from 'react-redux';
import {selectUserName } from './features/userSlice'; 
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Android from './Android';
function App() {
  const username = useSelector(selectUserName);
  const [isLogin,setIslogin] = useState(localStorage.name);
  return (
    <div className="App">
     {
        isLogin ? (<>
          <Navbar setIslogin={setIslogin}/>
          <Switch>
            <Route exact path="/home"> 
          <StoryReel/><Home/><Template/>
          </Route>
          <Route path="/game">
           <Game/>
          </Route>
          <Route path="/web">
             <Web/>
          </Route>
          <Route path="/and">
             <Android/>
          </Route>
          <Route exact path="/Privacy">
             <Privacy/>
          </Route>
          <Route exact path="/About">
             <About/>
          </Route>
          </Switch>
          <Footer/>
          </>):
       (<div className="back"><Landing setIslogin={setIslogin}/></div>)
     }
    </div>
  );
}

export default App;
