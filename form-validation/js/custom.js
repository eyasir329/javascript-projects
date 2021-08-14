
//js input
var fName = document.getElementById('fName');
var fNameErr = document.getElementById('fNameErr');
var lName = document.getElementById('lName');
var lNameErr = document.getElementById('lNameErr');
var ScrName = document.getElementById('ScrName');
var ScrNameErr = document.getElementById('ScrNameErr');
var monTh = document.getElementById('month');
var daY = document.getElementById('day');
var yeaR = document.getElementById('year');
var dateErr = document.getElementById('dateErr');
var genErr = document.getElementById('genErr');
var counTry = document.getElementById('counTry');
var counTryErr = document.getElementById('counTryErr');
var emaiL = document.getElementById('emaiL');
var emailErr = document.getElementById('emailErr');
var Number = document.getElementById('Number');
var numErr = document.getElementById('numErr');
var passWord = document.getElementById('passWord');
var passErr = document.getElementById('passErr');
var conPassWord = document.getElementById('conPassWord');
var conpassErr = document.getElementById('conpassErr');
var chekBox = document.getElementById('chekBox');
var chekBoxErr = document.getElementById('chekBoxErr');




//make error
function subM(){
    //firstname
    if(fName.value==""){
        fNameErr.innerHTML = "Please Enter Your First Name";
        fName.focus();
        fName.style.border = "2px solid #f22b2b";
        return false;
    }
    //lastname
    if(lName.value==""){
        lNameErr.innerHTML = "Please Enter Your Last Name";
        lName.focus();
        lName.style.border = "2px solid #f22b2b";
        return false;
    }
    //screenname
    if(ScrName.value==""){
        ScrNameErr.innerHTML = "Please Enter Your Last Name";
        ScrName.focus();
        ScrName.style.border = "2px solid #f22b2b";
        return false;
    }
    
    
    //month
    var moValuE = document.myform.monthList.value;
    var aa = moValuE;
    if(aa == "Month"){
        dateErr.innerHTML = "Please Enter Month Name";
        monTh.focus();
        monTh.style.border = "2px solid #f22b2b";
        return false;
    }
    
    //day
    var daValuE = document.myform.dayList.value;
    var bb = daValuE;
    if(bb == "Day"){
        dateErr.innerHTML = "Please Enter a Day";
        daY.focus();
        dateErr.style.marginLeft = "100px";
        daY.style.border = "2px solid #f22b2b";
        return false;
    }
    
    //year
    var yeValuE = document.myform.yearList.value;
    var cc = yeValuE;
    if(cc == "Year"){
        dateErr.innerHTML = "Please Enter A Year";
        yeaR.focus();
        dateErr.style.marginLeft = "220px";
        yeaR.style.border = "2px solid #f22b2b";
        return false;
     }
    
    //gender
    var genM = document.myform.gender.value;
    if(genM==""){
        genErr.innerHTML = "You Must Enter A Gender";
        genErr.style.marginLeft = "100px";
        return false;
    }
 
    //country
    var coValuE = document.myform.countryList.value;
    var ee = coValuE;
    if(ee == "Country"){
        counTryErr.innerHTML = "Please Enter Your Country";
        counTry.focus();
        counTry.style.border = "2px solid #f22b2b";
        return false;
    }
    
    
    //email
    if(emaiL.value==""){
        emailErr.innerHTML = "Please Enter Your Valid Email Addrese";
        emaiL.focus();
        emaiL.style.border = "2px solid #f22b2b";
        emailErr.style.marginLeft = "20px";
        return false;
    }
    
    //phone
    if(Number.value==""){
        numErr.innerHTML = "Please Enter Your Phone Number";
        Number.focus();
        Number.style.border = "2px solid #f22b2b";
        numErr.style.marginLeft = "20px";
        return false;
    }
    
    //password
    if(passWord.value==""){
        passErr.innerHTML = "Please Enter Your Password";
        passWord.focus();
        passWord.style.border = "2px solid #f22b2b";
        passErr.style.marginLeft = "20px";
        return false;
    }
    if(passWord.value.length<=5){
        passErr.innerHTML = "Your Password Must Be 6 Digits";
        passWord.focus();
        passWord.style.border = "2px solid #f22b2b";
        passErr.style.marginLeft = "20px";
        return false;
    }
    
    //confirm password
    if(conPassWord.value==""){
        conpassErr.innerHTML = "Please Enter Your Phone Number";
        conPassWord.focus();
        conPassWord.style.border = "2px solid #f22b2b";
        conpassErr.style.marginLeft = "20px";
        return false;
    }
    if(conPassWord.value.length<=5){
        conpassErr.innerHTML = "Your Password Must Be 6 Digits";
        conPassWord.focus();
        conPassWord.style.border = "2px solid #f22b2b";
        conpassErr.style.marginLeft = "20px";
        return false;
    }
    
    //same password
    if(conPassWord.value != passWord.value){
        conpassErr.innerHTML = "Your Password Don't Match";
        conPassWord.focus();
        conPassWord.style.border = "2px solid #f22b2b";
        conpassErr.style.marginLeft = "20px";
        return false;
    }
    
    
    //checkbox
    var chekBoxL = document.querySelector("#chekBox");
    if(chekBoxL.checked==false){
        chekBoxErr.innerHTML = "You Must Agree Our Term's And Condition";
        return false;
    }
}

function myclick(){
    var chekBoxL = document.querySelector("#chekBox");
    if(chekBoxL.checked==true){
        chekBoxErr.innerHTML = "";
    }
}



//error fixed
function errValid(){
    
    //first name Error
    if(fName.value!=""){
        fNameErr.innerHTML = "";
        fName.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //last name error
    if(lName.value!=""){
        lNameErr.innerHTML = "";
        lName.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //screen name error
    if(ScrName.value!=""){
        ScrNameErr.innerHTML = "";
        ScrName.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //gender error
    var genM = document.myform.gender.value;
    if(genM !=""){
        genErr.innerHTML = "";
    }
    
    //email error
    if(emaiL.value!=""){
        emailErr.innerHTML = "";
        emaiL.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //phone error
    if(Number.value!=""){
        numErr.innerHTML = "";
        Number.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //password error
    if(passWord.value!=""){
        passErr.innerHTML = "";
        passWord.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //confirm password error
    if(conPassWord.value!=""){
        conpassErr.innerHTML = "";
        conPassWord.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    
    
}

fName.addEventListener('blur',errValid);
lName.addEventListener('blur',errValid);
ScrName.addEventListener('blur',errValid);
emaiL.addEventListener('blur',errValid);
Number.addEventListener('blur',errValid);
passWord.addEventListener('blur',errValid);
conPassWord.addEventListener('blur',errValid);
document.querySelector("#Gender1").addEventListener('click',errValid);
document.querySelector("#Gender2").addEventListener('click',errValid);
document.querySelector("#Gender3").addEventListener('click',errValid);


//select error fixed
function selErr(){

//month
    var moValuE = document.myform.monthList.value;
    var aa = moValuE;
    if(aa != ""){
        dateErr.innerHTML = "";
        monTh.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }

//day 
    var daValuE = document.myform.dayList.value;
    var bb = daValuE;
    if(bb != ""){
        dateErr.innerHTML = "";
        daY.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
//year 
    var yeValuE = document.myform.yearList.value;
    var cc = yeValuE;
    if(cc != ""){
        dateErr.innerHTML = "";
        yeaR.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
    //country 
    var coValuE = document.myform.countryList.value;
    var ee = coValuE;
    if(ee != ""){
        counTryErr.innerHTML = "";
        counTry.style.border = "2px solid rgba(45, 38, 38, 0.5)";
    }
    
}

