$(document).ready(function(){
/* fade animation - on navigation */
   $('.hide').fadeIn(1000).removeClass('.hide');
   });

 /* toggle for ingredients */
   $("#recipe01 .ingredients").hide(); 
   $('#recipe01 .ingredientsh3').click(function(){
      $('#recipe01 ul').toggle();
   });
   $("#recipe02 .ingredients").hide(); 
   $('#recipe02 .ingredientsh3').click(function(){
      $('#recipe02 ul').toggle();
   });
   
   $("#recipe03 .ingredients").hide();   
   $('#recipe03 .ingredientsh3').click(function(){
      $('#recipe03 ul').toggle();
   });
  
   $("#recipe04 .ingredients").hide();  
   $('#recipe04 .ingredientsh3').click(function(){
      $('#recipe04 ul').toggle();
   });

   $("#recipe05 .ingredients").hide();  
   $('#recipe05 .ingredientsh3').click(function(){
      $('#recipe05 ul').toggle();
   });

   $("#recipe06 .ingredients").hide();  
   $('#recipe06 .ingredientsh3').click(function(){
      $('#recipe06 ul').toggle();
   });
 
   $("#recipe07 .ingredients").hide();  
   $('#recipe07 .ingredientsh3').click(function(){
      $('#recipe07 ul').toggle();
   });

 /* toggle for ingredients */
   $("#recipe01 .directionsol").hide(); 
   $('#recipe01 .directionsh3').click(function(){
      $('#recipe01 ol').toggle();
   });
 
   $("#recipe02 .directionsol").hide(); 
   $('#recipe02 .directionsh3').click(function(){
      $('#recipe02 ol').toggle();
   });
   
   $("#recipe03 .directionsol").hide(); 
   $('#recipe03 .directionsh3').click(function(){
      $('#recipe03 ol').toggle();
   });

   $("#recipe04 .directionsol").hide(); 
   $('#recipe04 .directionsh3').click(function(){
      $('#recipe04 ol').toggle();
   });
   
   $("#recipe05 .directionsol").hide(); 
   $('#recipe05 .directionsh3').click(function(){
      $('#recipe05 ol').toggle();
   });
 
   $("#recipe06 .directionsol").hide(); 
   $('#recipe06 .directionsh3').click(function(){
      $('#recipe06 ol').toggle();
   });

   $("#recipe07 .directionsol").hide(); 
   $('#recipe07 .directionsh3').click(function(){
      $('#recipe07 ol').toggle();
   });

 /* position animation */
   $("h1").click(function() {
      $("h1").animate({left: "50px"}, "slow");
   });

 /* jQuery animate() function */
   $("h1").dblclick(function() {
      $("h1").animate({fontSize: "1.75em"});
   });

 /* navigation events */
$(function() {
   $("#recipe01").hide();
});
$("#r01").click(function(){
   $("#recipe01").show();
});
$("#recipe01").dblclick(function(){
   $("#recipe01").hide();
});

$(function() {
   $("#recipe02").hide();
});
$("#r02").click(function(){
   $("#recipe02").show();
});
$("#recipe02").dblclick(function(){
   $("#recipe02").hide();
});

$(function() {
   $("#recipe03").hide();
});
$("#r03").click(function(){
   $("#recipe03").show();
});
$("#recipe03").dblclick(function(){
   $("#recipe03").hide();
});

$(function() {
   $("#recipe04").hide();
});
$("#r04").click(function(){
   $("#recipe04").show();
});
$("#recipe04").dblclick(function(){
   $("#recipe04").hide();
});

$(function() {
   $("#recipe05").hide();
});
$("#r05").click(function(){
   $("#recipe05").show();
});
$("#recipe05").dblclick(function(){
   $("#recipe05").hide();
});

$(function() {
   $("#recipe06").hide();
});
$("#r06").click(function(){
   $("#recipe06").show();
});
$("#recipe06").dblclick(function(){
   $("#recipe06").hide();
});

$(function() {
   $("#recipe07").hide();
});
$("#r07").click(function(){
   $("#recipe07").show();
});
$("#recipe07").dblclick(function(){
   $("#recipe07").hide();
});