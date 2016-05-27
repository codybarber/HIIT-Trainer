$(document).ready(function() {


    $('.intervalLength').submit(function(event) {
      event.preventDefault();
      var amount = $('.amount').val();
      amount = Number(amount);
      cycle(amount);
    });

  function cycle(amount) {
    if (amount <= 0) return;
    var intervalTime = $('.exercise').val();
    intervalTime = Number(intervalTime);
    startClock(intervalTime);
    var cooldownTime = $('.cooldown').val();
    cooldownTime = Number(cooldownTime)
    setTimeout(function() {
      startCooldown(cooldownTime);
      setTimeout(function() {
        cycle(amount - 1);
      }, cooldownTime * 1000 + 500)
    }, intervalTime * 1000 + 500);
  }

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
