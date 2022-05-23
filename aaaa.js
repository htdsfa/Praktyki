/* Data Types:
* undefined,null,boolean (true/false),string,symbol,number,object */

//var MyName= "Wojtek" zadeklarowanie zmiennej
//let ourName="freeCodeCamp"
//const pi=3.14 const nie można zmienić
//console.log() pokazuje na konsoli

------------------------------------------------------------------------
/*VAR
var a;
var b=3;
a=8;
b=a;
------------------------
var a = 5;
var b =10;
var c ="I am a";

a=a+1
b=b+5
c=c+"String";
------------------------
var StUdLyCaPvAr;
studlycapvar = 10;
nie zadziała

var studlyCapVar;
studlyCapVar= 10;
------------------------
var sum=10+10; dodawanie
console.log(sum)

var difference = 45-33; odejmowanie
console.log(difference)

var product = 8*10; mnożenie
console.log(product)

var quotient = 66/33; dzielenie
console.log(quotient)
------------------------
var myVar=87;
myVar=myVar+1   =   myVar++

var myVar=11;
myVar=myVar-1   =   myVar--
------------------------
var decimal = 5.7; liczba dziesiętna
------------------------
var renainder; reszta
remainder = 11 % 3;
sprawdza czy liczba jest parzysta lub nieparzysta
------------------------
var a=10;
a=a+12;     =     a+=12;
a=a-12;     =     a-=12;
a=a*12;     =     a*=12;
a=a/12;     =     a/=12;
------------------------
var firstName = "Wojtek"; string

var cos = "siema fajny\" długopis pokaż\" mi go"; cudzysłów w stringu
var cos = 'siema fajny "długopis pokaż" mi go';
var cos = "siema fajny długopis " + "pokaż mi go"; łączy dwa stringi

var cos = "siema fajny długopis ";
var cos +="pokaż mi go";

\\ - backslash
\n - nowa linia
\r -
\t - tab
\b - backspace
\f -

var name = "Wojtek";
var str = "Hello my name is " + name + "how are you?";

var tak="jest super!";
var str="programowanie jest ";
str += tak;

var firstNameLength = 0;
var firstName = "Wojtek";
firstNameLength = firstName.length; pokazuje długość stringu

var firstLetter="";
var firstName="Wojtek";
firstLetter = firstName[0] pokazuje pierwszą litere

var str="jello world";
str = "Hello World"; zamienia stringa

var firstName="Wojtek";
var lastLetter= firstName[firstName.length - 1]; ostatnia litera
------------------------
var myArray=["kot", "pies"];
var myArray=[["kot"], ["pies"]];
var data= myArray[0]

var myArray=["kot", "pies"];
var myArray[1]= jez;

var myArray=[["kot"], ["pies"]];
var data=myArray[0][0];

var myArray=["kot", "pies"];
myArray.push(["jez", "slon"]);

var myArray=["kot", "pies"];
var removeFromArray=myArray.pop();

var myArray=["kot", "pies"];
var removeFromArray=myArray.shift();

var myArray=["kot", "pies"];
myArray.unshift("pingwin");
*/
------------------------------------------------------------------------
FUNCTION

function ourReusableFunction(){
console.log("hello World");
}
ourReusableFunction();
------------------------
function ourReusableFunction(a,b){
console.log(a-b);
}
ourReusableFunction(15,10);
------------------------
function myLocalScope() {
var myVar=5;
console.log(myVar);
}
myLocalScope();
console.log(myVar);
------------------------
var outerWear = "T-Shirt";
function myOutfit() {
    var outWeat = "sweater";
    return outerWear;
}
------------------------
function minusSeven(num) {
return num-7;
}
console.log(minusSeven(10));
------------------------
var sum = 0;
function addThree(){
sum += 3;
}
------------------------
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
------------------------
function welcomeToBooleans() {
    retrun
    true;
}
------------------------
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
------------------------
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log (testEqual(10));
------------------------
function testStrict (val){
if(val ===7) {
    return "Equal";
}
return "Not Equal";
testStrict(10);
------------------------
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log (testNotEqual(10));
------------------------
    function testStrictNotEqual(val){
if (val !==17) {
    return "Not Equal";
}
return "Equal";
console.log(testStrictNotEqual(10));
------------------------
    function testGreaterThan(val) {
        if (val > 100) {
            return "Over 100";
        }
        if (val > 10) {
            return "Over 10";
        }
        return "10 or Under";
    }
console.log (testGreaterThan(10));
------------------------
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10));
------------------------
    function testLogicalAnd (val) {
        if (val <= 50 && val >= 25) {
            return "yes";
        }
        return "No";
    }
testLogicalAnd(10);
------------------------
function testLogicalOr (val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);
------------------------
function testElse (val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}
testElse(4);
------------------------
    function testElselIf (val) {
        if (val > 10) {
            return "Greater than 10";
        } else if (val < 5) {
            return "Smaller than 5";
        } else {
            return "Between 5 and 10";
        }
    }
testElselIf(7);
------------------------
    function orderMyLogic(val) {
        if (val < 5) {
            return "Less than 5"3
        } else if (val < 10) {
            return "Less than 10"5

            See
            return "Greater than or equal to 10";

// Change this value to test
            console. log(orderMyLogic(3)) ;