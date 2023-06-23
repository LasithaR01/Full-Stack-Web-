/*var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body');

setInterval(function () {
    if (isYellow) {
        bodyElement.style.background = 'white';
    } else {
        bodyElement.style.background = 'yellow';
    }
    isYellow = !isYellow;
},1000);

var selectWithId = document.getElementById('oakParagraph');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);*/

///MANIPULATION METHODS///

///EVENT HANDLERS///

/*var button = document.querySelector('#btn1');
var title = document.querySelector('#OAKTitle');

button.addEventListener('click', function () {
    console.log('You clicked the button');
    title.style.backgroundColor = 'red'
});

var listParent = document.querySelector('ul');
    listParent.addEventListener('click', function () {
    console.log('You clicked the ul');
    listParent.style.backgroundColor = 'blue';
})

///QUIZ SOLUTION///
var listItems = document.querySelectorAll ('li');
console.log('listItems',listItems);

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function (){
        this.style.color = 'white';
    })
}

var oakParagraph = document.querySelector('#oakParagraph');

function toggleBackground() {
    oakParagraph.classList.toggle('toggleBackground');
    }

oakParagraph.addEventListener('click', toggleBackground);

oakParagraph.addEventListener('click', toggleBackground ());*/

var todoListItems = document.querySelectorAll('.todoItem');

for (var i = 0; i < todoListItems.length; i++) {
  todoListItems[i].addEventListener('mouseover', function () {
    this.style.backgroundColor = 'blue'
    this.style.color = 'white'
  })

  todoListItems[i].addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white'
    this.style.color = 'black'
  })

  todoListItems[i].addEventListener('click', function () {
    this.classList.add('okay');
  })
}
