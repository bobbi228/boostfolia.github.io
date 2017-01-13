$(function() {

	$(document).ready(function(){
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
         controls.video.click(function() {
    controls.togglePlayback();
});		      
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();  
            $("#playpause i").toggleClass("pe-7s-play");
            $("#playpause .wrap-pe-7s-pause1").toggleClass("pe-7s-pause1");
            $("#playpause .wrap-pe-7s-pause2").toggleClass("pe-7s-pause2");
            $("#controls .zatemkatoggle").toggleClass("zatemka");

        } else {
            video.pause();
            $("#playpause i").toggleClass("pe-7s-play");
            $("#controls .zatemkatoggle").toggleClass("zatemka");
            $("#playpause .wrap-pe-7s-pause1").toggleClass("pe-7s-pause1");
            $("#playpause .wrap-pe-7s-pause2").toggleClass("pe-7s-pause2");
        }

   		 });
	}); 



			

	$("header .top-mnu-wrap .wrap-mnu-button").click(function(){
        $("header .top-mnu-wrap .wrap-mnu-button .wrap-mnu-item").slideToggle("slow");
        $(this).toggleClass("active");
    });


	var owl = $(".owl-carousel")
	$(document).ready(function(){
		owl.owlCarousel({
		   	loop: true, 
		   	items: 1
		});
		$(".next").click(function(){
			owl.trigger("next.owl.carousel");
		});
		$(".prev").click(function(){
			owl.trigger("prev.owl.carousel");
		});

	});
});	