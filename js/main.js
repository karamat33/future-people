$(document).ready(function () {
  $("a").mousedown(function () {
    $(this).css('cursor', "url('../img/cursor-link-click.png') , auto");
  });
  $("a").mouseup(function () {
    $(this).css('cursor', "url('../img/cursor-link.png') , auto");
  });

  $('.activity-slider').slick({
    variableWidth: true,
    dots: false,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    speed: 15000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    cssEase: 'linear',
    focusOnSelect: false,
  });

  $('.my-slider').slick({
    slidesToShow: 6.5,
    arrows: false,
    dots: false,
    speed: 15000,
    autoplaySpeed:0,
    autoplay: true,
    slidesToScroll: 1,
    infinite: true,
    cssEase: 'linear',
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.testimonials-slider').slick({
    slidesToShow: 1.7,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.team-slider').slick({
    slidesToShow: 1.55,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.next-btn span').click(function () {
    $('.testimonials-container .slick-next').click();
  })

  $('.visit-team a').click(function(){
  
    $('.team-container  .slick-next').click();
  })

  $(".arrow-top").click(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


})


var idleTime = 0;
$(document).ready(function () {
  // Increment the idle time counter every minute.
  var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

  // Zero the idle timer on mouse movement.
  $(this).mousemove(function (e) {
    idleTime = 0;
    const messages = document.querySelectorAll('.popup-message');
    messages.forEach(message => {
      message.remove();
    });
    $('#show-msg').val(0);
  });
  $(this).keypress(function (e) {
    idleTime = 0;
    const messages = document.querySelectorAll('.popup-message');
    messages.forEach(message => {
      message.remove();
    });
    $('#show-msg').val(0);
  });
});

function timerIncrement() {
  idleTime = idleTime + 1;
  if (idleTime >= 1) { // 20 minutes
    $('#show-msg').val(1);
    appendMessaage();
  }
}

function appendMessaage() {

  let messages = [
    "batons phrase-01.png",
    "batons phrase-02.png",
    "batons phrase-03.png",
    "batons phrase-04.png",
    "batons phrase-05.png",
    "batons phrase-06.png",
    "batons phrase-07.png",
    "batons phrase-08.png",
    "batons phrase-09.png",
    "batons phrase-10.png",
    "batons phrase-11.png",
    "batons phrase-12.png",
    "batons phrase-13.png",
    "batons phrase-14.png",
    "batons phrase-15.png",
    "batons phrase-16.png",
    "batons phrase-17.png",
    "batons phrase-18.png",
    "batons phrase-19.png",
    "batons phrase-20.png",
    "batons phrase-21.png",
    "batons phrase-22.png",
    "batons phrase-23.png",
    "batons phrase-24.png",
    "batons phrase-25.png",
    "batons phrase-26.png",
    "batons phrase-27.png",
    "batons phrase-28.png",
    "batons phrase-29.png",
    "batons phrase-30.png",
    "batons phrase-31.png",
    "batons phrase-32.png",
    "batons phrase-33.png",
    "batons phrase-34.png",
    "batons phrase-35.png",
    "batons phrase-36.png"
  ];

  if($('#show-msg').val() == 1) {
    var xy = getRandomPosition();
    console.log(xy)
    $('body').append(
      $('<div/>')
        .attr("id", "newDiv1")
        .attr("style", "top:" + xy[0] + "px;left:" + xy[1] + "px;transform: rotate(" + randomIntFromInterval(0, 50) + "deg);")
        .addClass("popup-message")
        .append(
          $("<img/>")
        .attr("src","img/Phrases/"+messages[Math.floor(Math.random() * messages.length)])
        .attr("width","370")
        )
    );
    setTimeout(() => {
      appendMessaage();
    }, 1000)
  }
}

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getRandomPosition() {
  var divsize = 400;
  var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
  var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
  return [posx, posy];
}

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100vh";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$('.blue-before').before().click(function(){
  window.location.href="https://www.coeurdeforet.com/presentationassociation";
})
