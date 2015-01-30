/**
 * Created by J-P on 29/01/2015.
 */
$(function(){

	$(".participant").click(function(){
		location.href = "/participants/" + $(this).attr("id");
	});

});