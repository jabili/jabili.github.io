$(document).ready(function(){
	//prevents empty links from working
	$("a[href=''], tbody ul li a").click(function(event){
		event.preventDefault();
	});
	
	//location chooser
	$("#state_W").click(function(event){
		$("#cMenu").fadeOut('fast', function() {
			$("#wMenu").fadeIn('fast');
		});
	});
	$("#state_C").click(function(event){
		$("#wMenu").fadeOut('fast', function() {
			$("#cMenu").fadeIn('fast');
		});
	});
	$("#locChooser .dropdown").click(function(){
        if( $("#locMenu").is(":visible") ){
	        $("#locMenu").animate({height:'toggle'},'fast');
            $("#shade").hide();
        }else{
		    $("#locMenu").animate({height:'toggle'},'fast');
            $("#shade").show();
        }
    });
	$("span.hide, #shade").click(function(event){
		$("#locMenu").animate({height:'toggle'},'fast');
        $("#shade").hide();
	});
	
});