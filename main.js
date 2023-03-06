// change to make fadein work
$("#wdiv").fadeOut(1)
$("#main").fadeOut(1)
$("#gold").fadeOut(1)

// animating: fading in text

$("#wdiv").fadeIn(2500)

function leaveWelcome(){  //fadeout on click
    $("#wdiv").fadeOut(1000,function(){
        $("#main").fadeIn(1000)
    })
}

function gold(){
    $("#main").fadeOut(1000)
    $("#gold").fadeIn(1000)
}
function test(){
    alert("worked!")
}