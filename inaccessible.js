function bouger(a){
            console.log(a.style.left);
            var left =Math.ceil(Math.random()*window.innerWidth-75);
            var top =Math.ceil(Math.random()*window.innerHeight-75);
            a.style="position:absolute; left:"+ left + "px; top:"+ top + "px;";
            $.ajax({
                url: './inaccessible.php',
                type: 'GET',
                data: {top:top, left:left},
                success: function(data) {
                    console.log(data); // Inspect this in your console
                }
            });          
}

function merci(a){
    alert(" Merci pour votre : "+ a.parentNode);

}
function  clicked(obj)
{

    console.log(obj.innerHTML);
}


function test(){
    window.location.href= "./file.php"+ "?a=1&b=2&c=4";

}