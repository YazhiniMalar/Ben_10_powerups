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
    alterText= text.textContent = "You are a "+score+"% resemblance of the chosen Alien🔥. Don't forget to explore your Ultimate Powers "+input.value+ "!!";
    score=0;
    return alterText;
    }
    else{
        alert("Please enter a valid name!");
    }
});

const n=document.querySelectorAll(".card-img-top").length;

for( let i=0;i<n;i++){
    document.querySelectorAll(".card-img-top")[i].addEventListener("click", 
    function callImage(){
        let alienName = document.querySelectorAll(".card-title")[i].textContent;
        
        switch(alienName){
            case "Ghostfreak":
                let gfAudio = new Audio("audio/ghostfreak.m4a");
                gfAudio.play();
                break;
            case "Cannonbolt":
                let cbAudio = new Audio("/audio/canonbolt.m4a");
                cbAudio.play();
                break;
            case "Wildvine":
                let wAudio = new Audio("./audio/wildvine.m4a");
                wAudio.play();
                break;
            case "Upgrade":
                let upAudio = new Audio("./audio/upgrade.m4a");
                upAudio.play();
                break;
            case "Heatblast":
                let hbAudio = new Audio("./audio/hb.m4a");
                hbAudio.play();
                break;
            case "Wildmutt":
                let wmAudio = new Audio("./audio/wildmutt.m4a");
                wmAudio.play();
                break;
            case "Diamondhead":
                let dhAudio = new Audio("./audio/diamond head.m4a");
                dhAudio.play();
                break;
            case "XLR8":
                let xAudio = new Audio("./audio/xlr8.m4a");
                xAudio.play();
                break;
            case "Grey Matter":
                let gmAudio = new Audio("./audio/grey matter.m4a");
                gmAudio.play();
                break;
            case "Four Arms":
                let faAudio = new Audio("./audio/4arms.m4a");
                faAudio.play();
                break;
            case "Stinkfly":
                let sfAudio = new Audio("./audio/stinkfly.m4a");
                sfAudio.play();
                break;
            case "Ripjaws":
                let rjAudio = new Audio("./audio/ripjaws.m4a");
                rjAudio.play();
                break;
            default:

        }

    });
}

// input.addEventListener("keypress", function give(event){
//     if(input.value.length>0 &&   event.keyCode===13){
//     score = test();
//     alterText= text.textContent = "You are a "+score+"% resemblance of the chosen Alien🔥. Don't forget to explore your Ultimate Powers!!";
//     score=0;
//     return alterText;
// }});
