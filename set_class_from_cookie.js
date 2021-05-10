function set_class_from_cookie(){

    var element_cookies=document.cookie.split(";");
    for (var  i=0; i< element_cookies.length; i++){
        //  peut être bien   classList.toggle est en core mieux
        document.getElementById(element_cookies[i]).clalssName="erreur";
    }
    document.cookie =  "= ;expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
}