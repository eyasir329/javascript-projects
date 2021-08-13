function formInpuT(){
//condition
var selectedValue = document.getElementById("list").value;
var a = selectedValue <=32;
var b = selectedValue <=39;
var c = selectedValue <=49;
var d = selectedValue <=59;
var e = selectedValue <=69;
var f = selectedValue <=79;
var g = selectedValue <=100;
switch(a,b,c,d,e,f,g){
    case a==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'F'</span></h2>"+"<h2>Grade Point : <span>'0.00'</span></h2>"+"<h2>Connotion : <i>'Unsatisfactory'</i>"
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(255, 0, 0, 0.7)";
        break;
    case b==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'D'</span></h2>"+"<h2>Grade Point : <span>'1.00'</span></h2>"+"<h2>Connotion : <i>'Satisfactory'</i>"
        document.querySelector('h3').children[1].style.color = "green";
        document.querySelector('h3').children[2].style.color = "green";
        document.querySelector('h3').children[3].style.color = "green";
        document.getElementById("result").style.boxShadow = "10px 20px 30px rgba(0, 128, 0, 0.7)";
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(0, 128, 0, 0.7)";
        document.getElementById("result").style.backgroundColor = "#a37878";
        break;
    case c==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'C'</span></h2>"+"<h2>Grade Point : <span>'2.00'</span></h2>"+"<h2>Connotion :<br> <i>'More Than Satisfactory'</i>"
        document.querySelector('h3').children[1].style.color = "#678000";
        document.querySelector('h3').children[2].style.color = "#678000";
        document.querySelector('h3').children[3].style.color = "#678000";
        document.getElementById("result").style.boxShadow = "10px 20px 30px #678000";
        document.getElementById("result").style.backgroundColor = "#78a39e";
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(103, 128, 0, 0.7)";
        break;
    case d==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'B'</span></h2>"+"<h2>Grade Point : <span>'3.00'</span></h2>"+"<h2>Connotion :<br> <i>'More Than Satisfactory'</i>"
        document.querySelector('h3').children[1].style.color = "#800076";
        document.querySelector('h3').children[2].style.color = "#800076";
        document.querySelector('h3').children[3].style.color = "#800076";
        document.getElementById("result").style.boxShadow = "10px 20px 30px #800076";
        document.getElementById("result").style.backgroundColor = "#78a38a";
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(120, 163, 138, 0.7)";
        break;
    case e==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'A-'</span></h2>"+"<h2>Grade Point : <span>'3.50'</span></h2>"+"<h2>Connotion : <i>'Good'</i>"
        document.querySelector('h3').children[1].style.color = "#318000";
        document.querySelector('h3').children[2].style.color = "#318000";
        document.querySelector('h3').children[3].style.color = "#318000";
        document.getElementById("result").style.boxShadow = "10px 20px 30px #318000";
        document.getElementById("result").style.backgroundColor = "#a1a378";
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(49, 128, 0, 0.7)";
        break;
    case f==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'A'</span></h2>"+"<h2>Grade Point : <span>'4.00'</span></h2>"+"<h2>Connotion : <i>'Very Good'</i>"
        document.querySelector('h3').children[1].style.color = "#807600";
        document.querySelector('h3').children[2].style.color = "#807600";
        document.querySelector('h3').children[3].style.color = "#807600";
        document.getElementById("result").style.boxShadow = "10px 20px 30px #807600";
        document.getElementById("result").style.backgroundColor = "#d3d954";
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(211, 217, 84, 0.7)";
        break;
    case g==true:
        document.getElementById('result').innerHTML = "<h1>Your Result</h1>"+"<h2>Letter Grade : <span>'A+'</span></h2>"+"<h2>Grade Point : <span>'5.00'</span></h2>"+"<h2>Connotion : <i>'Excellent'</i>"
        document.querySelector('h3').children[1].style.color = "#0ae534";
        document.querySelector('h3').children[2].style.color = "#0ae534";
        document.querySelector('h3').children[3].style.color = "#0ae534";
        document.getElementById("result").style.boxShadow = "10px 20px 30px #0ae534";
        document.getElementById("result").style.backgroundColor = "rgb(217, 84, 197)";
        document.querySelector(".container").style.boxShadow = "10px 10px 1000px 20px rgba(10, 229, 52, 0.7)";
        break;
}
document.getElementById('result').style.display = "block";
}
    




