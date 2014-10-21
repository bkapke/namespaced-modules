//Create the namespaces
var MyKitchenHelpers = {
    CoffeeBot : {},
    SteakBot : {}
};

//This can be shared by both Steak and Coffeee
function MyStore() {
    this.Buy = function(price, pounds) {
        console.log("Spending : $" + (price * pounds));
    };
}

// The coffee module
(function(Store /* Import The Store and shorten the name */) {
    
    // Create the coffee bot constructor
    var CoffeeBot = function() {};
    
    // Buy the coffee from the Store
    CoffeeBot.prototype.Buy = function(price, pounds) {
        var store = new Store(); // Call the imported global store.Buy method
        store.Buy(price, pounds);
    };
    
    CoffeeBot.prototype.Roast = function() {
        console.log("Roasting");
    };
    
    CoffeeBot.prototype.Grind = function() {
        console.log("Grinding");        
    };
    
    CoffeeBot.prototype.Brew = function() {
        console.log("Brewing");
    };
    

    
    //Store the coffe bot in its name space not instanciated yet
    MyKitchenHelpers.CoffeeBot = CoffeeBot;
    
})(MyStore);


// The Steak Module
(function(Store  /* Import The Store and shorten the name */) {
    var SteakBot = function() {
          
    };

    // Buy the Steak from the Store
    SteakBot.prototype.Buy = function(price, pounds) {
        // Call the imported global store.Buy method
        var store = new Store();
        store.Buy(price, pounds);
    };

    SteakBot.prototype.Cut = function() {
        console.log("Cutting");
    };
    
    SteakBot.prototype.Marinate = function() {
        console.log("Marinating");
    };

    SteakBot.prototype.Grill = function() {
        console.log("Grilling");
    };
    
    MyKitchenHelpers.SteakBot = SteakBot;
    
})(MyStore);

// Run the CoffeeBot
var coffeeBot = new MyKitchenHelpers.CoffeeBot();

coffeeBot.Buy(12, 2);    //Output : Spending : 24
coffeeBot.Roast();       //Output : Roasting
coffeeBot.Grind();       //Output : Grinding
coffeeBot.Brew();        //Output : Brewing


//Run the SteakBot
var steakBot = new MyKitchenHelpers.SteakBot();

steakBot.Buy(18.99, 3);  //Output : Spending : $56.97
steakBot.Cut();          //Output : Cutting
steakBot.Marinate();     //Output : Marinating
steakBot.Grill();        //Output : Grilling






