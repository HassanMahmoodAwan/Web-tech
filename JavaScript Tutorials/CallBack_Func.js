console.clear();

console.log(`your order is placed`);

let ordr = 'pizza';


// callback is you said to customer that you will call him when the pizza is ready. so you are dependent on callback.


function orderPreparation(order, callback){
    console.log("order is preparing");
    setTimeout(function (){
        // working on the pizza
        callback(`${order}`);
    } , 10000);
    return "your pizza is deliverd";
};

    function handlePizza(order){
        console.log(`${order} is ready`);
        
    };
 

console.log(`${orderPreparation("pizza", handlePizza)}`);









