$(document).ready(function(){
	$('#header').delay(300).animate({'opacity':'1'}, 800);
	$('#about').delay(500).animate({'opacity':'1'},800)
	$('#showcase').delay(700).animate({'opacity':'1'},800)
	$('#value').delay(900).animate({'opacity':'1'},800)
	$('#contact').delay(1100).animate({'opacity':'1'},800)

	    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.right').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(600).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });	
	    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.para').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(600).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
	    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.contentbox1').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(700).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
	    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.contentbox').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(800).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });
	$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.contentbox2').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(1000).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });

	$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.contentbox3').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).delay(1200).animate({'opacity':'1'},800);
                    
            }
            
        }); 
    
    });

});