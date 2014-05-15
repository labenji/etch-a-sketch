$(document).ready(function main(){
	$('.rows').remove();
	var input = prompt ('gridsize?:');
	input-=1;
	var squaresize = ($(window).height()-(3*input))/input;


	for (var h = 0; h <= input; h++){
		for (var i = 0; i <= input; i++) {
		    $('<div />', {
		        'class' : 'rows',
		        'id'    : 'row' + i,
		        'data-red':'256',
		        'data-blu':'256',
		        'data-gre':'256'
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
	//color trail
	$('.rows').on('mouseenter',function(){
			var col = 'rgb(' + rands() + ',' + rands() + ',' + rands() + ')';
			if($(this).css('background-color')!='rgb(0, 0, 0)'){
				$(this).css('background-color',col);
			}
	});
	//click to black
	$('.rows').on('click',function(){
		if($(this).css('background-color')!='rgb(0, 0, 0)'){
			$(this).css('background-color','black');
		}
		else{
			var col = 'rgb(' + rands() + ',' + rands() + ',' + rands() + ')';
			$(this).css('background-color',col);
		}
	});
	//reset button
	$('#reset').on('click',function(){
		main();
	});
	


});



function rands(){
	var x = Math.floor(Math.random()*256);
	if (x<20){return x+20}
	else if(x>236){return x-20;}
	else {return x;}
}

