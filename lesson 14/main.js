let str1 = "text 'text' ";
let str2 = 'text "text" ';
let str3 = str1 + str2;
let str4 = `text
${ str1 }
${1}
${true}
text
`;
let container = document.getElementById("container");
container.innerHTML = str1;
container.innerHTML += "<br/>" + str2;
container.innerHTML += "<br/>" + str4;

// alert(str4);
// console.log(str4);
// console.log(str1[0]);

// console.log(str4.length);
// console.log(str4[1]);
// console.log(str4[2]);
// console.log(str4[3]);

// for(let i = 0; i<str4.length; i++){
//     // console.log(str4[i]);
// }

// console.log(str4.charAt(str4.length-1));
// console.log(str4[str4.length-1]);

// let str5 = "1234_123124_4356";
// let arr = str5.split("_");
// console.log(arr);

// let arr2 = str5.split("");
// console.log(arr2);
// console.log(str5.indexOf("_"));
// console.log(str5.indexOf("_5"));

// let str6 = str5.slice(0, str5.length-4);
// console.log(str6);

// let str7 = str5.substring(4, str5.length);
// console.log(str7);

// let str8 = str5.substring(str5.length, 4);
// console.log(str8);

// let str9 = str5.substr(5, 4);
// console.log(str9);

// let s1 = "abcd";
// let s2 = "bccddd";

// s1[0] == "a";
// s1[1] == "b";
// s1[2] == "c";
// s1[3] == "d";

// let s1Result = "";

// for(let b = 0; b<s1.length; b++){
//     console.log(s1[b]);
//     for(let n = 0; n<b; n++){
//         console.log(s1[b]);
//         // s1Result += s1[b];
//     }
// }

// let s1Result = "";
// for(let b = 0; b<s1.length; b++){
//      s1Result += s1[b].repeat(b);
// }

// console.log(s1Result);

// let date1 = "05-12-2020";
// let dateArrTemp =date1.split("-");
// let result = [];
// for(let i = 0; i<dateArrTemp.length; i++){
//     result[i] = parseInt(dateArrTemp[i]);
// }
// let arrdate = date1.split("-");
// console.log(date1);
// console.log(result);

// let a = "robocodebr@gmail.com";

// let arr = ["robocodebr", "gmail.com"];
// let arr2 = ["robocodebr", "gmail", "com"];

// let aTemp = a.split("@");
// let aTemp2 = [];
// console.log(arr);
// console.log(arr2.join(" "));
// let temp = aTemp[1].split(".");
// let result2 = [aTemp[0], temp[0], temp[1]];

// console.log(result2);

 let a = `JavaScript (JS) — динамічна, об'єктно-орієнтована[4] прототипна мова програмування. Реалізація стандарту ECMAScript. Найчастіше використовується для створення сценаріїв вебсторінок, що надає можливість на боці клієнта (пристрої кінцевого користувача) взаємодіяти з користувачем, керувати браузером, асинхронно обмінюватися даними з сервером, змінювати структуру та зовнішній вигляд вебсторінки.
 JavaScript класифікують як прототипну (підмножина об'єктно-орієнтованої), скриптову мову програмування з динамічною типізацією. Окрім прототипної, JavaScript також частково підтримує інші парадигми програмування (імперативну та частково функціональну) і деякі відповідні архітектурні властивості, зокрема: динамічна та слабка типізація, автоматичне керування пам'яттю, прототипне наслідування, функції як об'єкти першого класу. `;

// // for(let i = 0; i<a.length; i++){
// //     console.log(i);
// // }
 let a1 = a.split(".");
// // console.log(a1);
// console.log(a1.length-1);

container.innerHTML += `<br/> \u{1F601}`;
container.innerHTML += `<br/> \u{1F603}`;
container.innerHTML += `<br/> \u{1F606}`;
container.innerHTML += `<br/> \u{1F609}`;
container.innerHTML += `<br/> \u{1F600}`;

let aaa = ["\u{1F601}", "\u{1F603}", "\u{1F606}", "\u{1F609}", "\u{1F600}"];
console.log(aaa);

for(let i = 0; i<a1.length; i++){
    container.innerHTML += `<br/>`+a1[i]+aaa[i];

}