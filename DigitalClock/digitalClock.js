/*
const clock=document.getElementById(clock);
setInterval(function(){
    let date = new date();
   // console.log(date.toLocaleTimeString());}
   clock.innerHTML = date.toLocaleTimeString();}
,1000);
*/
/*
const clock = document.getElementById('clock'); // Use 'clock' as a string to reference the ID
setInterval(function () {
    let date = new Date(); // Capitalize 'Date'
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString(); // Update the clock element with the current time
}, 1000);
*/
document.addEventListener("DOMContentLoaded", function () {
    const clock = document.getElementById("clock");
    setInterval(function () {
        const date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);
});

