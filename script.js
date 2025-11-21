/*UPPGIFT 2*/
/*Här får man fel medelande att task1 och task3 is not defined*/
/* men för task2 får man undefined*/

//console.log(task1); Jag omvandlat det til kommenter eftersom de croshar i console//
console.log(task2);
//console.log(task3);Jag omvandlat det til kommenter eftersom de croshar i console//

{ let task1 = 10; // "let" är blockscope när jag lag de utanför fick jag fel medelande "is not defined"
  var task2 = 20; // "var" är inte blockscope vilket betyder att variabeln gäller både inuti och utanför blocket.
  const task3 = 30; // "const" är blockscope när jag lag de utanför fick jag fel medelande "is not defined"
  console.log(task1);
  console.log(task2);
  console.log(task3);

 /* här får vi  alla värden ut i console.*/
}

//console.log(task1);Jag omvandlat det til kommenter eftersom de croshar i console//
console.log(task2);
//console.log(task3);Jag omvandlat det til kommenter eftersom de croshar i console//
/*Här får man fel medelande att task1 och task3 is not defined*/ 
/* men för task2 får vi värden ut i console eftersom "var" fungerar utanför också.*/

/*UPPGIFT 3*/
console.log("3"==3); /* == detta kalas för loose equality. Den försöker omvandla värdena till samma typ och jämför sedan värdena. Här får vi true i console*/
console.log("3"===3); /*=== detta kalas för strikt jämförelse vilket den jämför typ och även värde. Här får vi false i console*/
console.log(NaN==NaN); /*Här får vi false i console. Det spelar ingen roll om vi använder == eller === kommer vi alltid false i console 
efterson NaN är den ända värde i hela JavaScript som inte är lika med sig själv*/
console.log(NaN===NaN); /*Här får vi false i console*/
console.log(null==undefined); /* Här gör vi loose equality och får vi true i console vilket betyder båda är inget värde men på olika sätt*/
console.log(null===undefined); /*Här gör vi strikt jämförelse och får vi false i console eftersom de är olika typer*/
// NaN betyder not a number och det uppstår när en ogiltig beräkning görs. NaN är aldrig lika med något, inte ens sig själv. 
// undefined är en variabel som finns men inte har fått något värde. 
// null är ett värde när programen själv sätter för att visa att nogåt medvetet är tomt.

let result = undefined ? "truthy" : "falsy";
console.log(result); /* detta är en ternary operator och det visar falsy i consolen*/


//undefined ? "truthy" : "falsy"// När detta uttryck står för sig sjäv syns ingen i consolen 
// eftersom det inte sparas i en varibel.




/*UPPGIFT 4*/
/*Del 1 och Del 2*/

function greet(name){
  return "Hej" + name;
}
console.log(greet(" Mikaela1"));
let message = greet(" Mikaela");
console.log(message);
// Detta är en funktionsdeklaration. Den hoistas vilket betyder att den kan anropas även före redan där den är definerad.
// Jag valde att använde dessa tre olika funktion så jag kan se skilnaden mellan deras funktionalitet. //



const greet2= function(name) {
  return "Hej" + name;
}
console.log(greet2(" Mikaela2"));
// Detta är en funktionsuttryck. Funtionen lagras i variabeln greet2 och hoistas inte på samma sätt som en funktiondeklaration. 
// Därför kan det bara anropas efter att redan där funktionen tilldelas har körsts.// 




const greet3 = (name) => {
  return "Hej " + name; 

}
console.log(greet3("Mikaela3"));
//Detta är en arrowfunktion och de hoistas inte de kan bara anropas efter att redab där de definieras har körts.//


const greet1 = (name) => {
  return "Hej " + name; 

};
let message1 = greet1("Mikaela");
console.log(message1);
//Detta är också en arrowfunktion och här sparas returvärdet i variabeln message1 innan det skrivs ut. 
// Arrowfuntioner hoistas inte de kan bara anropas efter.



//DEl 3//

//Global variabel i roten av scriptet//

let name = "snöa"; 
console.log("Det kommer att" , name);
//Detta är den globala variabeln name och den ligger i roten av scriptet och 
// den kan användas både före och efter funtionerna.//
{
  console.log(name);
}

const greet4 = (name) => {
  console.log("Det är dåligt med" , name);
  return "Det kommer att" + name;
}
console.log(greet4(" regna"));//Detta är en arrowfuntion och där parametern name inne i funtionen är ett eget värde 
// och är inte samma den globaba name. 
// När vi anropar funtionen med regna får den lokala name värdet regna. 
// Den globala variabel name utanför funtionen ändras inte.

console.log("Vill du att det ska", name);// Här skrivs den globala variabeln name ut igen 
// men parametern i greet4 ändrar inte den globala variabeln så värdet är fortfarande snöa.//









