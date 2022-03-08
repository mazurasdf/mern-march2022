var hey = "hey it's me!";

function doThing(){
    //var hello;
    // console.log(hello);
    // var hello = "hello!";
    // console.log(hey);
    for(var i = 0; i < 100; i++){}
    console.log(i);
}

// doThing();
// console.log(hello);

const firstName = "Mike";
// firstName = "George";

const faveFlavors = [
    "Pistachio",
    "Cookie dough",
    "Oreo",
    "Chocolate"
];

const sundae = {
    flavor:"vanilla",
    sauce:"hot fudge",
    toppings: ["pecans", "rainbow spranks", "chocolate chips", "whipped cream"]
}

// console.log(faveFlavors);
// faveFlavors[0] = "caramel sea salt";
// console.log(faveFlavors);

//DESTRUCTURING

// const [banana,, other] = faveFlavors;
// console.log(banana);

// const {toppings} = sundae;
// toppings[0] = "peanuts";
// console.log(toppings);
// console.log(sundae);

//REST and SPREAD
// const [bestFlavor,, ...others] = faveFlavors;
// console.log(others);
// console.log(faveFlavors);

// const newList = ["hot cheeto", ...faveFlavors, "vanilla"];
// console.log(newList);

// const {flavor, ...fixings} = sundae;

// const superChocolatey = {
//     flavor: "chocolate",
//     ...fixings
// }
// console.log(superChocolatey);

//ARROW FUNCTIONS
// console.log(doThing);
// const otherFunc = doThing;
// otherFunc();

function runThing(func){
    func();
}

// runThing(7);

// runThing(()=>{
//     var heyThere = "hey there!";
//     for(var i = 0; i < 5; i++){
//         console.log(heyThere);
//     }
// });

const countVeryHigh = () => {
    for(var i = 0; i < 1000000; i++){}
    console.log(i);
}

countVeryHigh();