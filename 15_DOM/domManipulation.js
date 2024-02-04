console.log("Hello world")

document.body.firstElementChild 
document.body.firstElementChild.childNodes 
document.body.firstElementChild.children

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"

document.getElementById("redbox").style.backgroundColor = "red"

document.querySelector(".box").style.backgroundColor = "green";

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((e) => {
    e.style.backgroundColor = "green";
}); 

//creating or deleting elements
let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by harry</b>"
div.setAttribute("class", "created");
document.querySelector(".container").before(div);
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin", "<b> I am under the water. Please h elp me here too much raining.... iuuuuooooo</b>")