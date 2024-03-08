// const heading = document.getElementById("heading"); // return object
// console.log(heading);
// const heading1 = document.getElementsByClassName("heading1"); // return HTMLCollection
// console.log(heading1);
// console.log(heading.getAttribute("id"));

// let para = document.getElementsByTagName("p"); // return HTMLCollection
// console.log(para);

// let element = document.querySelector("p"); // return matching first element
// console.log(element);


// let elements = document.querySelectorAll("p"); // return matching al element
// console.log(elements);

// let classby = document.querySelectorAll(".heading1"); // return matching al element
// console.log(classby);

// let task1 = document.querySelector("h2");
// console.log(task1)
// task1.innerText = task1.innerText + " form Apna College."

let btn = document.createElement("button");
btn.innerText = "click me!";
btn.style.backgroundColor="red";
btn.style.color="white";

console.log(btn);

let body = document.querySelector("body");
body.prepend(btn);
// div.prepend(btn);
// div.before(btn);
// div.after(btn);
// btn.remove();    


let para = document.querySelector("p");

para.classList.add("para1");