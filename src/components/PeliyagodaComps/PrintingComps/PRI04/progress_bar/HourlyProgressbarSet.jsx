import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import mqtt from 'mqtt'
import { useEffect, useState } from 'react';

var timetotimeprogbar1, timetotimeprogbar2, timetotimeprogbar3, timetotimeprogbar4, timetotimeprogbar5, timetotimeprogbar6, timetotimeprogbar7, timetotimeprogbar8, timetotimeprogbar7, timetotimeprogbar8, timetotimeprogbar9, timetotimeprogbar10, timetotimeprogbar11, timetotimeprogbar12

function LinearProgressWithLabel1(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textPrimary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel1.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel2(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel2.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel3(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel3.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel4(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel4.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel5(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel5.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel6(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel6.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel7(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel7.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel8(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel8.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel9(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel9.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel10(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel10.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel11(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel11.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearProgressWithLabel12(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={45}>
      <Typography variant="body2" color="textSecondary">{
          props.time
        }</Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel12.propTypes = {
  value: PropTypes.number.isRequired,
};


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


export default function LinearWithValueLabel() {

    const classes = useStyles();
    
    const [timetotimeprog1, setTimetotimeprog1] = useState();
    const [timetotimeprog2, setTimetotimeprog2] = useState();
    const [timetotimeprog3, setTimetotimeprog3] = useState();
    const [timetotimeprog4, setTimetotimeprog4] = useState();
    const [timetotimeprog5, setTimetotimeprog5] = useState();
    const [timetotimeprog6, setTimetotimeprog6] = useState();
    const [timetotimeprog7, setTimetotimeprog7] = useState();
    const [timetotimeprog8, setTimetotimeprog8] = useState();
    const [timetotimeprog9, setTimetotimeprog9] = useState();
    const [timetotimeprog10, setTimetotimeprog10] = useState();
    const [timetotimeprog11, setTimetotimeprog11] = useState();
    const [timetotimeprog12, setTimetotimeprog12] = useState();

    const [timetv1, setTimetv1] = useState();
    const [timetv2, setTimetv2] = useState();
    const [timetv3, setTimetv3] = useState();
    const [timetv4, setTimetv4] = useState();
    const [timetv5, setTimetv5] = useState();
    const [timetv6, setTimetv6] = useState();
    const [timetv7, setTimetv7] = useState();
    const [timetv8, setTimetv8] = useState();
    const [timetv9, setTimetv9] = useState();
    const [timetv10, setTimetv10] = useState();
    const [timetv11, setTimetv11] = useState();
    const [timetv12, setTimetv12] = useState();

    
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

          const today = new Date();
          const hour = today.getHours();
          const minute = today.getMinutes();

          if ((hour === 15) && (minute === 12) ) {
            setTimetotimeprog1(json.hourlyStopperStop)

            setTimetv1("7 - 8")
            setTimetv2("8 - 9")
            setTimetv3("9 - 10")
            setTimetv4("10 - 11")
            setTimetv5("11 - 12")
            setTimetv6("12 - 13")
            setTimetv7("13 - 14")
            setTimetv8("14 - 15")
            setTimetv9("15 - 16")
            setTimetv10("16 - 17")
            setTimetv11("17 - 18")
            setTimetv12("18 - 19")
            
          }

          if ((hour === 15) && (minute === 13) ) {
            setTimetotimeprog2(json.hourlyLabelStop)
          }   

          if ((hour === 15) && (minute === 14) ) {
            setTimetotimeprog3(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 31) ) {
            setTimetotimeprog4(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 32) ) {
            setTimetotimeprog5(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 33) ) {
            setTimetotimeprog6(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 34) ) {
            setTimetotimeprog7(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 35) ) {
            setTimetotimeprog8(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 36) ) {
            setTimetotimeprog9(json.hourlyLabelStop)
          }

          if ((hour === 22) && (minute === 8) ) {
            setTimetotimeprog10(json.hourlyLabelStop)
          }

          if ((hour === 22) && (minute === 9) ) {
            setTimetotimeprog11(json.hourlyLabelStop)
          }

          if ((hour === 22) && (minute === 10) ) {
            setTimetotimeprog12(json.hourlyLabelStop)
          }



          if ((hour === 19) && (minute === 7)) {
            window.location.reload(false);
          }



          if ((hour === 15) && (minute === 15) ) {
            setTimetotimeprog1(json.hourlyStopperStop)

            setTimetv1("19 - 20")
            setTimetv2("20 - 21")
            setTimetv3("21 - 22")
            setTimetv4("22 - 23")
            setTimetv5("23 - 0")
            setTimetv6("0 - 1")
            setTimetv7("1 - 2")
            setTimetv8("2 - 3")
            setTimetv9("3 - 4")
            setTimetv10("4 - 5")
            setTimetv11("5 - 6")
            setTimetv12("6 - 7")
          }   
          
          if ((hour === 15) && (minute === 16) ) {
            setTimetotimeprog2(json.hourlyLabelStop)
          }  
          
          if ((hour === 15) && (minute === 17) ) {
            setTimetotimeprog3(json.hourlyLabelStop)
          }
          
          if ((hour === 15) && (minute === 18) ) {
            setTimetotimeprog4(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 32) ) {
            setTimetotimeprog5(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 33) ) {
            setTimetotimeprog6(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 34) ) {
            setTimetotimeprog7(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 35) ) {
            setTimetotimeprog8(json.hourlyLabelStop)
          }

          if ((hour === 15) && (minute === 36) ) {
            setTimetotimeprog9(json.hourlyLabelStop)
          }

          if ((hour === 22) && (minute === 8) ) {
            setTimetotimeprog10(json.hourlyLabelStop)
          }

          if ((hour === 22) && (minute === 9) ) {
            setTimetotimeprog11(json.hourlyLabelStop)
          }

          if ((hour === 22) && (minute === 10) ) {
            setTimetotimeprog12(json.hourlyLabelStop)
          }



          console.log(json);
          }

          if( timetotimeprog1 >= 80){
            timetotimeprogbar1 = "primary";
          }else{
            timetotimeprogbar1 = "secondary";
          }

          if( timetotimeprog2 >= 80){
            timetotimeprogbar2 = "primary";
          }else{
            timetotimeprogbar2 = "secondary";
          }

          if( timetotimeprog3 >= 80){
            timetotimeprogbar3 = "primary";
          }else{
            timetotimeprogbar3 = "secondary";
          }

          if( timetotimeprog4 >= 80){
            timetotimeprogbar4 = "primary";
          }else{
            timetotimeprogbar4 = "secondary";
          }

          if( timetotimeprog5 >= 80){
            timetotimeprogbar5 = "primary";
          }else{
            timetotimeprogbar5 = "secondary";
          }

          if( timetotimeprog6 >= 80){
            timetotimeprogbar6 = "primary";
          }else{
            timetotimeprogbar6 = "secondary";
          }

          if( timetotimeprog7 >= 80){
            timetotimeprogbar7 = "primary";
          }else{
            timetotimeprogbar7 = "secondary";
          }

          if( timetotimeprog8 >= 80){
            timetotimeprogbar8 = "primary";
          }else{
            timetotimeprogbar8 = "secondary";
          }

          if( timetotimeprog9 >= 80){
            timetotimeprogbar9 = "primary";
          }else{
            timetotimeprogbar9 = "secondary";
          }

          if( timetotimeprog10 >= 80){
            timetotimeprogbar10 = "primary";
          }else{
            timetotimeprogbar10 = "secondary";
          }

          if( timetotimeprog11 >= 80){
            timetotimeprogbar11 = "primary";
          }else{
            timetotimeprogbar11 = "secondary";
          }

          if( timetotimeprog12 >= 80){
            timetotimeprogbar12 = "primary";
          }else{
            timetotimeprogbar12 = "secondary";
          }




  return (
    <div className={classes.root}>

      <LinearProgressWithLabel1 color={timetotimeprogbar1} time={timetv1} value={timetotimeprog1} />
      <LinearProgressWithLabel2 color={timetotimeprogbar2} time={timetv2} value={timetotimeprog2} />
      <LinearProgressWithLabel3 color={timetotimeprogbar3} time={timetv3} value={timetotimeprog3} />
      <LinearProgressWithLabel4 color={timetotimeprogbar4} time={timetv4} value={timetotimeprog4} />
      <LinearProgressWithLabel5 color={timetotimeprogbar5} time={timetv5} value={timetotimeprog5} />
      <LinearProgressWithLabel6 color={timetotimeprogbar6} time={timetv6} value={timetotimeprog6} />
      <LinearProgressWithLabel7 color={timetotimeprogbar7} time={timetv7} value={timetotimeprog7} />
      <LinearProgressWithLabel8 color={timetotimeprogbar8} time={timetv8} value={timetotimeprog8} />
      <LinearProgressWithLabel9 color={timetotimeprogbar9} time={timetv9} value={timetotimeprog9} />
      <LinearProgressWithLabel10 color={timetotimeprogbar10} time={timetv10} value={timetotimeprog10} />
      <LinearProgressWithLabel11 color={timetotimeprogbar11} time={timetv11} value={timetotimeprog11} />
      <LinearProgressWithLabel12 color={timetotimeprogbar12} time={timetv12} value={timetotimeprog12} />

    </div>
  );
}