let btn1= document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("btn clicked");
// }

// document.querySelector("div").onmousemove=(e)=>{
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// }

let body = document.querySelector("body");

btn1.addEventListener("click", (e)=>{
    if(btn1.innerText === "Light")
    { 
        body.style.backgroundColor= "rgb(17,37,37)";
        btn1.innerText= "Dark"
        document.querySelector("div").style.backgroundColor="white"
        document.querySelector("div").style.color="black"
    }

    else
    {
        body.style.backgroundColor="white";
        btn1.innerText= "Light";
        document.querySelector("div").style.backgroundColor="rgb(17,37,37)";
        document.querySelector("div").style.color="white"
    }

})

const handle2 = (e)=>{
    console.log("handler 2")

}
btn1.addEventListener("click",handle2)


btn1.addEventListener("click", (e)=>{
    console.log("handler 3")

})

btn1.addEventListener("click", (e)=>{
    console.log("handler 4")

})


btn1.removeEventListener("click", handle2)