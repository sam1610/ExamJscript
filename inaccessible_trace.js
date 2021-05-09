function bouger(a){
    const  left =Math.ceil(Math.random()*window.innerWidth-75);
    const  top =Math.ceil(Math.random()*window.innerHeight-75);
    
    a.style="position:absolute; left:"+ left + "px; top:"+ top + "px;";

    const Quey_string= "left="+left+"&top="+top; 

    console.log(Quey_string);
    ajax("inaccessible.php", Quey_string,rappel, "GET" );


        
}

function rappel(){

}
function merci(a){
alert(" Merci pour votre : "+ a.innerHTML);

}

