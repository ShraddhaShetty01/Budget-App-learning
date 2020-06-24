// Module -1
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

        var Income = function(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        };

        var data = {
            allItems: {
                exp: [],
                inc: []
            },
            totals: {
                exp: 0,
                inc: 0
            }
        };

    

})(); //IIFE

// Module -2 

var UIController = (function(){



    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    }
    return {
        getInput : function(){
            return {
              type : document.querySelector(DOMStrings.inputType).value, // will be inc or exp
              description : document.querySelector(DOMStrings.inputDescription).value,
              value : document.querySelector(DOMStrings.inputValue).value,

            }; 
        },
        
        // exposing the method DOMStrings 
        getDOMStrings : function() {
            return DOMStrings;
        }

    };

})();

// Module -3 - Global app controller
// This controller connects the mod-1 & 2
var Controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function() {

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem); // callback is not needed
     
        // enter key on the keyborad or any key 
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13){  // event.which is for older browser
                ctrlAddItem(); 
            }
        });
    };

    var DOM = UICtrl.getDOMStrings();

        var ctrlAddItem = function() {

            // To-do
       // 1. get the field input data 

             var input = UICtrl.getInput();
            //  console.log(input);

       //2. Add the item to the budget controller 



       // 3. Add the item to the UI



       // 4. calculate the budget 


       //5. display the budget on the UI

       
    
        } 

        // public initialization 

        return {
            init : function() {
                console.log('Application has started');
                setupEventListeners();
            }
        }

   

  
        // you can find the keycode number in console when pressing ENTER.

            // TO AVOUD DRY - Function Ctrladditem is created
         
    // });

})(budgetController,UIController);

// Separation of Concern - Budgetcontroller and UI controllers

Controller.init();