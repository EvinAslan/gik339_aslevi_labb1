/*UPPGIFT 2*/
/*Här får man fel medelande att task1 och task3 is not defined*/
/* men för task2 får man undefined*/

//console.log(task1);//
console.log(task2);
//console.log(task3);//


{ let task1 = 10;
  var task2 = 20;
  const task3 = 30;
  console.log(task1);
  console.log(task2);
  console.log(task3);

 /* här får vi  alla värden ut i console.*/
}

//console.log(task1);//
console.log(task2);
//console.log(task3);
/*Här får man fel medelande att task1 och task3 is not defined*/ 
/* men för task2 får vi värden ut i console eftersom "var" fungerar utanför också.*/

/*UPPGIFT 3*/
console.log("3"==3); /* Här får vi true i console*/
console.log("3"===3); /*Här får vi false i console*/
console.log(NaN===NaN); /*Här får vi false i console*/
console.log(null==undefined); /* Här får vi true i console*/
console.log(null===undefined); /*Här får vi false i console*/
// NaN betyder not a number och det uppstår när en ogiltig beräkning görs. NaN är aldrig lika med något, inte ens sig själv. 
// undefined är en variabel som har inget värde. 
// null är ett värde när programen själv sätter för att visa att nogåt medvetet är tomt.

let result = undefined ? "truthy" : "falsy";
console.log(result); //-> det visar falsy i consolen


//undefined ? "truthy" : "falsy"// När detta uttryck står för sig sjäv syns ingen i consolen 
// eftersom det inte sparas i en varibel.




/*UPPGIFT 4*/
/*Del 1 och Del 2*/
function greet(name){
  return "Hej" + name;
}
console.log(greet(" Mikaela1"));
// Detta är en funktionsdeklaration



const greet2= function(name) {
  return "Hej" + name;
}
console.log(greet2(" Mikaela2"));
// Detta är en funktionsuttryck




const greet3 = (name) => {
  return "Hej " + name; 

}
console.log(greet3("Mikaela3"));
//Detta är en arrowfunktion


const greet1 = (name) => {
  return "Hej " + name; 

};
let message1 = greet1("Mikaela");
console.log(message1);


//DEl 3//

//det ligger i roten av scriptet//

let name = "snöa"; 
console.log("Det kommer att" , name);

const greet4 = (name) => {
  console.log("Det är dåligt med" , name);
  return "Det kommer att" + name;
}
console.log(greet4(" regna"));

console.log("Vill du att det ska", name);


//reflektioner//


