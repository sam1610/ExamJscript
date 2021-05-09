function bouger(a){
    var left =Math.ceil(Math.random()*window.innerWidth-75);
    var top =Math.ceil(Math.random()*window.innerHeight-75);
    
    a.style="position:absolute; left:"+ left + "px; top:"+ top + "px;";

    var Quey_string= "left="+left+"&top="+top; 

    console.log(Quey_string);
    ajax("./inaccessible.php", Quey_string,rappel, "GET" );
        
}

function rappel(){

}
function merci(a){
alert(" Merci pour votre : "+ a.innerHTML);

}
