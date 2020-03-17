/*

Fundamental Concepts of Variables 
A variable is like a container in order to store a value instead of writing it over and over again in our program .
              var firstName = 'John'; 
Data Script Data Types 
Number, String , Boolean, Undefined, Null


Javascript has dynamic typing: data types are automatically assigned to variables; there's no need to define the variables.
When  a variable is declared without assigning any value its undefined.

Rules when Naming Variables in Javascript 
Cameltoe notation: firstName, 
Variables cannot start with numbers or symbols expect for the underscore and $
We can not used reserved Javascript keywords as variable names.

Javascipt Comments 
// single line comments 
/* 
multi line comment

Variable Mutation and type coercion 
var firstName = 'John';
var age = 28; 


console.log(firstName + ' ' + age); = John 28. Changes the number to a string. can also convert booleans and undefined into a string. 

Var mutation 
age = 'twenty eight'; 
changes the varable.
alert( 'pops it up')

we can also assign variables with the prompt method 
var lastName = prompt('What is his last name'); 
insert the name you want to put it automatically.


MATH Operators (*, -, +)
Operators are like functions written in a special way in javascript 
var yearJohn= 2018 - 28;
var yearMark = 2018 - 33;

 Logical Operators 
var johnOder  = ageJohn > ageMark;
console.log(johnOlder); false 

typeof operator 
console.log(typeof johnOlder); 
this tells you the type of operator. 

Operator Precidence 
var now = 2018;
var yearJohn = 1989;
var fullAge = 18; 

var isFullAge = now - yearJohn >= fullAge;
We need javascript to substract now and yearJohn first then after that compare it to full age to know if its true or not;

We can confirm which comes first form the Javascript Precedence table.
The higher preceedence comes first 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
Grouping carries the highest precedence. 

Multiple Assignments 
var x, y; 
 x = y = (3 + 5) * 4 - 6; // 
the code works due to the fact of associativity of "=" operator is from left to right meaning the code results 
would first of all be assigned to y , then y would be assigned to x .



More Operators
x = x * 2;
x *= 2; works as the same thing for all operators.

for increments x++;

CODING CHALLENGE 

would be uploaded on my git hub page 

 IF ELSE STATEMENTS 

var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'married'){
 console.log(firstName + ' is married!');
} else {
 console.log(firstName + ' will hopefully marry soon :)');
}

//a better version of this code would be 
var isMarried = true;
if (isMarried) {
 console.log(firstName + ' is married!');
} else {
 console.log(firstName + ' will hopefully marry soon ")');
}


BOOLEAN LOGIC
AND (&&)
OR (||)
NOT (!)
eg 
var age = 16;

!( age < 30); 
age >= 20 && age < 30; 
age >= 20 || age < 30;


// boolean logic 
var firstName = 'John';
var age = 90;
if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age<20){
    console.log(firstName + ' is a teenager');
    } else if (age >=20 && age<30){
    console.log(firstName + ' is a young man');
   }else{
       console.log(firstName + ' is a man');
   }
   
// john 89 120 183
// mike 116 94 123
var john, mike, johnAver, mikeAver, mary, maryAver;
var johnAver = (189 + 89 + 120)/3;
var mikeAver = (189 + 89 + 120)/3;
var maryAver = (189 + 89 + 120)/3;
if(johnAver>mikeAver && johnAver>maryAver){
    console.log('John won the game on Average with' + johnAver + ' point');
}else if (johnAver===mikeAver && johnAver===maryAver){
        console.log('John drew the game with Mike and mary with both teams having ' + johnAver + 'point');
    }
else if (mikeAver>johnAver && mikeAver>maryAver){ 
    console.log('Mike won the game ' + mikeAver);
}else{
    console.log('mary won the game with '+maryAver);
}





FUCTIONS IN JAVASCRIPT 

Function calculateAge(birthYear) {
    






*/

/*  
// boolean logic 
var firstName = 'John';
var age = 90;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age<20){
    console.log(firstName + ' is a teenager');
    } else if (age >=20 && age<30){
    console.log(firstName + ' is a young man');
   }else{
       console.log(firstName + ' is a man');
   }
  */
  /*
      var markHeight, markMass, check1, johnHeight, johnMass, johnBmi, markBmi, check;
      markHeight = 1.82; //cm
      markMass = 102; //kg
      johnHeight = 1.86; //kg
      johnMass = 76; //cm
      johnBmi = johnMass/(johnHeight * johnHeight);
      markBmi = markMass/(markHeight * markHeight);
      check = markBmi>johnBmi;
      check1 = "is marks Bmi higher than Johns bmi"
      console.log( check1 +' '+ check)
       console.log(markBmi+ ' ' + johnBmi  + ' ' + check + ' ' + johnMass);
*/
/*
var firstName = 'John';
var civilStatus = 'Single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

//a better version of this code would be 
var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon ")');
}

var markHeight, markMass, check1, johnHeight, johnMass, johnBmi, markBmi, check;
      markHeight = 1.82; //cm
      markMass = 102; //kg
      johnHeight = 1.86; //kg
      johnMass = 76; //cm
      johnBmi = johnMass/(johnHeight * johnHeight);
      markBmi = markMass/(markHeight * markHeight);
      if(markBmi > johnBmi) {
          console.log('Mark BMI is greater than John BMi');
        }else{
            console.lgo('Mark BMI is smaller than John Bmi');}
        
// boolean logic 
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + 'is a boy.');

}

*/


/*
// boolean logic 
var firstName = 'John';
var age = 90;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age<20){
    console.log(firstName + ' is a teenager');
    } else if (age >=20 && age<30){
    console.log(firstName + ' is a young man');
   }else{
       console.log(firstName + ' is a man');
   }
   
// john 89 120 183
// mike 116 94 123


var john, mike, johnAver, mikeAver, mary, maryAver;

var johnAver = (189 + 89 + 120)/3;
var mikeAver = (189 + 89 + 120)/3;
var maryAver = (189 + 89 + 120)/3;

if(johnAver>mikeAver && johnAver>maryAver){
    console.log('John won the game on Average with' + johnAver + ' point');
}else if (johnAver===mikeAver && johnAver===maryAver){
        console.log('John drew the game with Mike and mary with both teams having ' + johnAver + 'point');
    }
else if (mikeAver>johnAver && mikeAver>maryAver){ 
    console.log('Mike won the game ' + mikeAver);
}else{
    console.log('mary won the game with '+maryAver);
}

// FUNCTIONS
function calculateAge(birthYear) {
    return 2018 - birthYear;
}


var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age= calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(1999, 'John');
yearsUntilRetirement(1920, 'hn');
yearsUntilRetirement(1940, 'J');
yearsUntilRetirement(1980, 'nsork');



// FUNCTIONS STATEMENTS AND EXPRESSIONS 
//function(argumenta, argumentb)
//function decleration 
function whatDoYouDo(job, firstName){}
//function expression
var whatDoYouDo = function(job, firstName){

}
*/
/******************************************************************** */
// JAVASCRIPT ARRAYS 
// Collections of variables 

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);
// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/



// bills 124 , 48, 268, if bill>50 tip = bill * .2, 



//CODE CHALLENGE 2 
/*
function tipCalculator(bill){
    var percentage;

    if (bill < 50 ){
        percentage = 0.2;
    }
    else if (bill > 50 && bill < 200){
        percentage = 0.15;
    }else{
        percentage =  0.1;
    }
    return percentage * bill;
    
 } 
 
 
 var theBill = [124, 48, 268];
 console.log(theBill[0]);
 
 var theTip = [tipCalculator(theBill[0]), tipCalculator(theBill[1]), 
 tipCalculator(theBill[2])];

 console.log(theTip);
 
 var totalPrice = [theTip[0] + theBill[0],
                    theTip[1] + theBill[1],
                    theTip[2] + theBill[2]
]
console.log(totalPrice);

*/
/************************************************************************** */
//OBJECTS AND PROPERTIES 
// With Objects you can identify values with the names and not index.
// Unlike Arrays in which you need index values to identify, here you 
// only need the property of the arrray.
/*
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane', 'Mark', 'Bob', 'Emily'],
    job : 'teacher',
    isMarried : false
};
console.log(john);
*/
/*
 firstName is a property here .
to identify a property you can use the dot notation ie john.firstName
 alsoou can use john['last]
 
 
console.log(john['firstName']); // also a way to identify properties 
// also we can declare  a variable 
var x ='birthYear';
console.log(john[x]);

// we can also mutate data the same way 
john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//new object syntax , another way to make an object 
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Dolapa';
console.log(jane);

*///**************************************************************** */
// OBJECT METHODS 
/* Objects can contain differnt types of data including arrays, 
other objects and functions.
A Javasctipt method is a property containing a function definition.
*/
/*

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear; //this stands for the present 
        // object ie john

    }
}
// to store the age in the John Object 
john.calcAge();
console.log(john);
// this key word is very important in objects regarding javascript 
*/

//CODING CHALLENGE 
/*
var john = {
    firstName: 'John',
    mass: 103, //kg 
    height: 1.92, //dm
    calculateAgeBMI : function(mass, height) {
        this.bmi = ((this.mass)/(this.height*this.height));
        return this.bmi;
    }

}
john.calculateAgeBMI();


var mark = {
    firstName: 'Mark', 
    mass : 103,
    height: 1.92,
    calculateAgeBMI: function(mass, height) {
        this.bmi = (this.mass)/(this.height * this.height);
        return this.bmi;
    }
}
mark.calculateAgeBMI();
 
 
if (john.bmi>mark.bmi) {
    console.log('John has the larger bmi of ' +john.bmi); 
}else if(john.bmi === mark.bmi){
    console.log('Both John and mark have a bmi of ' + mark.bmi);
}else{
    console.log('Mark has a larger bmi of ' +mark.bmi);
}
*/

/************************************************************** */
// LOOPS AND ITERATION 
// Helps automate repitive tasks in javascript 

/*
// FOR LOOP 
for (var i = 0; i < 10; i += 2) {
    console.log(i);
}
 
// samples of looping 
var john = ['John', 'Smith', 1990, 'desginer', false];

for (var i = 0; i < john.length; i++ ) {
    console.log(john[i]);
}

// WHILE LOOP 
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/
/*
continue and break statements 
The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop then continue.
 */

 /*
 var john = ['John', 'Smith', 1990, 'desginer', false, 'married'];
 for (var i = 0; i < john.length; i++ ) {
     if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'desginer', false, 'married'];
 for (var i = 0; i < john.length; i++ ) {
     if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

// LOOPING BACKWARDS 
/*
var john = ['John', 'Smith', 1990, 'desginer', false];

for (var i = john.length - 1; i >= 0; i-- ) {
    console.log(john[i]);
}
*/
//CODING CHALLENGE 
/*
var john = {
    bill: [124, 48, 268, 189, 42],
    tipCalculator: function(){
        this.tips=[];
        this.finalValues=[];
        for (var i = 0; i<this.bill.length; i++)
        {
            //Determine percentage based on tipping rules 
            var percentage;
            
            
        if (this.bill[i]<50) {
            percentage = 0.2;
        } else if (this.bill[i] >50 && this.bill[i] <200) {
            percentage= 0.15;
        } else {
        percentage = 0.1;
    }

    // Add results to the corresponing arrays 
     this.tips[i] = this.bill[i] * percentage;
     this.finalValues[i] = this.bill[i] + this.bill[i] * percentage;
}
}
}

john.tipCalculator();
console.log(john);


var mark = {
    bill: [77, 475, 110, 45],
    tipCalculator: function(){
        this.tips=[];
        this.finalValues=[];
        for (var i = 0; i<this.bill.length; i++)
        {
            //Determine percentage based on tipping rules 
            var percentage;
            
            
        if (this.bill[i]<100) {
            percentage = 0.2;
        } else if (this.bill[i] >100 && this.bill[i] <300) {
            percentage= 0.1;
        } else {
        percentage = 0.25;
    }

    // Add results to the corresponing arrays 
     this.tips[i] = this.bill[i] * percentage;
     this.finalValues[i] = this.bill[i] + this.bill[i] * percentage;
}
}
}

john.tipCalculator();
mark.tipCalculator();
console.log(john);
// to find the average 

function calcAverage(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){ 
          sum = sum + tips[i];
    }
    return sum/tips.length;

}

 
mark.average = calcAverage(mark.tips);
john.average = calcAverage(john.tips);

if(mark.average> john.average){
    console.log('Mark tips greater with '+ mark.average )
} else if(john.average > mark.average){
    console.log('John tips higher with ' + john.average)
} else {
    console.log('The both tip evenly')
}
*/


/********************************************************* */
/*End of Section 1 
Beginning of Section 2 
 Javascript Versions 
 
 History of Javascript : Released in 1995 and was know as liveScript 
 Changed to Javascript to help remebrance through java.
 1997 ES 1 
 2009 ES 5 
 2015 ES6/ES2015 changed to an annual cycle.
 ES6, ES7, ES8
 

 ---------------------JAVASCRIPT ENGINE OVERVIEW -------------------------------------
 Parser --------------------> Conversion to Machine Code -----------------------------> Code Runs 
        Abstract syntax tree                                   Machine Code 

        EXECUTION CONTEXTS AND THE EXECUTION STACK
Execution Context: A box,container which a piece of our code is evaluated and executed.
The Default is the Global Execution Context.
    Codes that aren't inside any function 
    Associated with the global object 
    In the browser it's called the window object
    lastName === window.lastName... that's the same global value 

Creating 
Execution Context with An Object 
Variable Object (VO)
Scope Chain 
"This" variable 
Global Object and theres a varialbe this greated once you run javascript 

*/
/// Lecture: Hoisting 
/*
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 -year);
}


//retirement(1956); only functions would work 
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);
*/

// variables 
/*
console.log(age);
var age = 23; 
console.log(age);

functoin foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/
/*
/////////////////////////////////////
// Lecture: Hoisting

/*
// functions
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}
// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
// variables
console.log(age);
var age = 23;
function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping

/*
// First scoping example
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a +  " " + b + c);
    }
}
*/
// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}

*/



/////////////////////////////////////
// Lecture: The this keyword
/* Syntax Parser: 
A program which reads your codes and determines if it's grammar is valid. 

A program that reads your code and determines what it does and if its grammer 
is valid. : Your code isn't magic. Someone else wrote a program to translate if 
for the computer. The Programs are called compliers. 
Your code would actually be translated to what the computer can read. (Binary Codes)


Lexical Environment: 
Where something sits physical in the code you write.

EXECUTION CONTEXT: 
A wrapper to help manage the code that is running. There are lots of lexical environments. 
Which one is currenlty running is managed via execution contexts. Contains 
what is runing your code and beyord what you've written in your code. 

NAME / VALUE PAIRS AND OBJECTS 
The name which maps to unique value. Might be more than once but only have one value 
in any given context. 
eg Address = '100 main st'  -- main value pair 

OBJECT: 
A collection of name value pairs. 
Address: {
    street: 'Main',
    number: 100,
    Apartment: {
        Floor: 3, 
        Number: 301
    }
}

JAVASCRIPT GLOBAL ENVIRONMENT 
Execution Context (Global): 
The base execution context is the global execution context. 
The global Execution Context creates two things whenever your code is run 
Global Obeject 
'this' - variable .
Global means not inside a function.
you can check if its global by window.variable

CREATION AND 'HOISTING' 

var a = 'Hello World!';

function b() {
    console.log('Called b!);
}

b();
console.log(a);

Hoisting: 
you can call the function even before its being executed. 
Its still better to write the code sequentially. 
Happens for varibles in only  defining the variable not in giving it 
values. 
Variables and functions are set up before being used, variables would be set 
up as undefined.

UNDEFINIED 
underfined is a special value javascript has to mean the variable hasn't been 
defined.

INVOCATION: 
Running / Calling a function using ();

EXECUTION STACK

    functionb() {
    }
    function a(){
        b();
    }
    a();

    if you run this code for following would happen 
    1. Global Execution Context would be created 
    2. when it hits a(); a new context is created on top of the execution
    stack and remains active till it completes and is popped off. 
    3. enters another execution context b()  and runs it till it's popped off 
    then goes back to complete the a();
    
    The order lexically doesn't matter.



VARIABLE ENVIRONMENT 
    Where the varibales live.
    
    function b() {
        var myVar; 
        console.log(myVar);
    }
    
    function a() {
        var myVar = 2; 
        console.log(mvVar);
        b();
    }
    var myVar = 1;
    console.log(myVar);
    a();

    From the Execution Stack Rule the following would happen when the code is 
    executed 
    1.Global Executon Stack: Javascript would first of all go to the global varialbe myVar = 1
    ie that would be the first line of code to be run, the exeution stack would be popped 
    off once completed and on to the next one 
    2. a() execution stack: Javascript would start executing the next code which is a();
    thereby setting myVar = 2; after which function b() would be called 
    3 b() execution stack: myVar would be set to undefined.

    what happens when we add  
    console.log(myVar); at the end of the code 
    the code would be myVar = 1 since the b() and a() execution context 
    have been popped off the stack and the current execution context would be 
    back to myVar = 1;

    
    ------------THE SCOPE CHAIN --------
    Keep looking for your outer refrence ie who created me for your values 

    function b() {
        console.log(myVar);
    }
    
    function a() {
        var myVar = 2; 
         b();
    }
    var myVar = 1;
    a();

    What's expected of this code when it runs ;
    myVar = 1; but that seems strange, that's when the concept of scope chain
    comes in. 
    Every execution stack has a outer refrence for back up, it searches for the 
    missing var or missing declaration in it's outer environment.

    Take for instance function b was inside the lexical environment of functon
    a. myVar external/outer  environment would now be  from function a and no longer from 
    from the global environment meaning myVar = 2 instead of 1.

    function b() {
        console.log(myVar);
    }
    
    function a() {
         function b() {
        console.log(myVar); // outer environment now is function a 
    }
        var myVar = 2; 
         b();
    }
    var myVar = 1;
    a();

    Also please note you can not call function b directly as it would not be seen 
    in the global environment ie b(); would be undefined

    
    --------------- SCOPE, ES6 AND let----------------
    SCOPE: 
        Where a variable is availabe in your code. 

    LET : 
        New way to declare varaible in ES6. 



------------THIS KEYWORD ------------------
Regular Function call: the this keyword points at the global object 

Method Call: the this variable points to the object that is calling the method 
like in the case of this.bills

this keyword is not assigned a value until a functon where it is defined is called
*/
//console.log(this);


/*

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - 
            this.yearOfBirth);

            function innerFunction() {
                console.log(this); // the this variable now would be the normal 
                // global window due to the fact it's inside a regular javascript functoin 
                // and not a method. this would refer to the object when it's inside a 
                // javascript method. 
                
            }
            innerFunction();
    }
}

john.calculateAge();

// The this variable is going to be the John object that is calling the method 
// for the 

*/F

















//*/



/*
//console.log(this);
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/





//SCOPING 
/*   
Two types of scope.

Local scope - decalared within a javascript function
Global scope - declared outside a function



*/
