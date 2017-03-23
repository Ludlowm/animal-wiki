$(document).ready(function() {
  $("button#turtle-button").click(function(event){
    $("div").hide();
    $("div#turtle-div").show();
  });
  $("button#snake-button").click(function(event){
    $("div").hide();
    $("div#snake-div").show();
  });
  $("button#insect-button").click(function(event){
    $("div").hide();
    $("div#insect-div").show();
  });
});
