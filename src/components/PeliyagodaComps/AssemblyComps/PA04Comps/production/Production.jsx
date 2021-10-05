import  "./production.css" 
import Hourly from "../hourly/Hourly";
import Shift from "../shift/Shift";
import Progress_bar from "../progress_bar/Progress_bar";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Link } from "react-router-dom";

export default function Production() {  
    return (
        <div className="production">

            <div><span className="production_title"> PRODUCTION</span><span className="production_icon"><Link className="link" to={{pathname: '/pa04productiondocket'}} ><PlayCircleOutlineIcon/>
            </Link> </span></div>
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


