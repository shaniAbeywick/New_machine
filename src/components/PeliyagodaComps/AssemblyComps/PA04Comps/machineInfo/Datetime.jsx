import React from"react";


var datetime = () =>{

    var todaydate = new Date();
    //var disptodaydate = todaydate.getDate()+' '+todaydate.getMonth()+' '+todaydate.getFullYear();
    var todate = todaydate.toDateString();

    return(
        <div>
            {todate}
        </div>
    )
  }

  export default datetime;