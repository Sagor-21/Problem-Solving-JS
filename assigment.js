//Task no.1- feet to mile

function feetToMile(feet) {
    const mile = feet / 5280;
    return mile;
}
const myMile = feetToMile(50000)
console.log("it is", myMile, "mile");
 
//Task no.2 -Wood calculator

function woodCalculator(chair, table, bed){
let chairCount = chair*1;
let tableCount = table* 3;
let bedCount = bed*5;
var totalWood = (chairCount + tableCount + bedCount );
return totalWood;
}

var iNeed = woodCalculator(1,8,8);
console.log("i need total",iNeed, "cm wood to have all things");


//Task no.3 - Brick calculator
function brickCalculator(floor){
    const brickPerFeet = 1000;
    const oneToEleven = 15;
    const elevenToTwenty = 12;
    const twentyUp = 10;
 if(floor >= 0 && floor <=10){
     var oneToElevenCount = floor*oneToEleven*brickPerFeet;
     return oneToElevenCount;
 }
 else if(floor > 10 && floor <=20){
     var elevenToTwentyCount = floor*elevenToTwenty*brickPerFeet;
     return elevenToTwentyCount;
 }
 else if ( floor > 20){
     var twentyUpCount = floor*twentyUp*brickPerFeet;
     return twentyUpCount;
 }
 return -1;
}

var building = brickCalculator(11);
console.log("Total Bricks", building);


//task no. 4 - Tiny friend


function tinyFriend(friends){
 var tiny = friends[0];
 for(var i = 0; i < friends.length; i++){
     var currentName = friends[i];
     var newV = tiny.length;
     if(currentName.length <  tiny.length){
         tiny = currentName;
     }
     
   
 }
 return tiny;
}
var name = tinyFriend(["Saiful", "Rafiq", "Maruf", "Ujjal", "Alamin", "Rakib", "Opu" ]);
console.log(name);




