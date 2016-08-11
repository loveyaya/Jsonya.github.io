// (function($) {
//       var $window           = $(window);

//       $window.on('scroll', scrollAnimation);

//       function scrollAnimation() {
//           var scrolled = $window.scrollTop();
//           // :not(.animated)
//            $(".scroll-animation").each(function () {
//               var $this     = $(this),
//                   offsetTop = $this.offset().top,
//                   height_padded = $this.height() * 1.1;
//               var direction = $this.attr('data-direction');
//               //向上
//                if (scrolled > height_padded) {
//                     // console.log(direction);
//                     if (direction != 'up') {
//                         $this.attr('data-direction', 'up');
//                         $this.removeClass('animated ' + $this.data('animationdown'));
//                         $this.addClass('animated ' + $this.data('animationup'));
//                         $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//                               // 
//                         });
//                     }
//                 //向下
//                 } else {
//                     // console.log(direction);
//                     if (direction != 'down') {
//                         $this.attr('data-direction', 'down');
//                         $this.removeClass('animated ' + $this.data('animationup'));
//                         $this.addClass('animated ' + $this.data('animationdown'));
//                         $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
//                               // $this.removeClass('animated ' + $this.data('animationdown'));
//                         });
//                     }
//                }
//         });
//       }
// })(jQuery);
