// (function() {
//   function SmoothScroll(element, opts) {
//     this.$el = $(element);
//     this.opts = opts;
//     this.init()
//   }

//   SmoothScroll.setting = {
//     step: 1000,
//     speed: 450,
//   };

//   SmoothScroll.prototype = {
//     constructor: SmoothScroll,

//     init() {
//       $.extend(this, SmoothScroll.setting, this.opts);
//       this._wheelHandler = $.proxy(this._wheelHandler, this)
//       this.$el.on("wheel", this._wheelHandler);
//     },

//     _wheelHandler($e) {

//       let direction = $e.originalEvent.deltaY > 0 ? "+=" : "-=";

//       this.$el.stop().animate({
//         scrollTop: direction + this.step
//       }, this.speed);
//       $e.preventDefault()
//     },

//     destroy() {
//       this.$el.off('wheel', this._wheelHandler)
//     }
//   };

//   $.fn.smoothScroll = function(opts) {
//     this.each((index, el) => {
//       let smoothScroll = new SmoothScroll(el, opts);
//     })
//   }
// })();


// $('body').smoothScroll()



// == Smooth scroll to section == //
// $('header .navbar-nav > li > a, .services .arrow > .arrowDown').click(function () {
//     // check if $(this).data('value') exist in the current page
//     if ($('#' + $(this).data('value')).length) {
//         // smooth scroll to that element
//         $('html').animate({
//             scrollTop: $('#' + $(this).data('value')).offset().top
//         }, 500);
//     }
//     // else load the homepage, then scroll to that element
//     else { 
//         document.location.href = "/kazamiza/" + '#' + $(this).data('value');
//     }
// });