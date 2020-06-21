// Module -1
var budgetController = (function() {

    

})(); //IIFE

// Module -2 

var UIController = (function(){

    //

})();

// Module -3 - Global app controller
// This controller connects the mod-1 & 2
var Controller = (function(budgetCtrl, UICtrl){



    document.addEventListener('keypress', function(event){
       

        var ctrlAddItem = function() {

            // To-do
       // 1. get the field input data 



       //2. Add the item to the budget controller 



       // 3. Add the item to the UI



       // 4. calculate the budget 


       //5. display the budget on the UI

       console.log('IT WORKS');
    
        }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem); // callback is not needed
     
    // enter key on the keyborad or any key 

        // you can find the keycode number in console when pressing ENTER.

            // TO AVOUD DRY - Function Ctrladditem is created

        if(event.keyCode === 13 || event.which === 13){  // event.which is for older browser
            ctrlAddItem();   
        }
    });

})(budgetController,UIController);

// Separation of Concern - Budgetcontroller and UI controllers