$(document).ready(function(){
	var input = prompt ('gridsize:');
	input-=1;
	var squaresize = $(window).height()/input;


	for (var h = 0; h <= input; h++){
		for (var i = 0; i <= input; i++) {
		    $('<div />', {
		        'class' : 'rows',
		        'id'    : 'row' + i
		    }).appendTo('#gridcontainer');
		};
		$('<div />', {
		        'class' : 'rowend',
		        'id'    : 'end' + h
		    }).appendTo('#gridcontainer');
	};
	$('.rows').css('height', squaresize);
	$('.rows').css('width', squaresize);

	$('.rows').on('click',function(){
		$(this).toggleClass('clicked');
	});

	$('.rows').on('mouseenter',function(){
			var col = 'rgb(' + rands() + ',' + rands() + ',' + rands() + ')';
			if($(this).css('background-color')!='rgb(0, 0, 0)'){
				$(this).css('background-color',col);
			}
	});
	$('.rows').on('click',function(){
		if($(this).css('background-color')!='rgb(0, 0, 0)'){
			$(this).css('background-color','black');
		}
		else{
			var col = 'rgb(' + rands() + ',' + rands() + ',' + rands() + ')';
			$(this).css('background-color',col);
		}
	});
	


});


function rands(){
	var x = Math.floor(Math.random()*256);
	if (x<20){return x+20}
	else if(x>236){return x-20;}
	else {return x;}
}

