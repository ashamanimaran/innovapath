define(['products','credits'],function(products,credits){
     console.log("Function : purchaseProduct");
    return{
      purchaseProduct:function(){
  var c = credits.getCredits();
  if(c > 0){
    products.reserveProduct();
    return true;
  }
  return false;
}  
    }
    
})
