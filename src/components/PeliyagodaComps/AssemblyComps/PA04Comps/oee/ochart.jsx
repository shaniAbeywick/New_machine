import "./ochart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { Component } from 'react';
import mqtt from 'mqtt'

var data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12;
var pa04;

var data = [];

export default class Production extends Component {

  constructor(props) {
      super(props)
      this.state = {}
  }
  
  componentDidMount(){

      this.client = mqtt.connect('ws://localhost:8083/mqtt')

      this.client.on("connect", () => {
          console.log("connected");
          this.client.subscribe('+/pa04/pa04oeex/0404');
      });

      this.client.on('message', (topic, message) => {
         this.handleJsonMessage(JSON.parse(message.toString()));
         if (topic == 'data/pa04/pa04oeex/0404'){
          pa04 = message;
      }

      const today = new Date();
      const hour = today.getHours();
      const minute = today.getMinutes();

      console.log(minute);

      if (pa04){
        
        // console.log(message.toString());
        var jsonPa04 = JSON.parse(pa04.toString());
        
          if ((hour === 13) && (minute === 37) ) {
            data1 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 38) ) {
            data2 = jsonPa04.oeeHourly;
          }

          if ((hour === 13) && (minute === 39) ) {
            data3 = jsonPa04.oeeHourly;
          }

          if ((hour === 13) && (minute === 40) )
            data4 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 41) ){
            data5 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 42) ){
            data6 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 43) ){
            data7 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 44) ){
            data8 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 45) ){
            data9 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 46) ){
            data10 = jsonPa04.oeeHourly;
          }
          
          if ((hour === 13) && (minute === 47) ){
            data11 = jsonPa04.oeeHourly;
          }

          if ((hour === 13) && (minute === 48) ){
            data12 = jsonPa04.oeeHourly;
          }
        
          
  
           data = [
            {
              name:'1',
              value: data1,
            
            },
            {
              name:'2',
              value: data2,
            },
            {
              name:'3',
              value: data3,
            
            },
            {
              name:'4',
              value: data4,
            
            },
            {
              name:'5',
              value: data5,
            
            },
            {
              name:'6',
              value: data6,
            
            },
            {
              name:'7',
              value: data7,
            
            },
            {
              name:'8',
              value: data8,
            
            },
            {
              name:'9',
              value: data9,
            
            },
            {
              name:'10',
              value: data10,
            
            },
            {
              name:'11',
              value: data11,
            
            },
            {
              name:'12',
              value: data12,
            
            },
            
            ];
  
        
        })
    }


  handleJsonMessage = (json) => {
      this.setState({...json})
  }

  componentWillUnmount(){
      if(this.client)
      this.client.end()  
  }

  render(){
      return(

        <div className="pchart">
             <ResponsiveContainer width="100%" aspect={3 / 1.2}>
             <LineChart data={data}>
               <CartesianGrid strokeDasharray="3 3" />0
               <XAxis dataKey='name' />
              <YAxis />
               <Tooltip />
               <Line type="monotone" dataKey='value' stroke="#003366" strokeWidth={2} activeDot={{ r: 8 }} />
            </LineChart>
           </ResponsiveContainer>
           </div>
      
      )}

}
