let a = "text";
let b = 'text';
let c = `text
text
text
text
`;


let a2 = a + "aaaaa";
let b2 = b + 'bbbbb';
let c2 = `${c}ccccc`;

let container1 = document.getElementById("container1");
container1.innerHTML +=`
${a2} <br />
${b2} <br />
${c2} <br />
${c2[0]} <br />
${c2.charAt(0)} <br />
${c2.length} <br />
`;

for(let i = 0; i<c2.length; i++){
    container1.innerHTML +=`${c2[i]} <br>`;
}

let int = parseInt("12");
let float = parseFloat("12.45");

container1.innerHTML +=`int=${int} <br>
float=${float} <br>
`;

let str = "aaa bbb ccc";
let strArr = str.split(" ");
let strArr2 = str.split(" ");

console.log(strArr);
console.log(strArr2);

let str2 = strArr.join("");
let str3 = strArr.join(" | ");

console.log(str2);
console.log(str3);

let numStr = 12 + "";

let bbb = str.slice(4, 7);
let aaa = str.substring(3, 0);
let ccc = str.substr(8, 3);

container1.innerHTML +=`
bbb=${bbb} <br>
aaa=${aaa} <br>
ccc=${ccc} <br>
`;

let repeatA = aaa.repeat(5);
container1.innerHTML +=`${repeatA} <br>`;

let indexOfA = repeatA.indexOf("a");
let indexOfB = repeatA.indexOf("bbb");
container1.innerHTML +=`${indexOfA} <br>`;
container1.innerHTML +=`${indexOfB} <br>`;

let modalString = prompt("Input string", "text");
console.log(modalString);