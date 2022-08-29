social()





function couple(){
        price=220;
        finalPrice();
                    document.getElementById("price").innerHTML= price;
                    document.getElementById("log").innerHTML ="Great for couples or weddings ";
                    document.getElementById("finalprice").innerHTML= finalprice;
                    document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
                  
}

function family(){if (price==0){
    price=210;
    finalPrice();
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
    finalPrice();
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
    finalPrice();
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

function social(){
    price=190;
    finalPrice();
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="Personal social media or online dating shoot";
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
function studio(){
    price=250;
    finalPrice();
                document.getElementById("price").innerHTML= price;
                document.getElementById("log").innerHTML ="For fashion or corpoate brands";
                document.getElementById("typeofshoot").innerHTML ="Couples/Wedding";
} 
                 


function reset(){
    price=0;
    finalPrice();
    document.getElementById("price").innerHTML= price;
    document.getElementById("finalprice").innerHTML= finalprice;
}

function hourChange() {
    
    
    
    var hours = document.getElementById("hoursin").value;
    if (hours==1){
      var hoursAmount="30 minutes"
    }
    else if(hours==2){
      var hoursAmount= hours-1 +" hour"
    }
    else {
      var hoursAmount= hours-1 +" hours"
    }
    document.getElementById("outputHours").innerHTML = hoursAmount;
    finalPrice()
    
    
  }


  function locationchange() {
    var sel = Number(document.getElementById("location").value);
    
    finalPrice();
    
    
  }



  function finalPrice(){
    var hours = document.getElementById("hoursin").value;
    var sel = Number(document.getElementById("location").value);
    output = Math.round(price*((hours-1)*0.4));
    finalprice=price+sel+ output;
    document.getElementById("price").innerHTML= price;
    document.getElementById("priceHours").innerHTML = output;  
    document.getElementById("locationPrice").innerHTML= sel;
    document.getElementById("finalprice").innerHTML= finalprice;
    document.getElementById("finalprice2").innerHTML= finalprice;
    
  }






    //                 if (money>stockCost1){
    // }
    // else{
    //     document.getElementById("log").innerHTML ="You need more money to buy stock";
    // }