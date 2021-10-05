import "./controller.css"
import "../sidebar/sidebar.css"
import "../machineInfo/machineInfo.css"
import profile from "../../../../../images/operator/operator.jpg";
import temp from "../../../../../images/temp.png";
import humidity from "../../../../../images/humid.png";
import Switch from '@material-ui/core/Switch';
import mqtt from 'mqtt'
import Button from '@material-ui/core/Button';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import { Link } from "react-router-dom";

export default function Controller() {

      const handlespeedup = () => {
            
        const mqttClient = mqtt.connect('ws://localhost:8083/mqtt');

        const topic = '+/pa04/machinedata';


        // mqttClient.on('message', (topic, message) => {
        //     console.log('Received response from server:-', message.toString())   

        // });

        mqttClient.on("connect", () => {
            console.log("connected");
            mqttClient.publish(topic, 'speed up');
            console.log(mqttClient.publish);
            //console.log('Server connected to Mqtt broker');
            //mqttClient.subscribe(topic);
        });

    }

    const handlespeeddown = () => {
      
      const mqttClient = mqtt.connect('ws://localhost:8083/mqtt');

      const topic = '+/pa04/machinedata';

      
      // mqttClient.on('message', (topic, message) => {
      //     console.log('Received response from server:-', message.toString())   

      // });

      mqttClient.on("connect", () => {
          console.log("connected");
          mqttClient.publish(topic, 'speed down');
          console.log(mqttClient.publish);
          //console.log('Server connected to Mqtt broker');
          //mqttClient.subscribe(queryTopic);
      });

    }
 
    return (
        <div className="sidebar">
            <div className="machine_controller">
                <div className="cotroller">
                    <div className="machineContainer">
                        <span className="machineTitle"><Link className="link" to={{ pathname: '/pri04home'} } >PRI04</Link> </span>
          
                        <span><Switch /></span>
                      <div>
                        <span className="machineOperator"><img src={profile} alt="machine operator"  className="profile" /></span> 
                        <span className="operatorName">
                          Azzam
                        </span>
                      </div>
                      
                      
                    
                     
                    </div>
                    <div className="main_div">
                      <span className="Title">Speed</span>
                      <div className="center_div">
                          <h3 id="display">0</h3>
                      </div>
                      
                      <div className="btn">
                      <span className="btnUp" onClick={handlespeedup}><Button color="primary"  >< ArrowDropDownCircleOutlinedIcon/></Button></span>
                      <span className="btnDown" onClick={handlespeeddown}><Button className="btnRotate" color="primary" >< ArrowDropDownCircleOutlinedIcon/></Button></span>
                      </div>
                      
                      
                      
                      
                    </div>
                </div>  
               
            </div>

           
        </div>    
        
            
                  
               
              
          
                
      
                
            
            
            
       
    )
}
