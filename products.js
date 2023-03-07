/*                  GOLD                  */
// bracelets of gold 

var bracelets1={
    name:"zaffir",
    src:"Pictures/Gold/bracelets/bracelets1.jpg",
    price:800
}

 var bracelets2={
   name:"zaffir2",
    src:"Pictures/Gold/bracelets/bracelets2.jpg",
    price:500
 }
 var bracelets3 ={
   name:"zaffir3",
    src:"Pictures/Gold/bracelets/bracelets3.jpg",
    price:1000
 }
 var bracelets4={
   name:"zaffir4",
    src:"Pictures/Gold/bracelets/bracelets4.jpg",
    price:700
 }
 var bracelets5={
   name:"zaffir5",
    src:"Pictures/Gold/bracelets/bracelets5.jpg",
    price:4500
 }

 // earing of Gold

 var earrings={
   name:"caramel",
    src:"Pictures/Gold/earrings/1.jpg",
    price:500
 }
 // necklace of Gold
var necklace1={
   name:"kwizz1",
    src:"Pictures/Gold/necklace/2.jpg",
    price:1800
}
var necklace2={
   name:"kwizz2",
    src:"Pictures/Gold/necklace/3.jpg",
    price:2000
}
 //rings of Gold

var rings2={
   name:"jombon2",
    src:"Pictures/Gold/rings/2.jpg",
    price:500
}
 var rings3={
   name:"jombon3",
    src:"Pictures/Gold/rings/3.jpg",
    price:600
 }
 var rings4={
   name:"jombon4",
    src:"Pictures/Gold/rings/4.jpg",
    price:500
 }
 var rings5={
   name:"jombon5",
    src:"Pictures/Gold/rings/5.jpg",
    price:400
 }
 /*                                 Silver                                    */
 // bracelets of Silver

 var brace2={
   name:"slow2",
    src:"Pictures/Silver/braceSilver/2.jpg",
    price:50
 }
 var brace3={
   name:"slow3",
    src:"Pictures/Silver/braceSilver/3.jpg",
    price:80
 }
 var brace4={
   name:"slow4",
    src:"Pictures/Silver/braceSilver/4.jpg",
    price:40
 }

 var brace5={
   name:"slow5",
    src:"Pictures/Silver/braceSilver/5.jpg",
    price:40
 }

 var brace6={
   name:"slow6",
    src:"Pictures/Silver/braceSilver/6.jpg",
    price:40
 }

 var brace7={
   name:"slow7",
    src:"Pictures/Silver/braceSilver/7.jpg",
    price:80
 }
 var brace8={
   name:"slow8",
    src:"Pictures/Silver/braceSilver/8.jpg",
    price:80
 }

 var brace9={
   name:"slow9",
    src:"Pictures/Silver/braceSilver/9.jpg",
    price:120
 }
 // necklaces of Silver
 var necklaces1={
   name:"angry1",
    src:"Pictures/Silver/necklaces/1.jpg",
    price:80
 }
 var necklaces2={
   name:"angry2",
    src:"Pictures/Silver/necklaces/2.jpg",
    price:80
 }
 var necklaces3={
   name:"angry3",
    src:"Pictures/Silver/necklaces/3.jpg",
    price:80
 }
 var necklaces4={
   name:"angry4",
    src:"Pictures/Silver/necklaces/4.jpg",
    price:50
 }
 var necklaces5={
    name:"angry5",
    src:"Pictures/Silver/necklaces/5.jpg",
    price:110
 }
 var necklaces6={
   name:"angry6",
    src:"Pictures/Silver/necklaces/6.jpg",
    price:70
 }
 var necklaces7={
   name:"angry7",
    src:"Pictures/Silver/necklaces/7.jpg",
    price:70
 }
 var necklaces8={
   name:"angry8",
    src:"Pictures/Silver/necklaces/8.jpg",
    price:80
 }
 var necklaces9={
   name:"angry9",
    src:"Pictures/Silver/necklaces/9.jpg",
    price:40
 }
  // rings of Silver 
  var ring1={
   name:"not angry1",
    src:"Pictures/Silver/ringsSilver/1.jpg",
    price:45
  }
  var ring2={
   name:"not angry2",
    src:"Pictures/Silver/ringsSilver/2.jpg",
    price:45
  }
  var ring3={
   name:"not angry3",
    src:"Pictures/Silver/ringsSilver/3.jpg",
    price:45
  }

  // we declare an array that contains all the objects 
var arr=[ bracelets1, bracelets2, bracelets3 ,bracelets4, bracelets5,earrings, necklace1, necklace2,rings2,rings3,rings4,rings5,brace2,brace3,brace4,brace6,brace7,brace8,brace9,necklaces1,necklaces2,necklaces3,necklaces4,necklaces5,necklaces6,necklaces7,necklaces8,necklaces9,ring1,ring2,ring3]
var balance=0
var cart=[]
var loggedIn=false

function buy(item){         // buy function for proccessing orders and adding items to the cart if the user has enough funds
   if(loggedIn===false){
      alert("please log in")
   }
   else{
      for(var i=0 ; i<arr.length ; i++){
         if(arr[i].name===item){
            if(balance-arr[i].price>=0){
               balance-=arr[i].price
               cart.push(arr[i])
               alert("Item added to cart.")
               break
            }
            else{
               alert("not enough funds.")
            }
         }
      }
   }
}

/* randomizing items to show in latest releases in the main page*/
var random1=Math.floor(Math.random()* (arr.length-1))
var random2=Math.floor(Math.random()* (arr.length-1))
var random3=Math.floor(Math.random()* (arr.length-1))






