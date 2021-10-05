import "./quality.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

export default function Breakdown() {

        const [breakdown, setBreakdown] = useState();

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


            return () => {
                if(client)
                client.end() 
            }
            },[])

            const handleJsonMessage = (json) => {
                setBreakdown(json.hourlyStopperStop)
                console.log(json);
                }

    return (
        <div className="tile">
            <span className="breakdown_value">{breakdown}</span>
            <span className="breakdown">min</span>
            <span className="playCircleOutIcon_3" > <PlayCircleOutlineIcon/></span>
        </div>
    )
}
