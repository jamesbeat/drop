jQuery( document ).ready(function($) {
			
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
    
    	
});