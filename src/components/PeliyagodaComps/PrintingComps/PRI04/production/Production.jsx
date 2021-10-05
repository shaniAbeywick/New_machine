import  "./production.css" 
import Hourly from "../hourly/Hourly";
import Shift from "../shift/Shift";
import Progress_bar from "../progress_bar/Progress_bar";

export default function Production() {  
    return (
        <div className="production">

            <span className="production_title"> PRODUCTION</span>
            <div className="productionWidget">
              <div className="productionCol">
                <Hourly/>
                <Shift/>
            
              </div>
              <div className="productionRow">
                 <Progress_bar/>
              </div>
               
            </div>   
        </div>
    )
}


