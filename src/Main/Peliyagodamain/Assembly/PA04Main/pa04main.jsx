import React from 'react';
import Sidebar from "../../../../components/PeliyagodaComps/AssemblyComps/PA04Comps/sidebar/Sidebar"
import Controller from "../../../../components/PeliyagodaComps/AssemblyComps/PA04Comps/controller_sidebar/Controller"
import HomePA04  from  "../../../../pages/PeliyagodaPages/AssemblyPages/PA04page/AssembHome"
import OeePA04 from '../../../../pages/OeePages/pa04_OEE'
import DocketPA04 from '../../../../components/PeliyagodaComps/AssemblyComps/PA04Comps/production/tablecomps'
import "./pa04main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>

      <Switch>

      <Route path='/pa04productiondocket' component={DocketPA04} />
      <Route path='/pa04oeepage' component={OeePA04} />

        <div className="container">
          <Route path= '/pa04home' exact component={Sidebar} />   
          <Route path='/pa04controller' component={Controller} />
          <HomePA04/>
        </div>

      </Switch>

    </Router>
    
   
  );
}

