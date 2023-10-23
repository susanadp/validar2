function miFunction() {
    var texto;
    let c="losGatosSonLoMejor5689";
    
    let p = document.getElementById("pass").value;//Para llamar al valor de pass

    if(p==c){

    window.location.href = "codoacodo.html";
}
else{
texto = "<span style = 'color:red;'>clave incorrecta! </span>";
}
document.getElementById("mensaje").innerHTML = texto;
}
