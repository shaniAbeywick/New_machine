import React from 'react';
import Sidebar from "../../../../components/WelisaraComps/IMN/IMN04/sidebar/Sidebar"
import Controller from "../../../../components/WelisaraComps/IMN/IMN04/controller_sidebar/Controller"
import HomePA04  from  "../../../../pages/WelisaraPage/IMNPages/IMN04page/IMNHome"
import "./imn04main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>

      <Switch>

        <div className="container">
          <Route path= '/imn04home' exact component={Sidebar} />   
          <Route path='/imn04controller' component={Controller} />
          <HomePA04/>
        </div>
    
    </Switch>
    </Router>
    
   
  );
}

