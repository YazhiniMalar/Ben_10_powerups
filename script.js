let button = document.getElementById("btn");
let score=0;
let text = document.querySelectorAll("h1")[1];
let alterText = "";
let input = document.getElementById("input");

const test = () =>{
    let res = Math.random();
        res=Math.floor((res*100)+1);
        return res;
    }


button.addEventListener("click", function given(){
    if(input.value.length>0){
    score = test();
    alterText= text.textContent = "You are a "+score+"% resemblance of the chosen Alien🔥. Don't forget to explore your Ultimate Powers!!";
    score=0;
    return alterText;
    }
});

// input.addEventListener("keypress", function give(event){
//     if(input.value.length>0 &&   event.keyCode===13){
//     score = test();
//     alterText= text.textContent = "You are a "+score+"% resemblance of the chosen Alien🔥. Don't forget to explore your Ultimate Powers!!";
//     score=0;
//     return alterText;
// }});