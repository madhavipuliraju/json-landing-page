$(document).ready(function(){ 
  $.get("header.html", function(data) {
    $("#header").html(data);
  });
}); 

$(document).ready(function(){ 
  $.get("footer.html", function(data) {
    $("#footer").html(data);
  });
}); 
