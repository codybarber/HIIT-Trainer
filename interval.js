$(document).ready(function() {

  $('.intervalLength').submit(function(event) {
    event.preventDefault();
    var intervalTime = $('.exercise').val();
    intervalTime = Number(intervalTime);
    var cooldownTime = $('.cooldown').val();
    cooldownTime = Number(cooldownTime)
    startClock(intervalTime);


  })

  var time = clock.getTime()



  function startClock(intervalTime) {
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
