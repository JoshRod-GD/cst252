// @authors Joshua Rodriguez, Matthew habial
// @date 10/6/21

// make a button in jQuery
$("#output").html("<button id = my-button>Push Me!")

//
$("#my-button").click(function(){
  $("#output").append("<button class = button>Push Me!");

});
