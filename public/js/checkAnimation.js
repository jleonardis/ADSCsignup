
var signup = document.getElementById('signup-form');
var checkmark = document.getElementById('checkmark');
var thankYou = document.getElementById('thank-you');
const dur = 600;

var thankYouTimeline = anime.timeline({
  autoplay: false,
  loop: false,
  update: function(anim){
    if(anim.currentTime >= dur && anim.currentTime){
      signup.style.display = 'none';
      //thankYou.style.display = 'none';
      checkmark.style.display = 'block';
    }
    //else if(anim.currentTime > dur * 3){
      //signup.style.display = 'none';
      //checkmark.style.display = 'none';
      //thankYou.style.display = 'block';
      //thankYou.style.opacity = 1;
    //}
  },
  complete: function() {
    anime({
      targets: '#thank-you',
      opacity: [1, 0],
      easing: 'linear',
      duration: dur/2,
      complete: function(){
        //thankYou.style.display = 'none';
        checkmark.style.display = 'none';
        signup.style.display = 'block';
        var animated = anime({
          targets: '#signup-form',
          autoplay: false,
          translateY: '-=1000',
          duration: dur,
          easing: 'linear',
          direction: 'reverse',
          update: function(anim){
            if(anim.currentTime > 1){
              signup.style.opacity = 1;
            }
          }
        });
        animated.play();
      }
    });
  }
  //   .add({
  //     targets: '#thank-you',
  //     opacity: [1, 0],
  //     delay: dur
  //   })
  //   .add({
  //     targets: '#signup-form',
  //     translateY: { value: 100, duration: 1000, direction: 'reverse'}
  //   });
  // }
});

thankYouTimeline
  .add({
    targets: '#signup-form',
    opacity: [
      { value: [1,0], duration: dur, easing: 'easeOutQuad'}
    ]
  })
  // .add({
  //   targets: '#thank-you',
  //   delay: 1000,
  //   scale: [
  //     { value: ['0','1'],  duration: 0, easing: 'linear'}
  //   ]
  // })
  .add({
    targets: '#checkmark',
    scale: [
      { value: [0, 1], duration: dur, easing: 'easeOutQuad'}
    ]
  })
  .add({
    targets: '.check',
    strokeDashoffset: {
      value: [anime.setDashoffset, 0],
      duration: dur,
      easing: 'easeOutQuart'
    }
  }, '-=' + dur/2)
  ;

  var runThankYouAnimation = function(){ thankYouTimeline.play(); }

  // var formTimeline = anime.timeline({
  //   autoplay: false,
  //   loop: false
  // })
  // .add({
  //   targets: '#thank-you',
  //   scale: [
  //     { value: ['1', '0'], duration: 50, easing: 'linear'}
  //   ]
  // })
  // .add({
  //   targets: '#signup-form',
  //   opacity: [
  //     { value: [0, 1], duration: dur, easing: 'easeInQuad'}
  //   ]
  // });
