console.clear();



console.log(`${orderPreparation("pizza")}`);
console.log(`order is eaten`);


function orderPreparation(order){

    console.log(`your order is ${order}`);
   // As order takes time to be prepare.
   console.log(`${order} is in Process`);
   setTimeout(function(){
    console.log(`${order} is in Process`);
    return `${order} is ready`;  // this not exceuted as request goes forward and it is ignore. to solve it we have solutions like (CALLBACKS), (Promises), (Async await).
   }, 1000) ;
    return `your ${order} is deliverd`;
};




