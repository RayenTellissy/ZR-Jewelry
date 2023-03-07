// necessary commands
$("#wdiv").fadeOut(1)
$("#main").fadeOut(1)
$("#goldbracelets").fadeOut(1)
$("#goldrings").fadeOut(1)
$("#goldearrings").fadeOut(1)
$("#goldnecklaces").fadeOut(1)
$("#silverbracelets").fadeOut(1)
$("#silverrings").fadeOut(1)
$("#silvernecklaces").fadeOut(1)

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
    var k=$('<div class="product"><img src="'+bracelets1.src+'" width="230" height="220"><p class="buyp">'+bracelets1.name+'</p><p class="buyp">Price:'+bracelets1.price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+bracelets2.src+'" width="230" height="220"><p class="buyp">'+bracelets2.name+'</p><p class="buyp">Price:'+bracelets2.price+'</p><button class="buy" onclick="goldbracelets2()">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+bracelets3.src+'" width="230" height="220"><p class="buyp">'+bracelets3.name+'</p><p class="buyp">Price:'+bracelets3.price+'</p><button class="buy" onclick="goldbracelets3()">Buy</button></div>')
    $("#goldbracelets").append(k)
    $("#goldbracelets").append(k1)
    $("#goldbracelets").append(k2)
}

function goldrings(){
    $("#main").fadeOut(500,function(){
        $("#goldrings").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+rings2.src+'" width="230" height="220"><p class="buyp">'+rings2.name+'</p><p class="buyp">Price:'+rings2.price+'</p><button class="buy" onclick="goldrings2()">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+rings3.src+'" width="230" height="220"><p class="buyp">'+rings3.name+'</p><p class="buyp">Price:'+rings3.price+'</p><button class="buy" onclick="goldrings3()">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+rings4.src+'" width="230" height="220"><p class="buyp">'+rings4.name+'</p><p class="buyp">Price:'+rings4.price+'</p><button class="buy" onclick="goldrings4()">Buy</button></div>')
    $("#goldrings").append(k)
    $("#goldrings").append(k1)
    $("#goldrings").append(k2)
}

function goldearrings(){
    $("#main").fadeOut(500,function(){
        $("#goldearrings").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+earrings.src+'" width="230" height="220"><p class="buyp">'+earrings.name+'</p><p class="buyp">Price:'+earrings.price+'</p><button class="buy" onclick="goldearring()">Buy</button></div>')
    $("#goldearrings").append(k)
}

function goldnecklaces(){
    $("#main").fadeOut(500,function(){
        $("#goldnecklaces").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+necklace1.src+'" width="230" height="220"><p class="buyp">'+necklace1.name+'</p><p class="buyp">Price:'+necklace1.price+'</p><button class="buy" onclick="goldnecklace1()">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+necklace2.src+'" width="230" height="220"><p class="buyp">'+necklace2.name+'</p><p class="buyp">Price:'+necklace2.price+'</p><button class="buy" onclick="goldnecklace2()">Buy</button></div>')
    $("#goldnecklaces").append(k)
    $("#goldnecklaces").append(k1)
}

function Silverbrace(){
    $("#main").fadeOut(500,function(){
        $("#silverbracelets").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+brace2.src+'" width="230" height="220"><p class="buyp">'+brace2.name+'</p><p class="buyp">Price:'+brace2.price+'</p><button class="buy" onclick="silverbrace2()">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+brace3.src+'" width="230" height="220"><p class="buyp">'+brace3.name+'</p><p class="buyp">Price:'+brace2.price+'</p><button class="buy" onclick="silverbrace3()">Buy</button></div>')
    $("#silverbracelets").append(k)
    $("#silverbracelets").append(k1)
}

function Silvernecklaces(){
    $("#main").fadeOut(500,function(){
        $("#silvernecklaces").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+necklaces1.src+'" width="230" height="220"><p class="buyp">'+necklaces1.name+'</p><p class="buyp">Price:'+necklaces1.price+'</p><button class="buy" onclick="silvernecklaces1()">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+necklaces2.src+'" width="230" height="220"><p class="buyp">'+necklaces2.name+'</p><p class="buyp">Price:'+necklaces2.price+'</p><button class="buy" onclick="silvernecklaces2()">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+necklaces3.src+'" width="230" height="220"><p class="buyp">'+necklaces3.name+'</p><p class="buyp">Price:'+necklaces3.price+'</p><button class="buy" onclick="silvernecklaces3()">Buy</button></div>')
    $("#silvernecklaces").append(k)
    $("#silvernecklaces").append(k1)
    $("#silvernecklaces").append(k2)
}

function Silverring(){
    $("#main").fadeOut(500,function(){
        $("#silverrings").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+ring1.src+'" width="230" height="220"><p class="buyp">'+ring1.name+'</p><p class="buyp">Price:'+ring1.price+'</p><button class="buy" onclick="silverring1()">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+ring2.src+'" width="230" height="220"><p class="buyp">'+ring2.name+'</p><p class="buyp">Price:'+ring2.price+'</p><button class="buy" onclick="silverring2()">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+ring3.src+'" width="230" height="220"><p class="buyp">'+ring3.name+'</p><p class="buyp">Price:'+ring3.price+'</p><button class="buy" onclick="silverring3()">Buy</button></div>')
    $("#silverrings").append(k)
    $("#silverrings").append(k1)
    $("#silverrings").append(k2)
}

//latest releases
var one=$('<div class="product"><img src="'+arr[random1].src+'" width="230" height="220"><p class="buyp">'+arr[random1].name+'</p><p class="buyp">Price:'+arr[random1].price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
var two=$('<div class="product"><img src="'+arr[random2].src+'" width="230" height="220"><p class="buyp">'+arr[random2].name+'</p><p class="buyp">Price:'+arr[random2].price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
var three=$('<div class="product"><img src="'+arr[random3].src+'" width="230" height="220"><p class="buyp">'+arr[random3].name+'</p><p class="buyp">Price:'+arr[random3].price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
$("#latest").append(one)
$("#latest").append(two)
$("#latest").append(three)
