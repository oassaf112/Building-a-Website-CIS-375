"use strict";

setInterval("showClock()", 1000);
showClock ();

function showClock() {

   console.log ("function called.");

   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString ();
   var localTime = thisDay.toLocaleTimeString ();

      document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span>" + "<span>" + localTime + "</span>";

      tDate.setHours(21);

      let days = (tDate - thisDay)/(1000*60*60*24);
      let hours = (days - Math.floor(days))*24;
      let mins = (hours - Math.floor(hours))*60;
      let secs = (mins - Math.floor(mins))*60;


      console.log(j4Date);
      console.log(days);
      console.log(hours);
      console.log(mins);
      console.log(secs);

   //Days, Hours, Minutes, and Seconds//
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

window.addEventListener ("load", function () {

   document.getElementById("subButton").addEventListener("click", runSubmit);

});

