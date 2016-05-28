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
      }, cooldownTime * 1000 + 1000)
    }, intervalTime * 1000 + 1000);
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

  function onYouTubeIframeAPIReady() {
    var videos = [
      'UUimaa__UgY',
      'iPBxVY65XmE',
      'vftbRCwFriI'
    ];
    var idx  = 0;

    var player  = new YT.Player('player', {
      height: '390',
      width: '640',
      events: {
        'onReady': function() {
          nextVideo();
        }
      }
    });

    function nextVideo() {
      var id = videos[idx];
      if (!id) return;
      player.loadVideoById(id);
      idx++;
      setTimeout(nextVideo, 10000);
    }
  }

});
