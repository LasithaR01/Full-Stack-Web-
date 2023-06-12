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
for (var i = 25; i <= 100; i++) {
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
}