import React, {useState,useEffect} from 'react';
import  "./shift.css" 
import LinearProgressWithLabel from "./ShiftProgressbar"
import socketIOClient from "socket.io-client";
import mqtt from 'mqtt'
// import ProgressBar from "./Progressbar2";

const ENDPOINT = "http://127.0.0.1:5001";

var valuebar

export default function Shift() {

    const [ value, setValue ] = useState();
    const [response, setResponse] = useState();
    const [responsec, setResponsec] = useState();
    const [responsem, setResponsem] = useState();

    useEffect(() => {

        const client = mqtt.connect('ws://localhost:8083/mqtt')
    
        client.on("connect", () => {
            console.log("connected");
            client.subscribe('+/pa04/pa04stoppagesx/0404');
        });
    
        client.on('message', (topic, message) => {
            
           handleJsonMessage(JSON.parse(message.toString()));
           //console.log(message);
        });

        const socket = socketIOClient(ENDPOINT);
        socket.on("json", data => {
            setResponse(data.datacshift)
            setResponsec(data.datac)
            setResponsem(data.datam)
          console.log(data.datav);
          console.log(data.datac);
          console.log(data.datam);
        });

        return () => {
            if(client)
            client.end() 
        }

    },[]);

    const handleJsonMessage = (json) => {
        setValue(json.hourlyStopperStop)

        console.log(json);
        }

        // if( value >= 80){
        //     valuebar = '#5EC248';
        // }else{
        //     valuebar = 'red';
        // }

    return (
        <div className="shift">
             <h2 className="Shift_title">Shift</h2>
             {/* <ProgressBar color={valuebar} value={value} max={100}/> */}
             <LinearProgressWithLabel/>
             <div className="shift_values">
                <div className="target_box">
                    
                       <h3  className="count">{Math.round(response/3600)*((60*responsem) + responsec)}</h3>
                    
                    <div className="value">
                       <h5 className="topic">Target</h5>
                    </div>
                </div>
               
                <div className="actual_box">
                    
                        <h3  className="count">{value}</h3>
                   
                    <div className="value">
                        <h5 className="topic"> Actual</h5>
                    </div>
                    
                  

                
                   
                 
                </div>
               </div>
             
             

        </div>
    )
}
