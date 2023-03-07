// commands to make fadein work
$("#wdiv").fadeOut(1)
$("#main").fadeOut(1)
$("#goldbracelets").fadeOut(1)
$("#goldrings").fadeOut(1)
$("#goldearrings").fadeOut(1)
$("#goldnecklaces").fadeOut(1)
$("#silverbracelets").fadeOut(1)
$("#silverrings").fadeOut(1)
$("#silvernecklaces").fadeOut(1)
$("#found").fadeOut(1)
$("#cartpage").fadeOut(1)
$("#endpage").fadeOut(1)
$("#loginpage").fadeOut(1)
$("#signup-page").fadeOut(1)

// animating: fading in welcome text

$("#wdiv").fadeIn(2500)

function leaveWelcome(){  //fadeout welcome text on click
    $("#wdiv").fadeOut(1000,function(){
        $("#main").fadeIn(1000)
    })
    
}

function goldbracelets(){                    // gold bracelets page
    $("#main").fadeOut(500,function(){
        $("#goldbracelets").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+bracelets1.src+'" width="230" height="220"><p class="buyp">'+bracelets1.name+'</p><p class="buyp">Price:'+bracelets1.price+'</p><button class="buy" onclick="buy(bracelets1.name)">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+bracelets2.src+'" width="230" height="220"><p class="buyp">'+bracelets2.name+'</p><p class="buyp">Price:'+bracelets2.price+'</p><button class="buy" onclick="buy(bracelets2.name)">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+bracelets3.src+'" width="230" height="220"><p class="buyp">'+bracelets3.name+'</p><p class="buyp">Price:'+bracelets3.price+'</p><button class="buy" onclick="buy(bracelets3.name)">Buy</button></div>')
    $("#goldbracelets").append(k)
    $("#goldbracelets").append(k1)
    $("#goldbracelets").append(k2)
}

function goldrings(){                       // gold rings page
    $("#main").fadeOut(500,function(){
        $("#goldrings").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+rings2.src+'" width="230" height="220"><p class="buyp">'+rings2.name+'</p><p class="buyp">Price:'+rings2.price+'</p><button class="buy" onclick="buy(rings2.name)">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+rings3.src+'" width="230" height="220"><p class="buyp">'+rings3.name+'</p><p class="buyp">Price:'+rings3.price+'</p><button class="buy" onclick="buy(rings3.name)">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+rings4.src+'" width="230" height="220"><p class="buyp">'+rings4.name+'</p><p class="buyp">Price:'+rings4.price+'</p><button class="buy" onclick="buy(rings4.name)">Buy</button></div>')
    $("#goldrings").append(k)
    $("#goldrings").append(k1)
    $("#goldrings").append(k2)
}

function goldearrings(){                       // gold earrings page
    $("#main").fadeOut(500,function(){
        $("#goldearrings").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+earrings.src+'" width="230" height="220"><p class="buyp">'+earrings.name+'</p><p class="buyp">Price:'+earrings.price+'</p><button class="buy" onclick="buy(earrings.name)">Buy</button></div>')
    $("#goldearrings").append(k)
}

function goldnecklaces(){                    // gold necklaces page
    $("#main").fadeOut(500,function(){
        $("#goldnecklaces").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+necklace1.src+'" width="230" height="220"><p class="buyp">'+necklace1.name+'</p><p class="buyp">Price:'+necklace1.price+'</p><button class="buy" onclick="buy(necklace1.name)">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+necklace2.src+'" width="230" height="220"><p class="buyp">'+necklace2.name+'</p><p class="buyp">Price:'+necklace2.price+'</p><button class="buy" onclick="buy(necklace2.name)">Buy</button></div>')
    $("#goldnecklaces").append(k)
    $("#goldnecklaces").append(k1)
}
/*                      SILVER PAGES                        */

function Silverbrace(){                            //silver braceletes page
    $("#main").fadeOut(500,function(){
        $("#silverbracelets").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+brace2.src+'" width="230" height="220"><p class="buyp">'+brace2.name+'</p><p class="buyp">Price:'+brace2.price+'</p><button class="buy" onclick="buy(brace2.name)">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+brace3.src+'" width="230" height="220"><p class="buyp">'+brace3.name+'</p><p class="buyp">Price:'+brace3.price+'</p><button class="buy" onclick="buy(brace3.name)">Buy</button></div>')
    $("#silverbracelets").append(k)
    $("#silverbracelets").append(k1)
}

function Silvernecklaces(){               // silver necklaces page
    $("#main").fadeOut(500,function(){
        $("#silvernecklaces").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+necklaces1.src+'" width="230" height="220"><p class="buyp">'+necklaces1.name+'</p><p class="buyp">Price:'+necklaces1.price+'</p><button class="buy" onclick="buy(necklaces1.name)">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+necklaces2.src+'" width="230" height="220"><p class="buyp">'+necklaces2.name+'</p><p class="buyp">Price:'+necklaces2.price+'</p><button class="buy" onclick="buy(necklaces2.name)">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+necklaces3.src+'" width="230" height="220"><p class="buyp">'+necklaces3.name+'</p><p class="buyp">Price:'+necklaces3.price+'</p><button class="buy" onclick="buy(necklaces3.name)">Buy</button></div>')
    $("#silvernecklaces").append(k)
    $("#silvernecklaces").append(k1)
    $("#silvernecklaces").append(k2)
}

function Silverring(){                       // silver rings page
    $("#main").fadeOut(500,function(){
        $("#silverrings").fadeIn(500)
    })
    var k=$('<div class="product"><img src="'+ring1.src+'" width="230" height="220"><p class="buyp">'+ring1.name+'</p><p class="buyp">Price:'+ring1.price+'</p><button class="buy" onclick="buy(ring1.name)">Buy</button></div>')
    var k1=$('<div class="product"><img src="'+ring2.src+'" width="230" height="220"><p class="buyp">'+ring2.name+'</p><p class="buyp">Price:'+ring2.price+'</p><button class="buy" onclick="buy(ring2.name)">Buy</button></div>')
    var k2=$('<div class="product"><img src="'+ring3.src+'" width="230" height="220"><p class="buyp">'+ring3.name+'</p><p class="buyp">Price:'+ring3.price+'</p><button class="buy" onclick="buy(ring3.name)">Buy</button></div>')
    $("#silverrings").append(k)
    $("#silverrings").append(k1)
    $("#silverrings").append(k2)
}

/*                SIGN UP PAGE           */
var account=[]
function signUp(){
    $("#main").fadeOut(400,function(){
        $("#signup-page").fadeIn(400)
    })
    var k=$('<center><h1>Sign Up</h1><input type="text" placeholder="type your username" id="suser"><input type="password" placeholder="type your password" id="spass"><button id="signupbtn" onclick="signupCheck()">Sign Up</button></center>')
    $("#signup-page").append(k)
}
function signupCheck(){
        account.push({user:$("#suser").val(),
            pass:$("#spass").val(),
            balance:1000,
            cart:[]
        })
        localStorage.clear()
        localStorage.setItem("allAccounts",JSON.stringify(account))
        $("#signup-page").fadeOut(400,function(){
            $("#main").fadeIn(400)
        })

}



/*               LOGIN FUNCTION              */

function login(){
    $("#main").fadeOut(400,function(){
        $("#loginpage").fadeIn(400)
    })
    var k='<center><h1>Login</h1><input type="text" placeholder="type your username" id="user"><input type="password" placeholder="type your password" id="pass"><button id="loginbtn" onclick="loginCheck()">Sign In</button></center>'
    $("#loginpage").append(k)
}

function loginCheck(){
    accounts=JSON.parse(localStorage.getItem("allAccounts"))
    for(var i=0 ; i<accounts.length ; i++){
        if($("#user").val()===accounts[i].user && $("#pass").val()===accounts[i].pass){
            console.log($("#user").val())
            balance=accounts[i].balance
            cart=accounts[i].cart
            loggedIn=true
            $("#loginpage").fadeOut(400,function(){
                $("#main").fadeIn(400)
            })
        }
    }
    if(loggedIn===false){
        alert("account incorrect")
    }
    
}




/*                         search bar function                    */

function searchbar(){
    console.log($("#search").val())
    var ch=""
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i].name===$("#search").val()){
            $("#latest").fadeOut(500,function(){
                $("#found").fadeIn(400)
            })
            ch+='<div class="product"><img src="'+arr[i].src+'" width="230" height="220"><p class="buyp">'+arr[i].name+'</p><p class="buyp">Price:'+arr[i].price+'</p><button class="buy" onclick="buy(arr['+i+'].name)">Buy</button></div>'
        }
    }
    $("#found").append(ch)
}

/*                    CART FUNCTION                   */

function cartbuy(){
    var ch=""
    $("#main").fadeOut(500,function(){
        $("#cartpage").fadeIn()
    })
    for(var i=0 ; i<cart.length ; i++){
        ch+='<div class="product"><img src="'+cart[i].src+'" width="230" height="220"><p class="buyp">'+cart[i].name+'</p><p class="buyp">Price:'+cart[i].price+'</p></div>'
    }
    $("#cartpage").append(ch)
    var k="<button id='finish' onclick='checkout()'>Checkout</button>"
    $("#cartpage center").append(k)
}

/*                 checkout               */
function checkout(){
    $("#cartpage").fadeOut(400,function(){
        $("#endpage").fadeIn(600,function(){
            setTimeout(function(){
                $("#endpage").fadeOut(500,function(){
                    $("#main").fadeIn(400)
                })
            },3000)
        })
    })
}



/*                       RETURN FUNCTION                */
function returnPage(div){
    $("#"+div+"").fadeOut(500,function(){
        $("#main").fadeIn(400)
    })
}



//latest releases
var one=$('<div class="product"><img src="'+arr[random1].src+'" width="230" height="220"><p class="buyp">'+arr[random1].name+'</p><p class="buyp">Price:'+arr[random1].price+'</p><button class="buy" onclick="buy(arr['+random1+'].name)">Buy</button></div>')
var two=$('<div class="product"><img src="'+arr[random2].src+'" width="230" height="220"><p class="buyp">'+arr[random2].name+'</p><p class="buyp">Price:'+arr[random2].price+'</p><button class="buy" onclick="buy(arr['+random3+'].name)">Buy</button></div>')
var three=$('<div class="product"><img src="'+arr[random3].src+'" width="230" height="220"><p class="buyp">'+arr[random3].name+'</p><p class="buyp">Price:'+arr[random3].price+'</p><button class="buy" onclick="buy(arr['+random3+'].name)">Buy</button></div>')
$("#latest").append(one)
$("#latest").append(two)
$("#latest").append(three)
