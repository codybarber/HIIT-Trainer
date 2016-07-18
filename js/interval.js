var amount = 0;
$(document).ready(function() {
var player;
  $('.intervals').submit(function(event) {
    event.preventDefault();
    var amount = $('.amount').val();
    amount = Number(amount);
    cycle(amount);
  });


  function workoutCountdown(element, minutes, seconds) {
    document.getElementById('player').volume = 1.0;
    var time = minutes*60 + seconds;
    var interval = setInterval(function() {
      var el = document.getElementById(element);
      if(time === 0) {
        $('#exerciseTimer').addClass('animated infinite flash');
        el.innerHTML = "Time for a break!";
        clearInterval(interval);
        return;
      }
      var minutes = Math.floor(Number( time / 60 ));
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds;
      var text = minutes + ':' + seconds;
      el.innerHTML = text;
      time--;
    }, 1000);
  }

  function cooldownCountdown(element, minutes, seconds) {
    document.getElementById('player').volume = 0.2;
    var time = minutes*60 + seconds;
    var interval = setInterval(function() {
      var el = document.getElementById(element);
      if(time === 0) {
        $('#cooldownTimer').addClass('animated infinite flash');
        el.innerHTML = "Let's Go!";
        clearInterval(interval);
        return;
      }
      var minutes = Math.floor(Number( time / 60 ));
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds;
      var text = minutes + ':' + seconds;
      el.innerHTML = text;
      time--;
    }, 1000);
  }

  function cycle(amount) {
    if (amount <= 0) return;
    var intervalTime = $('.exercise').val();
    intervalTime = Number(intervalTime);
    workoutCountdown('exerciseTimer', 0, intervalTime);
    var cooldownTime = $('.cooldown').val();
    cooldownTime = Number(cooldownTime);
    setTimeout(function() {
      // turn down volume
      player.setVolume(20);
      cooldownCountdown('cooldownTimer', 0, cooldownTime);
      setTimeout(function() {
        // turn up volume
        player.setVolume(100);
        cycle(amount - 1);
      }, cooldownTime * 1000 + 1000);
    }, intervalTime * 1000 + 1000);
  }

  // YouTube Code
  var trapRapPlaylist = 'PLcK0neBMyFxSpYgDfKCsHRwgxlN-Tnt9D';
  var trapPlaylist = 'PLC2tuhuSqVt2uAiAZLBE0pD2tQiabZ-5j';
  var housePlaylist = 'PL7Vr8XNhXsJAKgFY8jlTUAgiMDByR3oaw';
  var dubstepPlaylist = 'PLA48B3068BF5AF344';
  var futureBassPlaylist = 'PLe8jmEHFkvsbRwwi0ode5c9iMQ2dyJU3N';



  window.onYouTubeIframeAPIReady = function() {
    $('.intervals').submit(function() {
      event.preventDefault();
      if ($('.genre').val() === 'trap') {
        playlist = trapPlaylist;
      } else if ($('.genre').val() === 'trapRap') {
        playlist = trapRapPlaylist;
      } else if ($('.genre').val() === 'house') {
        playlist = housePlaylist;
      } else if ($('.genre').val() === 'dubstep') {
        playlist = dubstepPlaylist;
      } else if ($('.genre').val() === 'futureBass') {
        playlist = futureBassPlaylist;
      }
      player  = new YT.Player('player', {
        height: '50',
        width: '50',
        playerVars:
        {
          'listType': 'playlist',
          'list': playlist
        },
        events:
        {
          'onReady': onPlayerReady
        }
      });
    });

    function onPlayerReady(event) {
      event.target.playVideo();
    }
  };
});
