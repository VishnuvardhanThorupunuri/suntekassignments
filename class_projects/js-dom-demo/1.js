//User interaction 
//handling elements
    //read element
    let element=document.querySelector('h1')
    let btn=document.querySelector("button")
    console.log(element.textContent)
    //attach event handler
    btn.addEventListener('click',()=>{
        element.textContent="Hello..."
        element.style.color="red"
        element.style.fontSize='5rem'
    })


    //read all elements of form 
    let form=document.querySelector("form");
    let usernameInput= document.querySelector("#username");
    let passwordElement= document.querySelector("#password");
    let submitButton=document.querySelector(".sb");

    //add form submit event listener to button 
    submitButton.addEventListener("submit",(e)=> {
        //stop auto page reloading

    })



    //read button create-child
    let createChildBtn = document.querySelector(".create-child");
    let parent=document.querySelector("parent")

    createChildBtn