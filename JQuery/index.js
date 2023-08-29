$("h1").css("color", "red"); //$ is short for Jquery. Editnig style, .css
$("h2").addClass("big-title");
$("img").attr("src", "kick.png"); //Setting src attribute of image.

//Adding an event listener. On, takes in the type of event. 
$("button").on("click", function()
{
    $("h1").css("color", "purple");
});

//Adding an event listener. On, takes in the type of event. 
$("button").on("click", function()
{
    $("h2").toggle(); //Toggling apperance, hide/show. 
    $("h1").animate({margin: 100}); //Toggling apperance, hide/show. 
});