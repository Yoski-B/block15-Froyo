console.log("Welcome!");


/*const orderPrompt= 
  "Please enter a list of flavors ordered separated by commas and no spaces";
let order = prompt(orderPrompt);
console.log (order) */
const orderPrompt= prompt(
  "Please enter a list of flavors ordered separated by commas and no spaces",
);

const strArr= orderPrompt.split(",");
strArr.push(strArr);
console.log(strArr)

/* const splitOrder= ((order)=> {
  const flavors= 
  const arr =order.split(",");
  return arr;
},{})
console.log (arr);*/

/*function getStats (myOrder, strArr){
  const item= strArr[i];
  for (let i=0; i< strArr.length < i++;){
    if (myOrder[item]=== undefined){
      myOrder[item]= 0;
    }else {
      myOrder[item]++;
    }
  }
  return myOrder; */


const stats= strArr.reduce ((acc, curr) =>{
  if(acc[curr]=== undefined){
      acc[curr]=0
  }
  acc[curr]++
  return acc
},{})
console.table (stats)


