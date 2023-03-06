// changes to make fadein work
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

function goldbracelets(){
    $("#main").fadeOut(500,function(){
        $("#goldbracelets").fadeIn(500)
    })
}

function goldrings(){
    $("#main").fadeOut(500,function(){
        $("#goldrings").fadeIn(500)
    })
}

function goldearrings(){
    $("#main").fadeOut(500,function(){
        $("#goldrings").fadeIn(500)
    })
}
//
