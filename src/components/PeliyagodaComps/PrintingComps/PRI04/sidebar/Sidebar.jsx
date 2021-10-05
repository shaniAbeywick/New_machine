import "./sidebar.css"
import { useEffect, useState } from 'react';
import  MachineInfo from "../machineInfo/MachineInfo";
import temp from "../../../../../images/temp.png";
import humidity from "../../../../../images/humid.png";
import socketIOClient from "socket.io-client";
import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import axios from "axios"

const ENDPOINT = "http://127.0.0.1:5001";

export default function Sidebar() {
  const [latitude,setLatitude]=useState(0);
  const[longitude,setLongitude]=useState(0);
  const[temperature,setTemperature]=useState(0);
  const[humid,setHumidity]=useState(0);

  const savePositionToState= (position)=>{
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  }
  const fetchWeather = async ()=>{
    try{
       window.navigator.geolocation.getCurrentPosition(savePositionToState);
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c6120f2227f59fede6d9cdfe5114e0fc&units=metric`);
      console.log(res.data);
      setTemperature(res.data.main.temp);
      setHumidity(res.data.main.humidity);
    }catch(err){
      console.error(err);
    }

  }
  useEffect(()=>{
    fetchWeather();
  }, [latitude,longitude]); 

  const [response, setResponse] = useState();
  const [shiftx, setShiftx] = useState();

  useEffect(() => {
        
        const socket = socketIOClient(ENDPOINT, {secure: true}, {
          withCredentials: true,
          extraHeaders: {
          }
        });
        socket.on("json", data => {
            setResponse(data.datav)
            setShiftx(data.datashift)
          console.log(data.datav);
        });

    return () => {

    }
    },[])

    return (
        <div className="sidebar">
          < MachineInfo/>
          <div >
            
          <div >

            <TableContainer >
              <Table sx={{ minWidth: 20}} aria-label="simple table">

                <TableHead>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left" >Shift</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">{shiftx}</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Product</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Atlas Chooty</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Shift Target</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">{response}Nos</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Hourly Target</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">{response}Nos</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Status</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Running</TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Machine Speed</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left"></TableCell>
                  </TableRow>

                  <TableRow className="sidebarListItem">
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left">Power Consumption</TableCell>
                    <TableCell sx={{padding: 0}, {fontWeight: 'medium'}, { fontSize: 16 }} align="center">:</TableCell>
                    <TableCell sx={{padding: 1}, {fontWeight: 'medium'}, { fontSize: 16 }} align="left"></TableCell>
                  </TableRow>

                </TableHead>

              </Table>
            </TableContainer>

              {/* <h3 className="sidebarTitle"></h3> */}

              {/* <Table className="sidebarList">
              
            
              <tr className="sidebarListItem">
                
                    <td>Shift</td>
                    <td> :</td>
                    <td>Day</td>  
                
              </tr> 
                
              <tr className="sidebarListItem">
                    <td>Product</td> 
                    <td>:</td>
                    <td>Atlas Chooty T</td>
              </tr>  
                
              <tr className="sidebarListItem"> 
                    <td>Shift Target</td>
                    <td>:</td>
                    <td>{response}Nos</td>
              </tr>
                  
              <tr className="sidebarListItem">
                    <td>Hourly Target</td>
                    <td>:</td>
                    <td>{response}Nos</td>
              </tr>

              </Table>

              </div>
              <div className="sidebarMenu"> */}
              {/* <h3 className="sidebarTitle"></h3> */}

              {/* <Table className="sidebarList">
              <tr className="sidebarListItem">
                    <td>Status</td>
                    <td>:</td>
                    <td>Running</td>
              </tr>
              <tr className="sidebarListItem">
                    <td>Machine Speed</td>
                    <td>:</td>
                    <td></td>
              </tr>
              <tr className="sidebarListItem">
                    <td>Power Consumption</td>
                    <td>:</td>
                    <td></td>
              </tr>
              </Table> */}
              
              </div>
          </div>
            <div className="alert">
              <span><img src={temp} alt="temperature" className="temp" /></span>
              <span className="tempRate"> <h4>{temperature}</h4></span>

              <span><img src={humidity} alt="humidity" className="humid" /></span> 
              <span className="humidRate"> <h4>{humid}%</h4></span> 
            </div>
            
            
        </div>
    )
}
