
let x = 10;
let y = 20;

const funcaoAddNumbers = (x , y) => {
    result = x + y;
    console.log(result)
};

funcaoAddNumbers(x, y)

//---------------------------------

let a = 10;
let b = "100";

if(a === "praia") {
    console.log("true")
} else {
    console.log("false")
}


switch(a) {

    case 10:
        console.log(true);
        break;
    case "10":
        console.log("false")
        break
    case "20":
        console.log(false)
        break;
    case "40":
        console.log(false)
        break;
        default:
            console.log("default")
            
}

// Ponto e virgula em Javascript === indentação no Python



// let t = 0;

// const incrementNumberWithRefresh = () => {
//   if (t <= 0) {
//     console.clear();
//     console.log(t);
//     t += 1;
//     setTimeout(incrementNumberWithRefresh, 1000);
//   }
// };

// // Start the counter after 1 second
// setTimeout(incrementNumberWithRefresh, 100);


let arr =["praia", "cidade", "cenas", "coisas", false, true, 90000000];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach((element, i) => {
    console.log(element);
    console.log(i)
});


let obj = {

    name: "bruno",
    age: 46,
    gender: "male",

}

for (const key in object) {
console.log(obj[key])
}

