
function ck(){
    document.getElementById("Totaal").style.visibility = "visible";
    document.getElementById("result").style.visibility = "visible";

    const budget = 10;
    const product = 60;
    var tot;

if (budget >= product) {
    console.log("U heeft genoeg geld ;)")
    document.getElementById("Totaal").style.color = "green";
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = "U heeft genoeg geld! ;)";
    var tot = budget - product;
    document.getElementById("Totaal").innerHTML = tot;

} else {
    console.log("Helaas, te weinig geldt :(")
    document.getElementById("Totaal").style.color = "red";
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Helaas, te weinig geldt :(";
    var tot = budget - product;
    document.getElementById("Totaal").innerHTML = tot;
}
}