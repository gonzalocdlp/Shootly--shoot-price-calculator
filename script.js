var price=0
var finalprice=0
var hours = document.getElementById("hours");
var output = document.getElementById("demo");
output.innerHTML = hours.value;

function couple(){if (price==0){
        price=220;
        finalprice=price;
                    document.getElementById("price").innerHTML= price;
                    document.getElementById("log").innerHTML ="Great for couples or weddings ";
                    document.getElementById("finalprice").innerHTML= finalprice;
                    document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
else{
    reset()
    couple()
    
}                   
}

function family(){if (price==0){
    price=210;
    finalprice=price;
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="For families or big groups";
                document.getElementById("finalprice").innerHTML= finalprice;
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
else{
reset()
family()

}                   
}

function events(){if (price==0){
    price=170;
    finalprice=price;
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="Large events candid photography. Excludes weddings";
                document.getElementById("finalprice").innerHTML= finalprice;
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
else{
reset()
events()

} 


}


function food(){if (price==0){
    price=180;
    finalprice=price;
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="Food photography for restaurants or food trucks";
                document.getElementById("finalprice").innerHTML= finalprice;
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
else{
reset()
food()

}                   
}

function social(){if (price==0){
    price=190;
    finalprice=price;
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="Personal social media or online dating shoot";
                document.getElementById("finalprice").innerHTML= finalprice;
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
else{
reset()
social()

}                   
}

function studio(){if (price==0){
    price=250;
    finalprice=price;
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="For fashion or corpoate brands";
                document.getElementById("finalprice").innerHTML= finalprice;
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
else{
reset()
studio()
}                   
}

function reset(){
    price=0;
    finalprice=price;
    document.getElementById("price").innerHTML= price;
    document.getElementById("finalprice").innerHTML= finalprice;
}

hours.oninput = function() {
    output.innerHTML = price*(price.value*0.2)
    finalprice=price + output;
    document.getElementById("price").innerHTML= price;
    document.getElementById("finalprice").innerHTML= finalprice;
  }


  function locationchange() {
    var sel = Number(document.getElementById("location").value);
    
    finalprice=price +sel;
    document.getElementById("price").innerHTML= price;
    document.getElementById("finalprice").innerHTML= finalprice;
  }


  function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}







    //                 if (money>stockCost1){
    // }
    // else{
    //     document.getElementById("log").innerHTML ="You need more money to buy stock";
    // }