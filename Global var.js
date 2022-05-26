var myGlobal = 10;

function fun1(){
    oppsGlobal=5;
}
function fun2(){
    var output="";
    if (typeof myGlobal !="undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oppsGlobal !="undefined"){
        output += "oopsGlobal: " +oppsGlobal;
    }
    console.log(output);
}
fun1();
fun2();