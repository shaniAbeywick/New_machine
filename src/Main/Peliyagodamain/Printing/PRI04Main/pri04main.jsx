import React from 'react';
import Sidebarx from "../../../../components/PeliyagodaComps/PrintingComps/PRI04/sidebar/Sidebar"
import Controllerx from "../../../../components/PeliyagodaComps/PrintingComps/PRI04/controller_sidebar/Controller"
import HomePRI04  from  "../../../../pages/PeliyagodaPages/PrintingPages/PRI04page/PrinHome"
import "./pri04main.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <Router>

      <Switch>

        <div className="container">
          <Route path= '/pri04home' exact component={Sidebarx} />   
          <Route path='/pri04controller' component={Controllerx} />
          <HomePRI04/>
        </div>
    
    </Switch>
    </Router>
    
   
  );
}

