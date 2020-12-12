//1
// let a = prompt("Hello World");
// let a2 = (a+",").repeat(3);
// a2 = a2.substr(0, a2.length-1);
// container1.innerHTML += `
// ${a2} <br>
// ${a2.length} <br />
// `;


//2
// let a = prompt("Hello JS");
// let a2 = a.charAt(0);
// let a3 = a.charAt(a.length-1);
// let a4 = a.charAt(Math.floor(a.length/2));
// container1.innerHTML += `
// ${a2} <br> 
// ${a3} <br> 
// ${a4} <br> 
// `;


//4
// let a = "abcd";
// let result = "";
// for(let i = 0; i<a.length; i++){
//     result += i*2+a[i]
// }
// container1.innerHTML += `
// ${result} <br> 
// `;


//5
// let a = "abcacba";
// let a2 = a[a.length-1];
// for(let i = 0; i < a.length; i++){
//     if(a[i] == a2){
//         container1.innerHTML += `
//         ${i} <br> `;
//     }
// }

//6
let b = "cbaabc";
for(let i = 0; i < b.length; i+=3){
    
    container1.innerHTML += `
    ${b[i]} <br> `;
}