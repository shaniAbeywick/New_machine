import "./machineInfo.css"
import status from "../../../../../images/green_button.png";
import profile from "../../../../../images/operator/operator.jpg";
import { Link } from "react-router-dom";




export default function MachineInfo() {
  var  showdate = new Date ();
  var displaytodaysdate =showdate.getDate()+' '+(showdate.getMonth()+1)+' '+showdate.getFullYear();
  var date=showdate.toDateString();
    return (
        <div className="machine">
        <div className="machineItem">
        <div className="machineContainer">
          <span className="machineTitle"><Link className="link" to={{ pathname: '/pri04controller'} } >
            PRI04</Link> 
            </span>
          
          <span><img src={status} alt="machine status" className="status" /></span>
          <div>
            <span className="machineOperator"><img src={profile} alt="machine operator"  className="profile" /></span> 
            <span className="operatorName">
               Azzam

            </span>
          </div>
          
        </div>  
          <span className="date">{date}</span>
        </div>
        </div>
    )
}


