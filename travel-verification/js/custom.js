
function formSUBmit(){
    
    //gender
    var genLen = document.myform.gender.length;
    for(i=0; i<genLen; i++){
        var check = document.myform.gender[i].checked;
        if(check){
            var genResult = document.myform.gender.value;
        }
    }
    var genShow = "gender is "+ genResult;
    
    //old
    var selectedValue = document.getElementById("list").value;
    
    
    //condition
    var genRM = document.myform.gender.value.length;
    //male
    if(genRM==4){
        var b = document.getElementById("list").value;
        if(b>=18){
           document.getElementById('output_text').innerHTML = "Welcome ... You Are Sellected"
        }
        else{
           document.getElementById('output_text').innerHTML = "You Must Read Our Term's ... You Are Not Sellected"
        }
    }
    //female
    else if(genRM==6){
        var c = document.getElementById("list").value;
        if(c>=24){
           document.getElementById('output_text').innerHTML = "Welcome ... You Are Sellected"
        }
        else{
           document.getElementById('output_text').innerHTML = "You Must Read Our Term's ... You Are Not Sellected"
        }
    }

    
}

