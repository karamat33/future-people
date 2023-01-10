$(document).ready(function () {
  $("a").mousedown(function () {
    $(this).css('cursor', "url('../img/cursor-link-click.png') , auto");
  });
  $("a").mouseup(function () {
    $(this).css('cursor', "url('../img/cursor-link.png') , auto");
  });

  $('.my-slider').slick({
    slidesToShow: 6.5,
    slidesToScroll: 1,
    arrows: false,
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

  $('.testimonials-slider').slick({
    slidesToShow: 1.7,
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

  $(".arrow-top").click(function () {
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
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
    "jaime beaucoup ce que je fais",
    "Je suis fier de mon equipe RH et eux aussi",
    "Enfin j’ai une equipe motivee",
    "Mes salaries sont plus rassures"
  ];

  let colors = [
    "#FFC903",
    "#FF7051",
    "#839FE6",
    "#FE91E8"
  ]
  if($('#show-msg').val() == 1) {
    var xy = getRandomPosition();
    console.log(xy)
    $('body').append(
      $('<div/>')
        .attr("id", "newDiv1")
        .attr("style", "top:" + xy[0] + "px;left:" + xy[1] + "px;background-color:" + colors[Math.floor(Math.random() * colors.length)] + ";border: 3px solid #000000;border-radius: 60px;transform: rotate(" + randomIntFromInterval(0, 50) + "deg);padding:10px 16px")
        .addClass("popup-message")
        .append("<span/>")
        .text(messages[Math.floor(Math.random() * messages.length)])
    );
    setTimeout(() => {
      appendMessaage();
    }, 200)
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
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
