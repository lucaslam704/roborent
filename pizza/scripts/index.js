// response = prompt("Number of people?")
response = "dfdsfdsf"
console.log(response)
//var numberOfPizzas = response*2/12;
let numberOfPizzas = response*2/12;
// whereever you see VAR, use 'let' prefix unless it
// is a CONSTANT, in that case, use 'const' prefix


const COST_OF_ONE_PIZZA = 18.75
let costOfPizza = numberOfPizzas * COST_OF_ONE_PIZZA;

if(costOfPizza >= 2) {
    //then we apply a 10% discount to cost of pizza
    costOfPizza = costOfPizza - (costOfPizza *.1)
}

// display the total cost of pizza
console.log(`Total cost is: ${costOfPizza}`);

// alert(`Total cost is: ${costOfPizza}`);

let el = document.getElementById("one");
console.log(el);
el.value = "Today is Friday"

