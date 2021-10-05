import "./quality.css"
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

export default function MinorStoppages() {

    const [stoppage, setStoppage] = useState();

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
                setStoppage(json.hourlyStopperStop)
                console.log(json);
                }

    return (
        <div className="tile">
            <span className="minorStoppages_value">{stoppage}</span>
            <span className="minorStoppages">min</span>
            
        </div>
    )
}
