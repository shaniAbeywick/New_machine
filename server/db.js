const express = require('express');
const mongo = require('mongodb').MongoClient;
const http = require("http").Server(express);

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: [],
    credentials: true
  }
});

const ObjectID = require('ObjectID');

const url = 'mongodb://localhost:27017/';

var milim
var shift
var cshift

setInterval(() => {
const today = new Date();
const hour = today.getHours();
const minute = today.getMinutes();
const secs = today.getSeconds();

mongo.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("test");

    if ((hour === 8)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a10')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {

        if (err) throw err;2

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        console.log(shift);
        db.close();

      });
    }

    if ((hour === 9)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a11')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();

      });
    }

     if ((hour === 10)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a12')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 11)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a13')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 12)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a14')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 13)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a15')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 14)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a16')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 15)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a17')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 16)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a18')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 17)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a19')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 18)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a1a')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 19)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a1b')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 20)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a1c')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 21)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a1d')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 22)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a1e')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 23)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a1f')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour ===0)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a20')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 1)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a21')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 2)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a22')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 3)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a23')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 4)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a24')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        console.log(shift);
        db.close();
      });
    }

    if ((hour === 5)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a25')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 6)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a26')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

    if ((hour === 7)) {

      dbo.collection("newtest").findOne({"_id": ObjectID('61432d216bafc7e164475a27')},{projection: {_id: 0, Shift:1, Prod_Plan_Qtny:1, Cumm_Plan_Qtny:1 }}, function(err, result) {
        
        if (err) throw err;

        shift = result.Shift;
        milim = result.Prod_Plan_Qtny;
        cshift = result.Cumm_Plan_Qtny;
        console.log(milim);
        db.close();
      });
    }

});

io.sockets.emit('json', {
  
  datacshift: cshift,
  datashift: shift,
  datav: milim,
  datac: secs,
  datam: minute

});

}, 1000);

http.listen(5001, function() {
  console.log("listening on *:5001");
});