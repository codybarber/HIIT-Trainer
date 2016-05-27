$(document).ready(function() {

  $('.intervalLength').submit(function(event) {
    event.preventDefault();
    var intervalTime = $('.input').val();
    intervalTime = Number(intervalTime);
    console.log("line 5" + intervalTime)
    startClock(intervalTime);
  })



  function startClock(intervalTime) {
    console.log(intervalTime)
    var clock = $('.timer').FlipClock(intervalTime, {
      clockFace: 'MinuteCounter',
      countdown: true
    });
  }
  // setTimeout(function() {
  //   setInterval(function() {
  //     clock.increment();
  //   }, 1000);
  // });


});
