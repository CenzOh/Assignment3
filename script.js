//1 select container id w/o querySelector

const a = document.getElementById('container');
console.log(a); //console log the elements


//2 select container id w/ queryselector

const b = document.querySelector('#container')
console.log(b) //we don't want to get the node list and "#will.will:first-child" only returns first element. # gets id


//3 select all items with a class of 'second'

const c = document.querySelectorAll('.second')
c.forEach(element => console.log(element)) //they want the elements not the node list!


//4 select a list item with a class of 'third', only the list item INSIDE of the 'ol' tag

const d = document.querySelector('ol .third ') //. operator is used for the class, the tag goes first. Parent gets selected first then child
console.log(d)


//5 give the selection with an id of 'container' the text "hello!"

const e = document.getElementById("container")
e.append("hello!")
console.log(e)

// const e = document.querySelector('#container') //similar to #2 di dnot work
// console.log(e)
// e.innerText += "hello!"; //get the title of the form use .innerText. This was from the notes page 34
//console.log(e)


//6 Add the class 'main' to the div with a class of footer

let f = document.getElementsByClassName("footer")[0] //we are adding the class 'main' to div class = 'footer' class. 
f.classList.add("main"); 

console.log(f)


//7 Remove the class main on the div with a class of footer

f.classList.remove('main') //after this statement console log says "footer"


//8 create a new 'li' element

const newLi = document.createElement('li') //call it li
console.log(newLi)


//9 give the li the text "four"

let h = newLi.innerText = ("four") //li is not defined, use variable
//h = document.createTextNode("four") another solu
console.log(h)


//10 Append the li to the ul element

const newUl = document.querySelector('ul')
newUl.appendChild(newLi)
console.log(newUl)


//12 Loop over all of the lis inside the ol tag and give them a background color of "green"

let index = document.querySelectorAll("ol li") //loop use for loop
    for(let i = 0; i < index.length; i++){
        index[i].style.backgroundColor = "green"
    }


//13 Remove the div with a class of footer
let k = document.querySelector(".footer")
k.remove();
