
document.getElementById("submit").addEventListener("click", one);
function one() {
    var output =  "";
    for(var i = 10; i >= 0; i--) {
        output+=i;
        output+='<br>';
    };

    var outputContainer=document.getElementById("output");
    outputContainer.innerHTML = output;
}
