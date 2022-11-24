let btn = document.querySelector(".send");

btn.addEventListener("click",(e)=>{
   let income = document.querySelector(".income").value ;
   let age = document.querySelector(".age").value;
   let gender = document.querySelector(".gender").value ;
   let marital_status = document.querySelector(".marital_status").value;
   let dependents = document.querySelector(".dependents").value ;

   let food = document.querySelector(".food").value ;
   let medical = document.querySelector(".medical").value;
   let housing = document.querySelector(".housing").value ;
   let transportation = document.querySelector(".transportation").value;
   let charity = document.querySelector(".charity").value ;
   let taxes = document.querySelector(".taxes").value ;
   let gadgets = document.querySelector(".gadgets").value;
   let clothing = document.querySelector(".clothing").value ;
   let emergency = document.querySelector(".emergency").value;
   let savings = document.querySelector(".savings").value ;

   

   let spentAmount = Number(food) + Number(medical) + Number(housing) + Number(transportation) + Number(charity) + Number(taxes) + Number(gadgets) + Number(clothing) + Number(emergency) + Number(savings);

   let info = document.querySelector(".info");


   if(income.length < 1){
    info.style.color = "red";
   info.textContent = "Please enter your income";
   }
   else if(income < spentAmount){
    info.style.color = "red";
    info.textContent = "You are spending a sum of " + spentAmount + " which is greater than your income of " + income;
   }
   else if(income == spentAmount){
    info.style.color = "green";
    info.textContent = "You are spending a sum of " + spentAmount + " which is equal to  your income of " + income;
   }
   else {
    info.style.color = "green";
    info.textContent = "You are spending a sum of " +spentAmount + " which is less than  your income of " + income;
   }


})


