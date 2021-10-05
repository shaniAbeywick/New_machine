import React from 'react';
import Sidebar from "../../../../components/WelisaraComps/General/GEN04/sidebar/Sidebar"
import Controller from "../../../../components/WelisaraComps/General/GEN04/controller_sidebar/Controller"
import HomePA04  from  "../../../../pages/WelisaraPage/GeneralPages/GEN04page/GenHome"
import "./gen04main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>

      <Switch>

        <div className="container">
          <Route path= '/gen04home' exact component={Sidebar} />   
          <Route path='/gen04controller' component={Controller} />
          <HomePA04/>
        </div>
    
    </Switch>
    </Router>
    
   
  );
}

