// animating: fading in text
$("#wdiv").fadeOut(1)
$("#main").fadeOut(1)
$("#gold").fadeOut(1)
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
// 
var brace1=$('<div class="bracelets"><img src='+bracelets1.src+' alt="tradii"width="230",height="220"><p>'+bracelets1.name+'</p><p>Price:'+bracelets1.price+'</p></div>')
$("#goldbracelets").append(brace1)

