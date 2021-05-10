<?php 
include '../../TD/3/saisie_fiable.php';
//   get the file 
$jour = saisie_fiable($_POST, 'jour', RE_JOUR);
$fin = saisie_fiable($_POST, 'fin',  RE_HEURE);
$debut = saisie_fiable($_POST, 'debut', RE_HEURE);
$file = empty($_FILES['ICS']['tmp_name']) ? '' :
   is_readable($_FILES['ICS']['tmp_name']);


if(!jour){
    setcookie("jour", "erreur")
};
if(!fin){
    setcookie("fin", "erreur")
};
if(!debut){
    setcookie("debut", "erreur")
};
if(!file){
    setcookie("file", "erreur")
};


$str = file_get_contents('creneau.html');



$replacement="<style>.erreur {border:2px dashed red}</style>";
$replacement .="<script src='set_class_from_cookie.js'></script>
<body onload='set_class_from_cookie()>'";
echo preg_replace("/<body>/", $replacement, $str);


//   Exemple 1
// $string = '<body></body>';
// $pattern = '/(\w+) (\d+), (\d+)/i';
// $replacement = '${1}1,$3';
// echo preg_replace($pattern, $replacement, $string);

//   Exemple 2
// $text = "We at Guru99 strive to make quality education affordable to the masses. Guru99.com";

// $text = preg_replace("/Guru/", '<span style="background:yellow">Guru</span>', $text);

// echo $text;
?>

