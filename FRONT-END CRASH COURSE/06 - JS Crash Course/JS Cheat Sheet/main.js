console.log('Hello World');
console.error('This is an error.');
console.warn('This is a warning.');


//VARIABLES:
let age=30;  //you can change value later 
age=31;
console.log(age); 
const weight=30;  //you can't change value later, its constant and you must give a value
/* weight=31; 
console.log(weight);*/


// DATA TYPES: String, Numbers, Boolean, null, undefined, Symbol 
const name = 'John';
const a = 30;
const rating = 4.5; //no float, inter data types, just Number 
const isCool = true;
const x = null;
const y = undefined;
let z;  //also undefinded
console.log(typeof rating);


//SOME STRING METHODS
const s = 'Hello World';
console.log(s.length); // length is a property 
console.log(s.toUpperCase()); // toUpperCase is a function
console.log(s.substring(0, 5).toUpperCase()); // divides string
// functions can be chained
const s2 = 'js, react, java'
console.log(s.split('')); // splits the items in string as array
console.log(s2.split(', '));// you can also split with given end 


//ARRAYS
const numbers = new Array(1,2,3,4,5); //array constructor
console.log(numbers);
const fruits = ['apples', 'oranges', 5, null];
//const fruits = []; you can add values to array but you can't reasign the array
fruits[3] = 'grapes';
console.log(fruits[3]); // arrays start with 0
fruits.push('mangos'); // to add item end of the array
//furis.pop('mangos'); //pops the last element of the array
fruits.unshift('strawberries') // to add an item to start of the array
console.log(fruits); // arrays can store multiple variable types
console.log(Array.isArray(fruits)); //cheacks if data array or not
console.log(fruits.indexOf('oranges')); //returns the index of the array element
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale); //concate two arrays
console.log(children);

//OBJECT LITERALS
const person = {
    firstName: 'John',
    lastName: 'Doe',
    agex: 30,
    hobbies: ['music','movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lastName);//to access a single value use '.'
//you can use multiple with ','
console.log(person.hobbies[1]);
console.log(person.address.city);
//destructuring
const {firstName, lastName, address:{city}} = person; //pulls firstName and lastName out
console.log(city);
person.email = 'john@gmail.com';
console.log(person);

//ARRAY OF OBJECTS & JSON
const todos = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist',
        isCompleted: false
    }
]
console.log(todos[0].text);
const todoJSON = JSON.stringify(todos); //JSON converter
console.log(todoJSON);


//LOOPS
//FOR
for(let i=0; i<10; i++) {
    console.log('For loop: '+ i);
}
//WHILE
let i = 0;
while(i<10){
    console.log('While loop: '+ i);
    i++;
}
//LOOP THROUGH ARRAYS
for(let i=0; i<todos.length; i++) {
    console.log(todos[i].text);
} //not best
for(let todo of todos){
    console.log(todo.text);
} //much better


//HIGH ORDER ARRAY METHODS
//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text)
}); //better with arrow functions
const todoText = todos.map(function(todo){
    return todo.text
}); //return selecterd elements as an array
console.log(todoText);
const todoIsComplete = todos.filter(function(todo){
    return todo.isCompleted == true;
}); //return some filtered elements of array
console.log(todoIsComplete);
//you can chain this methods
const todoIsCompleteText = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text
})
console.log(todoIsCompleteText);


//CONDITIONALS
const t = 20;
const u = 11;
if(t === 10 || u > 10){ //=== matches the data types and data value
// '||' is or and '&&' is and
    console.log('x equals 10 or u is greater than 10')
}else if(t > 10){
    console.log('x is greater than 10')
}
else{
    console.log('x is less than 10')
}
//ternary operator (shorthand if statement)
const r = 9;
const color = r > 10 ? 'red' : 'blue';
//'?' is than, ':' else
console.log(color);
//switches
switch(color) { // switch case
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is nor red,blue');
}


//FUNCTIONS
function addNums(num1 = 1, num2 = 1){ //you can initalize values than override it
    return num1 + num2;
}
console.log(addNums(5,4));

//same function with ARROW FUNCTION
const addNumsArrow = (num1 = 1, num2 = 1) => { //you can delete {} adn return also works
    return num1 + num2;
}
console.log(addNumsArrow(5, 5));
const addNumsArrow2 = num1 => num1 +5;
console.log(addNumsArrow2(6));
todos.forEach((todo) => console.log(todo));

//CONSTRUCTOR FUNCTIONS & PROTOTYPES
function Person(fName, lName, dob) {
    this.fName = fName;
    this.lName = lName;
    this.dob = new Date(dob); //date object
    /* this.getBirthYear = function() {  //We dont use this cause we create protoypes for this 
        this.dob.getFullYear();
    }
    this.getName = function(){
        return `${this.fName} ${this.lName}`;
    } */
}
//prototypes are used when we create a constructor but we dont want the function to be stored in every object so we store them in proto
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear(); 
}
Person.prototype.getName = function(){
    return `${this.fName} ${this.lName}`;
}
//Instantiate object
const person1 = new Person('ata','bayraktar', '13-2-1998');
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getName());

//ES6 CLASSES 
class Human{
    constructor(){
        this.fName = fName;
        this.lName = lName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear(); 
    }
    getName(){
        return `${this.fName} ${this.lName}`;   
    }
}


//WINDOW OBJECT & DOM
//Selectors
//Sıngle element
const form = document.getElementById('my-form'); //select things from document
console.log(form);
console.log(document.querySelector('h1')); //if there are more than one h1 it chooses first one be cause its a single selection
//Multiple element
console.log(document.querySelectorAll('.item'));
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
//ul.remove();
ul.lastElementChild.remove(); //remove last piece
ul.firstElementChild.textContent = 'hello'; //edit last piece
ul.children[1].innerText = 'sup'; //edit 2nd piece
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'//edit last piece with html
const btn = document.querySelector('.btn');
btn.style.background = 'red'; //cahnge style of selected

//EVENTS
btn.addEventListener('click', (e) => { //event the events function adn e is the constant
    //mouseover ve mouse ot hover yapıyor güzel
    e.preventDefault(); //submit button submits ona file so you need tp prevent behaveour
    //console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    //change the forms backgorund when click the button
    document.querySelector('body').classList.add('bg-dark');
    //change the bodys backgorund dolor to bg-dark class in css
});