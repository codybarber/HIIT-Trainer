$(document).ready(function() {

  $('.intervalLength').submit(function(event) {
    event.preventDefault();
    var intervalTime = $('.exercise').val();
    intervalTime = Number(intervalTime);
    startClock(intervalTime);
    var cooldownTime = $('.cooldown').val();
    cooldownTime = Number(cooldownTime)
    setTimeout(function() {
      startCooldown(cooldownTime);
    }, intervalTime * 1000 + 1000);
  });


  function startClock(intervalTime) {
    var clock = $('.exerciseTimer').FlipClock(intervalTime, {
      clockFace: 'MinuteCounter',
      countdown: true
    });
  }

  function startCooldown(cooldownTime) {
    var clock = $('.cooldownTimer').FlipClock(cooldownTime, {
      clockFace: 'MinuteCounter',
      countdown: true
    });
  }

});
