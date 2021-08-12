

//message live
var meSSage = document.querySelector('textarea');
var total = document.querySelector('#live-data').style.color = 'rgba(255, 0, 0, 0.26)';
var total = document.querySelector('#live-data').style.fontStyle = 'italic';
function livemeSSage(){
    var totalMessa = meSSage.value.length;
    document.getElementById('live-data').innerHTML = '<i>Total Charecter is : </i>'+ totalMessa;
    document.getElementById('live-data').style.color = "rgba(255, 0, 0, 0.26)";
}
document.querySelector('#output-f').style.background = "#000";


//form input

function formInpuT(){
    //username
    var firName = document.formFi.firstname.value;
    var larName = document.formFi.lastname.value;
    var showFu = 'Hello ... '+firName+" "+larName;
    document.querySelector('#your-full-name').innerHTML = showFu;
    
    //gender
    var genIen = document.formFi.gender.length;
    for(i=0;i<genIen;i++){
        var checkGen = document.formFi.gender[i].checked;
        if(checkGen){
            var genResult = document.formFi.gender.value;
        }
    }
    var genShow = 'Gender is '+genResult;
    document.querySelector('#your-gender').innerHTML = genShow;
    
    //message 
    var messaIn = document.formFi.message.value;
    document.querySelector('#your-message').innerHTML = 'Message is ... '+'<p>'+messaIn+'</p>';
    document.querySelector('#your-message').style.fontSize = "20px";
    document.querySelector('.output-form').style.opacity = "1";
}












