import React from 'react';
import PA04 from "./Main/Peliyagodamain/Assembly/PA04Main/pa04main"
import PRI04 from "./Main/Peliyagodamain/Printing/PRI04Main/pri04main"
import GEN04 from "./Main/Welisaramain/General/GEN04Main/gen04main"
import IMN04 from "./Main/Welisaramain/IMN/IMN04Main/imn04main"
import Navbar from "./components/Navbar";
import Fact1 from "./FactoryMaps/factory1"
import Fact2 from "./FactoryMaps/factory2"
import Fact3 from "./FactoryMaps/factory3"
import Fact4 from "./FactoryMaps/factory4"
import 'bootstrap/dist/css/bootstrap.min.css'
//import Topbar from "./components/topbar/Topbar"
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



export default function App() {
  return (
    <Router>
       <Navbar/>
       

      <Switch>

        <Route path='/' exact component={Fact1} />
        <Route path='/factory2' component={Fact2} />
        <Route path='/factory3' component={Fact3} />
        <Route path='/factory4' component={Fact4} />
        

        <div>
          <Route path= '/pa04home' exact component={PA04} />
        
          <Route path= '/pri04home' component={PRI04} />
        
          <Route path= '/gen04home' component={GEN04} />
       
          <Route path= '/inm04home' component={IMN04} />

          

        </div>
    
    </Switch>
    </Router>
    
   
  );
}

