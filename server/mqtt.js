var express = require("express");
var app = express();
const mqtt = require("mqtt");
const mqttclient = mqtt.connect('ws://localhost:8083/mqtt');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectId;
const cors = require('cors');
var assert = require('assert');

const topic = '+/pa04/pa04stoppagesx/0404';

const url = 'mongodb://localhost:27017/';

var prodq, cummq, tfrom, tto, hrefill, hplug, hcap, hprodx, cuout, ctot

var server = require('http').Server(app);
var PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.static(__dirname + "/public"));

mqttclient.on("connect",function(){

    console.log('Client connected');

    setInterval(function(){

        const today = new Date();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const secs = today.getSeconds();
        // console.log(secs);


        mqttclient.subscribe(topic, function () {
          mqttclient.on('message', function (topic, message, packet) {
            // console.log(message.toString());
            
            if (topic == 'data/pa04/pa04stoppagesx/0404'){
                pa04 = message;
            }

            if (pa04){
              
              var jsonPa04 = JSON.parse(pa04.toString());
              //console.log(jsonPa04);
              
                hcap = jsonPa04.hourlyCapStop;
                hplug = jsonPa04.hourlyStopperStop;
                hrefill = jsonPa04.hourlyRefilStop;
                hprodx = jsonPa04.hourlyProductionX;
                hcummx = hprodx;        
              // console.log(hcap);
            }
    
            });
        });

        mongo.connect(url, function(err, db) {
    
            if (err) throw err;
            const dbo = db.db("test");
          
              if ((hour === 8 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });
                
              }

              if ((hour === 9 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 10 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 11 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 12)) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 13 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 14 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 15 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 16 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 17 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 18 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 19 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 20 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 21 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 22 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 23 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 0 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 1 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 2 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 3 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 4 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 5 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 6 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }

              if ((hour === 7 )) {
          
                dbo.collection("productions").findOne({"_id": ObjectID('614c22088e41b5e6f78a9fc8')},{projection: {_id: 0, time_from:1, time_to:1, prod_plan_qtny:1, cumm_plan_qtny:1 }}, function(err, result) {
          
                  if (err) throw err;
          
                  tfrom = result.time_from;
                  tto = result.time_to;
                  prodq = result.prod_plan_qtny;
                  cummq = result.cumm_plan_qtny;
                  // console.log(tfrom);
                  db.close();
          
                });

                mongo.connect(url, function(err, db) {
    
                  if (err) throw err;
        
                  const dbx = db.db("test");
                
                      dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {
        
                          if (err) throw err;
                  
                          cuout = data.Cummilative_Output;
        
                          console.log(cuout);
                          db.close();
                        },);
                    
                });
              }
              
          });


      if ((hour === 18) ) {

        mongo.connect(url, function(err, db) {
    
          if (err) throw err;

          const dbx = db.db("test");
        
              dbx.collection("newprods").findOne({}, { sort: { _id: -1 } , limit: 1, projection: {_id: 0, Cummilative_Output: 1 } }, (err, data) => {

                  if (err) throw err;
          
                  cuout = data.Cummilative_Output;

                  ctot = Math.abs(cuout) + Math.abs(hprodx)

                  // console.log(cuout);
                  // console.log(hprodx);
                  // console.log(ctot);
                  db.close();
                },);
          
        });
      }

        if ((hour === 18) && (minute === 16) && (secs === 10)) {

            const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': hprodx,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 18) && (minute === 17) && (secs === 10)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 10) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 11) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 12) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 13) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 14) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 15) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 16) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 17) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 18) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 19) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': hprodx,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 20) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 21) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 22) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 23) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 0) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 1) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 2) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 3) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 4) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 5) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 6) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }

        if ((hour === 7) && (minute === 59) && (secs === 59)) {

          const jsonObj = {

            'Time_from': tfrom,
            'Time_to': tto,
            'Production_Plan_Quantity': prodq,
            'Cummilative_Plan_Quantity': cummq,
            'Final_Output': hprodx,
            'Cummilative_Output': ctot,
            'Tube_Rejection': hcap,
            'Tip_Rejection': hplug,
            'Ink_Rejection': hrefill

        };

        console.log(JSON.stringify(jsonObj));

          mongo.connect(url, function(err, db) {

            var dbo = db.db("test");
            assert.equal(null, err);
            dbo.collection('newprods').insertOne(jsonObj, function(err, result) {
              assert.equal(null, err);
              console.log('Item inserted');
              db.close();
            });

          });

        }


    },1000);

  });


server.listen(PORT, function() {
    console.log("Listening ON: " + PORT);
    });