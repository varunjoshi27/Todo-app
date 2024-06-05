let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    if(item.innerText==""){
        alert("Please Enter the task");
    }
    else{
        ul.appendChild(item)
    }
    // ul.appendChild(item);
    input.value="";
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
});
ul.addEventListener("click",function(event){

    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
    // console.log(event.target);
    console.log("button clicked");
});


