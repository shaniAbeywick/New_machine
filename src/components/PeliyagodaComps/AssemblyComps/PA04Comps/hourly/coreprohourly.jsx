import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react';
import { useEffect, useState } from 'react';
import mqtt from 'mqtt'
import { Table, TableCell, TableContainer, TableBody, TableRow } from '@mui/material';
import  "./hourly.css" 

var hourprogbar 

export default function Coreprohourly() {

    // const classes = useStyles();
    const [hourprog, setHourprog] = useState();
    const [ value, setValue ] = useState();
      
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
            setHourprog(json.hourlyStopperStop)
            console.log(json);
            }

            if( hourprog >= 80){
                hourprogbar = "success";
            }else{
                hourprogbar = "danger";
            }
            
    return (
        <div>
            {/* <span className="ms-auto font-semibold">{hourprog}%</span> */}

            {/* <CProgress height={8} className="mb-3">

            <CProgressBar color={hourprogbar} value={hourprog}/>
                
            </CProgress> */}
            
            <TableContainer sx={{ padding: 0}}>
              <Table sx={{ minWidth: 20}} aria-label="simple table">

                <TableBody>

                  <TableRow>
                    <TableCell sx={{padding: 0, width: 600, marginTop: 10, alignItems: 'center'}} >
                    <div className='stlyex'>
                    <CProgress height={8} className="mb-3">

                    <CProgressBar color={hourprogbar} value={hourprog}/>
                        
                    </CProgress>
                    </div>
                    </TableCell>
                    <TableCell sx={{ padding: 0, fontSize: 16 }} align="right">{hourprog}%</TableCell>
                  </TableRow>

                </TableBody>

              </Table>
            </TableContainer>
            
        </div>
    )
}
