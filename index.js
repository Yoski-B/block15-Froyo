console.log("Welcome!");

const orderPrompt =
  "Please enter a list of flavors ordered separated by commas and no spaces";
let order = prompt(orderPrompt);
 
function splitOrder (order){
  const arr =order.split(",");
  const myOrder={};
}

function getStats (myOrder, arr){
  const item= arr[i];
  for (let i=0; i< arr.length < i++;){
    if (myOrder[item]=== undefined){
      myOrder[item]= 0;
    }else {
      myOrder[item]++;
    }
  }
  return myOrder;
}
console.table (getStats(order))