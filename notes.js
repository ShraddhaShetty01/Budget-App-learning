// Module -1
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest : function(b) {
          return add(b);
        }
     
    }

})(); //IIFE

// Module -2 

var UIController = (function(){

   //

})();

// Module -3 
// This controller connects the mod-1 & 2
var Controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }


})(budgetController,UIController);

// Separation of Concern - Budgetcontroller and UI controllers