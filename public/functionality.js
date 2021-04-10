// Set the date we're counting down to
var countDownDate = new Date("June 19, 2021 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // let dasharray = days * 2.3;
  // let dasharray2 = days * 3;
  // let dasharray3 = days * 4;
  // Display the result in the element with id="countdown"
  document.getElementById("countdown").textContent = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // document.querySelector("#circle")
  //   .style.setProperty("stroke-dasharray", dasharray);
  //   document.querySelector("#circle2")
  //   .style.setProperty("stroke-dasharray", dasharray2);
  //   document.querySelector("#circle3")
  //   .style.setProperty("stroke-dasharray", dasharray3);

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").textContent = "We said \"I do\"";
  }
}, 1000);

alert(distance);

//detecting safari browser to reload 
/*let userAgentString = navigator.userAgent;
let safariAgent = userAgentString.indexOf("Safari") > -1;
wh = window.innerWidth;

if (safariAgent)
{ 
  document.querySelector(".pollaroid").scrollTo(500, 0);
}; */

