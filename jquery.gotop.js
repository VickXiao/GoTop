(function($){

    $.gotop = function(options){

        var opt = $.extend({
        	'title':'GO',
        	'right':'5%',
        	'bottom':'10%',
            'width':'40px',
            'height':'40px',
            'size':'14px',
            'color':'#fff',
            'background':'#000',
            'image':''
        },options);

        $('body').append('<div class="gotop">'+opt.title+'</div>');
        
        if(opt.image){
        	$('.gotop').css({
        		'text-indent': '100%',
        		'background': 'url('+opt.image+') no-repeat 0px 0px',
        	});
        }else{
        	$('.gotop').css({
        		'color': opt.color,
        		'background': opt.background,
        		'opacity': '.5',
    	        'box-shadow':'5px 5px 5px -5px black'
        	});
        }

        $('.gotop').css({
        	'display':'none',
        	'position':'fixed',
	        'right': opt.right,
	        'bottom': opt.bottom,
	        'width': opt.width,
	        'height': opt.height,
	        'line-height':opt.height,
	    	'border': 'none',
	    	'overflow': 'hidden',
	    	'cursor':'pointer',
	        'font-size': opt.size,
	        'text-align': 'center',
        	});
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 50) {
                $('.gotop').fadeIn();
            }
            else {
                $('.gotop').fadeOut();
            }
        });

        $('.gotop').on('click',function(){
            $("html,body").animate({scrollTop:0}, 500);
        });

    };

})(window.jQuery);