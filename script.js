function roll(){
setTimeout(function(){
    


    let rand= Math.floor(Math.random()*6)+1;
    document.getElementById('dice').innerHTML="<img src='images/"+rand +".svg'/>";
    document.getElementById('result').innerHTML=`Your roll is ${rand}`;

},1000);
}