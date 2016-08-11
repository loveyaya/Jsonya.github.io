$(function() {
	var $sidebar = $('.sidebar');
	var $widget = $('.widget.recent_posts');
	var $primaryFooter = $('.primary-footer');
	
	if ($widget[0]) {
		function onResize() {
			var winWidth = $(window).width();
			if (winWidth <= 768 ) {
				$widget.css({
					'position' : 'relative',
					'top': 0,
					'width' : '100%'
				});
			} else {
				var sidebarWidth = $sidebar.width();
				$widget.css({
					'position' : 'relative',
					'top' : 0,
					'width' : sidebarWidth,
				});
			}
		}
		$(window).on('resize', function(event) {
			event.preventDefault();
			/* Act on the event */
			onResize();
		});
		onResize();

		var offsetTop = $('.widget.recent_posts').offset().top;
		var footerHeight = $('.primary-footer').height();
		var primaryHeader = $('.primary-header').height();

		var marginTop = 20;

		var widgetHeight = offsetTop - marginTop - primaryHeader;
		// $(window).on('scroll', function() {
		// 	if ($(window).width() < 768 ){
		// 		flags = false;
		// 	}else {
		// 		flags = true;
		// 	}
		// 	var scrollTop = $(window).scrollTop();
		// 	if (flags) {
		// 		if (scrollTop + primaryHeader > offsetTop) {
		// 			$sidebar.css({
		// 				'position' : 'absolute',
		// 				'top' : scrollTop - offsetTop +  primaryHeader + marginTop
		// 			}, 50);
		// 		}else {
		// 			// $sidebar.css({
		// 			// 	'top' : 0
		// 			// });
		// 			$(".sidebar").css({
		// 				'position' : 'relative',
		// 				top: 0
		// 			});
		// 		}
		// 	}else {
		// 		$(".sidebar").css({
		// 			'position' : 'relative',
		// 			top: 0
		// 		});
		// 	}
		// });


		$(window).on('scroll', function() {
			var scrollTop = $(window).scrollTop();
			var winWidth = $(window).width();

			var contentHeight = $('.main-content').height() - $sidebar.height();
			var sidebarWidth = $sidebar.width();

			if (scrollTop > widgetHeight && contentHeight - sidebarWidth > widgetHeight && winWidth >= 768) {

				var footerHeight = $primaryFooter.height();
				var footerOffsetHeight = $primaryFooter.offset().top;
				if (scrollTop + primaryHeader + 20 + $widget.height() > footerOffsetHeight) {
					$widget.css({
						'position' : 'absolute',
						'top' :  footerOffsetHeight - 64 - $widget.height() + 'px'
					});
				}else {
					$widget.css({
						'position' : 'fixed',
						'top' : primaryHeader + 20 + 'px',
						'width' : sidebarWidth,
					});
				}
			}else {
				// $sidebar.css({
				// 	'top' : 0
				// });
				$widget.css({
					'position' : 'relative',
					top: 0,
				});
			}
		});
		
	}
})