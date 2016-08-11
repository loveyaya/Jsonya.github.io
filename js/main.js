/*
 * @Author: HelKyle
 * @Date:   2015-12-13 19:58:28
 * @Last Modified by:   HelKyle
 * @Last Modified time: 2015-12-13 20:00:39
 */

'use strict';
(function($, window, undefined) {
    // 格式化时间
    $('.localTime').each(function(index, ele) {
        var dateTime = $(ele).attr('datetime');
        if (dateTime) {
            $(ele).text(moment(dateTime).locale('zh-cn').fromNow());
        }
    });
    // 代码块
    var key = 'highlight';
    $('.highlight').each(function() {
        var $this = $(this),
            className = $this.attr('class');
        var index = className.indexOf(key);
        var language = '';
        if (index != -1) {
            language = className.slice(index + key.length);
        } else {
            language = 'plain';
        }
        $this.wrap("<div class='highlight-wrap' rel=" + language.toUpperCase() + "></div>");
    });
    // 导航栏
    var $navMenu = $('#nav-menu');
    var $navClose = $('#menu-close');
    var $sideBarMask = $('#sidebarMask');

    $navMenu.on('click', function() {
        sidebarOpen();
    });

    $sideBarMask.on('click', function() {
        sidebarOpen();
    })

    $navClose.on('click', function() {
        sidebarOpen();
    })

    function sidebarOpen() {
        $('body').toggleClass('sidebar-open');
    }


    // 滚动绑定
    (function() {
        var scrolling = false;
        var navHeight = $('.mobile-nav').outerHeight();
        var header = $('.primary-header');
        var autoHideHeader = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > header.outerHeight() - navHeight) {
                $('.mobile-nav').addClass('fixed');
            } else {
                $('.mobile-nav').removeClass('fixed');
            }
            scrolling = false;
        }

        var parallaxHeader = function() {
            var scrollTop = $(window).scrollTop();
            var headerHeight = header.outerHeight();
            if (scrollTop <= headerHeight) {
                header.find('.parallax-content').css({
                    opacity: (headerHeight-scrollTop)/headerHeight,
                    transform: 'translate(0, ' + scrollTop*0.3 + 'px)'
                })
            }
        }

        $(window).on('scroll', function(){
        	if( !scrolling ) {
        		scrolling = true;
        		autoHideHeader();
                parallaxHeader();
        	}
        });
    })();

    // donate
    $('#donate-wrap').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('flip');
      // $('.donate_board').css('display', 'none');
      // $('.donate_bar').css('display', 'block');
    });

})(jQuery, window);
