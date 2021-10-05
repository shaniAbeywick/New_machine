import "./oee.css"
import GaugeChart from 'react-gauge-chart'
import { ResponsiveContainer } from 'recharts';
import { height, width } from "@material-ui/system";
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';
import Chart from './ochart'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { Link } from "react-router-dom";



export default function Oee() {

    const [oee, setOee] = useState();

    useEffect(() => {
        
        const client = mqtt.connect('ws://localhost:8083/mqtt')
    
        client.on("connect", () => {
            console.log("connected");
            client.subscribe('+/pa04/pa04oeex/0404');
        });
    
        client.on('message', (topic, message) => {
            
           handleJsonMessage(JSON.parse(message.toString()));
           //console.log(message);
        });
    
    
        return () => {
            if(client)
            client.end() 
        }
        },[])
    
        const handleJsonMessage = (json) => {
            setOee(json.oeeHourly)
            console.log(json);
            }

    return (
        <div className="oee_container">
            
        <div className="oee">
         <div ><span className="oee_title">OEE</span> <span className="oee_icon"><Link className="link" to={{pathname: '/pa04oeepage'}} ><PlayCircleOutlineIcon/>
            </Link> </span></div>
              
         <div className="overall_gauge_chart">
            <ResponsiveContainer>
                <GaugeChart id="gauge_chart_oee" 
                    nrOfLevels={120}
                    arcPadding={0} 
                    cornerRadius={0}
                    colors={["#FF0000", "#00FF00"]} 
                    arcWidth={0.2} 
                    percent={oee/200} 
                    textColor={["000000"]}
                    needleColor={["#757575"]}
                    needleBaseColor={["#c2ac6b"]}
                    animate={true}
                />
            </ResponsiveContainer>
         </div>
        </div>
        <div className='oeechart'>
             <Chart />
         </div>
     </div>   
    )
}
