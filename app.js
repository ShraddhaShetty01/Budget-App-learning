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

        return {
            addItem : function(type, des, val) {

                var newItem , ID;

                //[1,2,3,4,5], next ID = 6
                //[1,2,4,6,8], next ID = 9
                // ID = last ID + 1

                // create ID 
                if( data.allItems[type].length > 0) {
                    ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                } else {
                    ID = 0 ;
                }
               

            // Create a new item based on 'inc' or 'exp'
                ID = 0;
                if(type === 'exp'){
                    newItem = new Expense(ID,des,val);
                } else if (type === 'inc'){
                    newItem = new Income(ID,des,val);
                }
                
                // push it into  our data structure 
                data.allItems[type].push(newItem);

                // return the new element
                return newItem;
            },

            testing : function() {
                console.log(data) // data structure

            }
        };

    

})(); //IIFE

// Module -2 

var UIController = (function(){



    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
        incomeContainer : '.income__list',
        expensesContainer : '.expenses__list'

    }
    return {
        getInput : function(){
            return {
              type : document.querySelector(DOMStrings.inputType).value, // will be inc or exp
              description : document.querySelector(DOMStrings.inputDescription).value,
              value : document.querySelector(DOMStrings.inputValue).value,

            }; 
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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

             newItem = budgetCtrl.addItem(input.type, input.description, input.value);

       // 3. Add the item to the UI

                 UICtrl.addListItem(newItem, input.type);
       // 4. calculate the budget 


       //5. display the budget on the UI

       
    
        } ;

        // public initialization 

        return {
            init : function() {
                console.log('Application has started');
                setupEventListeners();
            }
        };

   

  
        // you can find the keycode number in console when pressing ENTER.

            // TO AVOUD DRY - Function Ctrladditem is created
         
    // });

})(budgetController,UIController);

// Separation of Concern - Budgetcontroller and UI controllers

Controller.init();