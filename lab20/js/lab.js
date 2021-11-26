//@authors Joshua Rodriguez, Matthew Habrial


URL = "https://xkcd.com/info.0.json"
//ajax Method
$.ajax({
    url: URL,
    type:"GET",
})

//getting data

.done(function(data){
    var title = data.title;
    var  img = data.img;
    var alt = data.alt;



});

//output
   $("#output").append("<p>" + JSON.stringify(data));
