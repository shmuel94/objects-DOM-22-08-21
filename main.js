// 1.
// var arrayOfTasks = [
//     {name: "homework", isCompleted: true},
//     {name: "clean the room", isCompleted: false},
//     {name: "buying groceries", isCompleted: true},
//     {name: "a walk with the dog", isCompleted: false},
//     {name: "visit a family", isCompleted: true},
// ];

// 1.a + 1.f
// var par = document.getElementById("itsdiv");
// for(let i =0; i < arrayOfTasks.length; i++){
//     myDiv = document.getElementById("myDiv");
//     myDiv.innerHTML += `<div id="myDiv${i}"><h1>${arrayOfTasks[i].name}</h1> <br><h2>${arrayOfTasks[i].isCompleted}</h2><br></div>`;
//     if(arrayOfTasks[i].isCompleted){
//         document.getElementById(`myDiv${i}`).style = "background-color: red";
//     }
//     else{
//         document.getElementById(`myDiv${i}`).style = "background-color: blue";
//     }
// };

// 1.b
// var button = document.getElementById("btn");
// var newInput = document.getElementById("anot");
// button.addEventListener("click", function(){
// var newobject = {name: newInput.value, isCompleted: false};
// console.log(newobject = {name: newInput.value, isCompleted: false});
// arrayOfTasks.push(newobject);  // 1.c
// console.log(arrayOfTasks); //1.c
// par.innerHTML += `<h1>${newobject.name}</h1>` //1.d
// par.innerHTML += `<h2>${newobject.isCompleted}</h2>` //1.d
// });

// 1.e
// for(let i =0; i < arrayOfTasks.length; i++){
//     arrayOfTasks[i].id = Math.floor(Math.random()*2000+1) ;
//     console.log(arrayOfTasks);
// };

// 2.
// var arrayOfMoies = [
//     {name:"Fast and Furious 9", img:"https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg", cast:["Vin Diesel", "Michelle Rodriguez", "Jordana Brewster", "Tyrese Gibson"]},
//     {name:"Avengers: Endgame", img:"https://i.pinimg.com/originals/7b/3d/79/7b3d7904ad40f0b25d2731c0b8f8e34c.jpg", cast:["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]},
// ];
// let par = document.getElementById("itdiv");
// for(let i = 0; i < arrayOfMoies.length; i++){
//     par.innerHTML+=`<h1>${arrayOfMoies[i].name}</h1>`
//     par.innerHTML+=`<img src="${arrayOfMoies[i].img}">`
//     par.innerHTML+=`<h2>${arrayOfMoies[i].cast}</h2>`
// };

// 3.
// var button = document.getElementById("btn1");
// let par = document.getElementById("per");
// var newInput = document.getElementById("add");
// button.addEventListener("click", function(){
//     par.innerHTML+= newInput.value;
// });

// 4.
// var input1 = document.getElementById("add1");
// var input2 = document.getElementById("add2");
// var button = document.getElementById("btn2");
// let par = document.getElementById("per1");
// button.addEventListener("click", function(){
//     var newobject = {firstInput: input1.value, secInput: input2.value};
//     par.innerHTML+= `<h3>${newobject.firstInput}</h3>`
//     par.innerHTML+= `<h3>${newobject.secInput}</h3>`
// });

// 5.
// var input1 = document.getElementById("fn");
// var input2 = document.getElementById("em");
// var input3 = document.getElementById("age");
// var button = document.getElementById("btn3");
// let par = document.getElementById("per2");
// button.addEventListener("click", function(){
//     var newobject = {firsName: input1.value, email: input2.value, age: input3.value};
//     par.innerHTML+=`<h3>${newobject.firsName}</h3>`
//     par.innerHTML+=`<h3>${newobject.email}</h3>`
//     par.innerHTML+=`<h3>${newobject.age}</h3>`
// });

// 6.
// var input1 = document.getElementById("fin");
// var input2 = document.getElementById("ln");
// var button = document.getElementById("btn4");
// let par = document.getElementById("per3");
// button.addEventListener("click", function(){
//     var newobject = {firsName: input1.value, lastName: input2.value};
//     console.log(newobject);
// });

// 7.
// var par = document.getElementById("per4");
// var button = document.getElementById("btn5");
// button.addEventListener("click", function(){
//     for(let i = 0; i < 10; i++){
//         par.innerHTML+= `<p>${i}</p>`
//     };
// });

// 8.
// var arrayOfEmail = ["shmuelmoche@gmail.com", "ezradasa@gmail.com", "haimarka@gmail.com", "nadavzaro@gmail.com"];
// var input1 = document.getElementById("email");
// var button1 = document.getElementById("btn6");
// var par = document.getElementById("per5");
// button1.addEventListener("click", function(){
//     for(let i = 0; i < arrayOfEmail.length; i++){
//         if(String(input1.value) == arrayOfEmail[i]){
//         par.innerHTML+= ` email alredy here`;
//         return;
//         }
// }
// par.innerHTML+= `<p> email not here</p>`;
// });

// 9.
// var input1 = document.getElementById("string");
// var button1 = document.getElementById("btn7");
// var par1 = document.getElementById("per6");
// button1.addEventListener("click", function(){
//     par1.innerHTML+= `${input1.value}`;
//     par1.innerHTML+= `${input1.value.length}`
// });

10.
var input1 = document.getElementById("fullName");
var input2 = document.getElementById("country");
var input3 = document.getElementById("Flag");
var input4 = document.getElementById("Age");
var button = document.getElementById("btn8");
let par = document.getElementById("per7");
button.addEventListener("click", function(){
    var newobject = {fullName: input1.value, countryOfOrigin: input2.value, flagOfCountry: input3.value, age: input4.value};
    par.innerHTML+=`<h3>${newobject.fullName}</h3>`
    par.innerHTML+=`<h3>${newobject.countryOfOrigin}</h3>`
    par.innerHTML+=`<img src="${newobject.flagOfCountry}">`
    par.innerHTML+=`<h3>${newobject.age}</h3>`
});