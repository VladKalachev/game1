$(document).ready(function() {

//alert ("Начало уровня!");

// анимация объектов
(function animation() {
   var options = {
      duration: 5500,
      easing: 'linear'
   };

   $('#sloi1')
      .find('#box1')
	  
      .animate({
            left: 220,
            top: 0
         },
         options
      )
	  

      .animate({
            left: 0,
            top:0
         },
         options
      )
	  
	  .animate({
            left: 0,
            top:220
         },
         options
      )
	  .animate({
            left: 0,
            top:0
         },
		 
         $.extend(true, {}, options, {
            complete: function() {
               animation();
            }
         })
      );
})();
	

/**window.onload = function() {
	
	var box1 = document.getElementById("box1");
	var box2 = document.getElementById("box2");
	
	function rect2Rect(obj1, obj2) {
	   return ( obj1.offsetLeft <= obj2.offsetLeft + obj2.offsetWidth && obj1.offsetLeft + obj1.offsetWidth  >=  obj2.offsetLeft && obj1.offsetTop + obj1.offsetHeight >=  obj2.offsetTop && obj1.offsetTop <= obj2.offsetTop +  obj2.offsetHeight );
	}

	function move() {
	   if(!rect2Rect(box1, box2)) {
	     setTimeout(function() {
		   box1.style.left = box1.offsetLeft + 5 + "px";
		   box2.style.top = box2.offsetTop - 5 + "px";
		   move();
	     }, 50);
	   }
	   else{
	     alert("Столкновение");
	   }
	}
	move();
}**/

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
