 document.getElementById('owl').onclick = function(){
    alert("owl clicked")
}
attachEvent()

//Topics to cover
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


document.getElementById('images').addEventListener('click', function(e){
    console.log("clicked inside the ul");
}, false)

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation();                         //stop bubbling
}, false)

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();                          //prevent default behaviour of elements
    e.stopPropagation();                  
    console.log("google clicked");
}, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);                //target is the element that triggered the event
    if (e.target.tagName === 'IMG') {             //check if the target is an image
        console.log(e.target.id);                 //get the id of the image
        let removeIt = e.target.parentNode        //get the parent of the image
        removeIt.remove()                         //remove the parent
    }
}, false)