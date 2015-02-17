/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.basic = {
  attach: function(context, settings) {

    $(window).ready(function() {
      // Execute code once the window is ready.
      //console.log("RDY");
					
		var snapper = new Snap({
	        element: document.getElementById('snap_table'),
	        disable: 'left',
	        hyperextensible: false,
	        maxPosition: 275,
			minPosition: -275,
			slideIntent: 20,
			minDragDistance: 20,
			touchToDrag: false,
	
	    });
	    
	    /*
	    snapper.on('start', function(){
		  // Do Something
		  //console.log('sztart');
		});
	        	
		snapper.on('animated', function(){
		  // Do Something
		  //console.log('animated');
		});
		
		snapper.on('expandLeft', function(){
		  // Do Something
		  //console.log('expandLeft');
		});
		
		snapper.on('expandRight', function(){
		  // Do Something
		  //console.log('expandRight');
		});
		*/
		
		snapper.on('open', function(){
	
		  $("#snap_btn").addClass('active');
		});
		
		snapper.on('close', function(){
	
		  $("#snap_btn").removeClass('active');
		});
	  
		$("#snap_btn").on('click', function(e){
							
			e.preventDefault();
	
		    if( snapper.state().state=="right" ){
		        snapper.close();
		    } else {
		        snapper.open('right');
		    }
		
		});
		
		
		$("#snap_demo").on('click', function(e){
							
			e.preventDefault();
	
		    if( snapper.state().state=="right" ){
		        snapper.close();
		    } else {
		        snapper.open('right');
		    }
		
		});
	    
	    	    
	    
	    //smoothstate
	  	    	    
	    var $body    = $('html, body'),
	    	$main 	 = $('#main'),
	    	$spinner = $('#center_spinner'),
	    	content  = $('#snap_table').smoothState({
	            prefetch: true,
	            pageCacheSize: 6,
	            blacklist: "#snap_btn, #snap_demo, .tabs a",
	            onStart: {
	                duration: 0,
	                render: function (url, $container) {
	                    //content.toggleAnimationClass('is-exiting');
	                    $body.addClass('is-exiting');
	                    $body.animate({
	                        scrollTop: 0
	                    });
	                                        
	                    
	                    //console.log("Smoothstate Start"); 
	                }
	            },
	            onProgress : {
				    duration: 0, // Duration of the animations, if any.
				    render: function (url, $container) {
				        
				      Pace.restart();
				        
				       // content.toggleAnimationClass('is-loading');
				        //$body.css('cursor', 'wait');
				        //$body.find('a').css('cursor', 'wait');
				        
				        //console.log("Smoothstate Progress");
				    }
				},
				onEnd : {
				    duration: 0, // Duration of the animations, if any.
				    render: function (url, $container, $content) {
				       // $body.css('cursor', 'auto');
				        //$body.find('a').css('cursor', 'auto');
				        $body.removeClass('is-exiting');
				        
				        //content.toggleAnimationClass('is-entering');
				        $container.html($content);
				       
				       				        
				        //console.log("Smoothstate End");
				    }
				},
	        }).data('smoothState');

    });

    $(window).load(function() {
      // Execute code once the window is fully loaded.
      console.log('loaded');
      $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	  });
      
    });

    $(window).resize(function() {
      // Execute code when the window is resized.
    });

    $(window).scroll(function () {
      // Execute code when the window scrolls.
    });

    $(document).ready(function() {
      // Execute code once the DOM is ready.
    });
  }
};


})(jQuery, Drupal, this, this.document);