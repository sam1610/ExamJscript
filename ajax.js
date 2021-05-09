function ajax(url, flux, rappel, method) {
    var r = window.XMLHttpRequest ? new XMLHttpRequest() :
      (window.ActiveXObject ?  new ActiveXObject("Microsoft.XMLHTTP") : '');
    if (!r) return false;
    r.onreadystatechange = function () {rappel(r);}
    console.log(url );
    r.open(method ? method : 'GET', url, true);
    if (flux)
        r.setRequestHeader("Content-Type", 
                           "application/x-www-form-urlencoded; ");
    r.send(flux);
    return true;
  }


  /*
<script type='text/javascript' src='ajax.js'></script>
<script type='text/javascript'>
function isReady(xmlhttp) {
      alert("readyState = " + xmlhttp.readyState);
      if ( xmlhttp.readyState == 4)
	 {alert('status:  ' + xmlhttp.status + xmlhttp.responseText);}
}<script>
  <body onload="ajax('/', null, isReady, 'GET')">
.....
  */