var containerEl = document.querySelector(".work-filter");
var mixer;

if (containerEl) {
  mixer = mixitup(containerEl, {
    selectors: {
      control: "[data-filter]"
    },
    load: {
      filter: ".mix"
    }
  });
}
AOS.init({
  once: true
});

$(".grid").masonry({
  // options
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  gutter: 25
});

$(".work-filter").on("mixEnd", function() {
  $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: 25
  });
});

document.addEventListener("aos:in", ({ detail }) => {
  // console.log('animated in', detail);
  if (detail.id === "counter3") {
    // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!")
    const odo104 = document.querySelector("#counter104");
    const odo3 = document.querySelector("#counter3");
    const odo5 = document.querySelector("#counter5");
    const odo267 = document.querySelector("#counter267");
    const odo98 = document.querySelector("#counter98");
    const meter104 = new Odometer({
      el: odo104,
      duration: 3000
    });
    const meter3 = new Odometer({
      el: odo3,
      duration: 3000
    });
    const meter5 = new Odometer({
      el: odo5,
      duration: 3000
    });
    const meter98 = new Odometer({
      el: odo98,
      duration: 3000
    });
    const meter267 = new Odometer({
      el: odo267,
      duration: 3000
    });
    meter104.update(104);
    meter3.update(3);
    meter5.update(5);
    meter98.update(98);
    meter267.update(267);
  }

  if (detail.id === "reveal-image") {
    // console.log("'''''''''''''''''''''''''")

    document.querySelector("#reveal-image").classList.add("about-image");
    // document.querySelector('#reveal-image-wrapper').classList.add('');
  }
});
var toggle = document.querySelector("#toggle-animated-text");
toogler = 1;
$(document).ready(function() {
  toggleTextAnimate();
});

function toggleTextAnimate() {
  //  document.querySelector('#toggle-animated-text').classList.remove('animated','flipInX');
  if (toogler) {
    toggle.innerHTML = "different";
    toogler = 0;
  } else {
    toggle.innerHTML = "Something";
    toogler = 1;
  }
  document
    .querySelector("#toggle-animated-text")
    .classList.add("animated", "flipInX");

  setTimeout(toggleTextAnimate, 2000);
}

$(window).scroll(function() {
  //   var x = 100vh;
  var x = window.innerHeight * 0.85;
  $(".navbar").toggleClass("nav-header-toogle", $(this).scrollTop() > x);

  const teamimage = document.querySelector(".team-image");


  var scrollTop = $(window).scrollTop(),
    elementOffset = $(".team-image").offset().top,
    distance = elementOffset - scrollTop;

//   console.log(distance);
  var rate = distance*-0.175;

  teamimage.style.transform = 'translateY('+ rate+'px)';
});

$("#ham-btn").click(function() {
  $(".icon-open").toggleClass("icon-close");
  $(".header-toggle-close").toggleClass("header-toggle-open");
});

function filterClick(Obj){
    var filterBtn = document.getElementsByClassName('filter-button');

    for(var i=0; i<filterBtn.length; i++){
        filterBtn[i].classList.remove('navigation-selected');
    }

    Obj.classList.add('navigation-selected');
}
// const el = document.querySelector(".counter");

// new Waypoint({
//   element: el,
//   handler: function() {
//     counterUp(el);
//     this.destroy();
//   },
//   offset: "bottom-in-view"
// });

// var x = counterUp(document.querySelector(".counter"),
// {   duration: 1000,
//     delay: 16
//   });
