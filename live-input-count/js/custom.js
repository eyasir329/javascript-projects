var input = document.getElementById('input_text');
//var total = document.getElementById('total_live');
function total_text(){
    var total_char = input.value.length;
    document.getElementById("total_live").innerHTML = total_char;
    total_live.innerHTML = `${total_char}`;
}
total_text();