const $slider = $("#slider");
$slider
  .on("init", () => {
    mouseWheel($slider);
  })
  .slick({
    dots: false,
    vertical: false,
    infinite: true,
    fade: true,
    arrows: false,
    // onAfterChange: function () {
    //   console.log('hi')
    //   $slider.slickCurrentSlide() + 1;
    //   console.log($slider.slickCurrentSlide())
    // },
  });

function mouseWheel($slider) {
  $($slider).on("wheel", { $slider: $slider }, mouseWheelHandler);
}
function mouseWheelHandler(event) {
  const $slider = event.data.$slider;
  const delta = event.originalEvent.deltaY;
  if (delta > 0) {
    if ($slider[0].slick.currentSlide !== $slider[0].slick.slideCount - 1) {
      event.preventDefault();
      $slider.slick("slickNext");
    }
  } else {
    if ($slider[0].slick.currentSlide !== 0) {
      event.preventDefault();
      $slider.slick("slickPrev");
    }
  }
}

// $(document).ready(function () {
//   $(".track_slide").slick({
//     dots: false,
//     nav: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     infinite: false,
//     speed: 500,
//     fade: false,

//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       // {
//       //   breakpoint: 600,
//       //   settings: {
//       //     slidesToShow: 2,
//       //     slidesToScroll: 2
//       //   }
//       // },
//       // {
//       //   breakpoint: 480,
//       //   settings: {
//       //     slidesToShow: 1,
//       //     slidesToScroll: 1
//       //   }
//       // }
//     ],
//   });
// });
const $emcy = $("#emcy");
$emcy
  .on("init", () => {
    mouseWheel($emcy);
  })
  
  .slick({
    dots: false,
    vertical: false,
    infinite: true,
    fade: true,
    arrows: false,
    
    // onAfterChange: function () {
    //   console.log('hi')
    //   $slider.slickCurrentSlide() + 1;
    //   console.log($slider.slickCurrentSlide())
    // },

  }).slickAnimation();

function mouseWheel($emcy) {
  $($emcy).on("wheel", { $emcy: $emcy }, mouseWheelHandler);
}
function mouseWheelHandler(event) {
  const $emcy = event.data.$emcy;
  const delta = event.originalEvent.deltaY;
  if (delta > 0) {
    if ($emcy[0].slick.currentSlide !== $emcy[0].slick.slideCount - 1) {
      event.preventDefault();
      $emcy.slick("slickNext");
    }
  } else {
    if ($emcy[0].slick.currentSlide !== 0) {
      event.preventDefault();
      $emcy.slick("slickPrev");
    }
  }
}