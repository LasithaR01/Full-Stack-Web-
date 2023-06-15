/*var name = 'Alex';
console.log(name);

var schoolTeam = 'basketball';
var schoolNumber= 20;

var isRegistered = true;
console.log('isRegistered');
console.log(schoolNumber);

var job;
console.log(job);

job = 'student';
console.log(job);

console.log(name +' '+ schoolNumber);

alert(schoolTeam); */

//BASIC OPERATORS//

/*var distanceAlex= 20-12;
console.log(distanceAlex);*/

//LOGICAL OPERATORS//

/*var distanceToSchool, distanceToHome;

distanceToHome = 14;
distanceToSchool = 6;

var isCloser= distanceToHome < distanceToSchool;
console.log(isCloser); */

/*var gradeAlex = (80 + 90 + 95) /3;
var gradeSara = (89 + 76 + 98) /3;
var gradeNancy = (42 + 98 + 83) /3;

console.log('Alex avarage grade', gradeAlex);
console.log('Sara avarage grade', gradeSara);
console.log('Nancy avarage grade', gradeNancy);*/

/*if (gradeAlex > gradeSara && gradeAlex > gradeNancy) {
    console.log('Alex has the highest grade',gradeAlex);
}
 else if (gradeSara > gradeAlex && gradeSara > gradeNancy) {
    console.log('Sara has the highest grade',gradeSara);
} 
else if (gradeNancy > gradeAlex && gradeNancy gradeSara) {
    console.log('Nancy has the highest grade',gradeNancy);
} 
else if {
    console.log('Maybe there is same Average')
}*/

///WHILE LOOPS///

/*var number = 1;

while (number < 11){
console.log(number);
number++; //number = number + 1
}*/

/*var number = 132;

while(number < 149){
    console.log(number);
    number +=2;
}

console.log('Number Divisible By 7');

var count = 25;

while (count <= 100) {
    if (count % 7 === 0){
      console.log(count);
    }

    count++;
} */

/*for (var i = 132; i <= 148; i++) {
    if (i % 2 !== 0){
        console.log(i);
    }
}

for (var number = 1; number < 11; number++) {
    console.log(number);
}*/

/*for (var i = 25; i <= 100; i++) {
    if ((i % 7 === 0) && (i % 5 === 0)) {
        console.log(i);
    }
}
 
console.log('continue statement');

for (var i = 1; i<= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

console.log('break statement');

for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        break;
    }
}*/

/// FUNCTIONS ///

/*function sayHello(){
    console.log('Hello World');
}

sayHello();*/

/*function doSomething () {
    console.log('Hello world');
    console.log('goodbye World');
    console.log('How are you?');
}

doSomething ();
doSomething ();
doSomething ();
doSomething ();*/

/*function sayHi (name) {
    console.log('Hi' + ' ' + name);
}

sayHi('Lasitha');

function cude (number) {
    console.log(number * number * number);
}

cude(4);*/

///FUNCTIONS RETURN KEYWORD///

/*function cude (number) {
    return(number * number * number);
}

console.log(cude(4));*/

///FUNCTION DECLARATION AND EXPRESSION///

/*function declaration
function calculateAge(birthYear) {
    return 2020 = birthYear;
}*/

//function expression
/*var calculateAge = function (birthYear) {
return 2020 - birthYear;
}

var age = calculateAge (1981);
console.log(age);

calculateAge = 'John';
console.log(calculateAge);

var Age = calculateAge (1990);*/

/*function subtraction (X, Y) {
return Y - X;
}

var result = subtraction (18, 97);
console.log(result);

var isOdd = function (number){
if (number % 2 !== 0) {
    return true;
}    
    return false;
}

console.log(isOdd(5));*/

///FUNCTION SCOPE///

/*function sayName() {
    var Name ='Lasitha';
    console.log(Name);
}

sayName ();
console.log(Name);

var Name = "Chamod"
console.log(Name);
sayName();*/

 /*var  Count = 18;
 console.log(Count);

 function writeCount () {
 console.log(Count);
 }

 writeCount (); */

 /*function sayHi (){
    var myWord = 'Hi there';
    console.log(myWord);
    sayBye ();

    function sayBye () {
        console.log(myWord);
    }

 }
 sayHi ();*/

 ///ARRAYS///

 /*var student1 = 'Sheldon'
 var student2 = 'Penny'
 var student3 = 'Leonard'
 var student4 = 'Raj'
 
 var students = ['Sheldon', 'Leonard', 'Penny', 'Raj'];
 
 //Sheldon = index 0
 //Leonard = index 1
 //penny = index 2
 //Raj = index 3
 
 console.log(students); 
 console.log(students[0]);

 students[0] = 'Amy';
 console.log(students);

 students[4] = 'lisa';
 console.log(students);*/

 ///ARRAYS METHODS///
 
 /*var students = ['Sheldon', 'Leonard', 'Penny', 'Raj'];

 //push method adds a new item to the end of an array//
 students.push('Bernadette');
 console.log(students);

 //pop method removes the last item from array//
var lastStudent = students.pop();
console.log(lastStudent);

//unshift adds new item to the beginning of array
var cats = ['cat1','cat2','cat3'];
cats.unshift('cat4');
console.log(cats);

//shift method removes item from beginning
cats.shift();
console.log(cats);

//indexof
console.log(students.indexOf('Sheldon'));

//slice

var friends = ['Rose','Rachel','Joey','Chandler'];
var closeFriends = friends.slice(1 ,3);
console.log(friends);
console.log(closeFriends);

var otherFriends = friends.slice();
console.log(otherFriends);*/

///ARRAY QUIZ///

/*var books = ['Harry Potter','Habbit','Hunger Game','Little Prince'];
console.log(books[books.length - 1]);

var films = [
    ['hobbit1', 'hobbit2', 'hobbit3'],
    ['matrix1', 'matrix2', 'matrix3'],
    ['godFather1', 'godFather2', 'godFather3']
]

console.log(films [2] [2]);*/

/*for (var i = 0; i < books.length; i++) {
    console.log(books[i]);
}

books.forEach(function () {
    console.log('mybooks');
});*/

var numbers = [];

for (var i = 0; i <= 20; i++) {
    numbers.push(i);
}

console.log(numbers);

numbers.forEach(function (number) {
    if (number % 5 === 0) {
        console.log(number);
    }
})



