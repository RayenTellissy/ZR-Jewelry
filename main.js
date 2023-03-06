// animating: fading in text
$("#wdiv").fadeOut(1)
$("#main").fadeOut(1)
$("#wdiv").fadeIn(2500)

function leaveWelcome(){  //fadeout on click
    $("#wdiv").fadeOut(1000,function(){
        $("#main").fadeIn(1000)
    })
}

function gold(){
    $("#main").fadeOut(1000)
}
