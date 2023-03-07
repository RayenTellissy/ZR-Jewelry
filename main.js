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
$("#faq").fadeOut(1)
$("#contactUs").fadeOut(1)
$("#selling").fadeOut(1)

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
 function faq(){
    $("#main").fadeOut(500,function(){
    $("#faq").fadeIn(500)
 })

var z=$('<div id="faq"><h1  class = "faqs">FAQs<h1><h2 class ="question"style="text-align:left;">CAN YOU CREATE CUSTOM DESIGNS?<h2><p class ="response"> We can accommodate any custom design, at the cost of a design fee depending on the complexity and scale of the design. Design fees begin at 300 D.  <p><h2 class ="question"style="text-align:left;">CAN YOU CREATE CUSTOM SIZES?<h2><p class = "response">We can accommodate all sizes between US 4 and 14 (H - Z3), larger sizes may require additional material and sizes outside this range may incur custom design fees. Contact our friendly team via live chat for more information on your custom sizing. <p><h2 class= "question"style="text-align:left">WHICH METALS DO YOU USE?<h2><ul class ="response"><li> Standard Materials: </li><li>Solid Gold:</li><li> Yellow, Red, White</li><li>9ct,  14ct, 18ct, 21ct</li><li>Silver:</li><li>925 Sterling Silver available upon request</li><li>Platinum</li><li>Palladium</li><li>Custom Materials:</li><li>Fine Silver</li><li>Brass</li><li>Plating</li><li>Black Rhodium</li><li>Rhodium</li><li>Yellow Gold</li><li>Rose Gold</li><li>Ruthenium</li><li>Silver</li><li>Micron</li><h2 class= "question"style="text-align:left">WHERE ARE YOUR PRODUCTS MADE?<h2><p class="response">All rings, pendants and earrings are handmade entirely in Tunisia from locally sourced materials.<br><br>All ready-made chains are sourced locally and ethically wherever possible. Where sourced internationally, primarily manufactured in Italy with a secondary manufacturer for gold-plated items in South Korea. <p><h2 class= "question"style="text-align:left">HOW DO I SELL MY JEWELRY?<h2><P class = "response"> You can sell you jewelry by accessing are selling feature on our webSite. <P></div>')
 $("#faq").append(z)
}
function contactUs(){
    $("#main").fadeOut(500,function(){
        $("#contactUs").fadeIn(500)
    } )
    var y =$('<h1 class ="contactUs"> CONTACT US<h1><h3 class="contactUs">Considering the  contact  Send us an email and lets chat!<h3><label for="contactUs">CONTACT US :</label><p id="call"> Send us a message  and we will get back to you!<p><textarea id="story" name="story"rows="5" cols=90></textarea><button class="send your message"type="button">send your message</button>')
    $("#contactUs").append(y)
}


function selling(){
    $("#main").fadeOut(500,function(){
        $("#selling").fadeIn(500)
    })
var w=$('<h1 class ="selling"> SELLING YOUR JEWELRY<h1><h3 class="selling">Considering selling or trading in your unwanted jewelry? Send us an email and lets chat!<h3><label for="selling">SELLING :</label><p id="call"> Send us a few pictures and brief description of what you are looking to sell or trade and we will get back to you!<p><textarea id="story" name="story"rows="5" cols=90></textarea><button class="send your message"type="button">send your message</button>')
$("#selling").append(w)
}













//latest releases
var one=$('<div class="product"><img src="'+arr[random1].src+'" width="230" height="220"><p class="buyp">'+arr[random1].name+'</p><p class="buyp">Price:'+arr[random1].price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
var two=$('<div class="product"><img src="'+arr[random2].src+'" width="230" height="220"><p class="buyp">'+arr[random2].name+'</p><p class="buyp">Price:'+arr[random2].price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
var three=$('<div class="product"><img src="'+arr[random3].src+'" width="230" height="220"><p class="buyp">'+arr[random3].name+'</p><p class="buyp">Price:'+arr[random3].price+'</p><button class="buy" onclick="goldbracelets1()">Buy</button></div>')
$("#latest").append(one)
$("#latest").append(two)
$("#latest").append(three)


