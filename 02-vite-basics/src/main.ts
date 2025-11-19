
// document.querySelector<HTMLDivElement>('#app')!

// DOM DECLARATION ---------------------------------------------------------------------------------------------------------------------
const anchor = document.querySelector("a")!; //if you do not add ! then typescript below complain that anchor is possibly null. By ! you are saying it for sure exists as TS does not read .html first
console.log(anchor.href)
console.log(anchor.type) //HTMLAnchorElement

const form = document.querySelector('form')!; //HTMLFormElement
console.log(form)

const myOnlyForm = document.querySelector('.new-item-form') as HTMLFormElement; //per default Element (since I targetted class, class can be used on several html elements), that is why it is important to add as HTMLFormElement so TS knows it's a form, also, once you add as you no longer use ! since you are declaring you are sure it will be there of a certain type
console.log(myOnlyForm)
console.log("form children", myOnlyForm.children)
const typeInput = document.querySelector('#type') as HTMLSelectElement; //typecasting
const toFromInput = document.getElementById('tofrom') as HTMLInputElement; //typecasting
const amountInput = document.getElementById('amount') as HTMLInputElement; //typecasting 
const commentsInput = document.getElementById('comments') as HTMLTextAreaElement; //typecasting 
const newsletterCheckbox = document.getElementById('newsletter') as HTMLInputElement; //typecasting 
const wantsAssistance = document.querySelector('input[type="radio"]:checked') as HTMLInputElement; //typecasting 

// DOM HÄNDELSER ---------------------------------------------------------------------------------------------------------------------
myOnlyForm.addEventListener('submit', (e: Event) => { //as you have e.preventDefault() : Event
  e.preventDefault();
  
  console.log(typeInput?.value)
  console.log(toFromInput?.value);
  console.log(amountInput?.valueAsNumber); //so string input converts to number
  console.log(commentsInput?.value);
  console.log(newsletterCheckbox?.checked)
  if (wantsAssistance) {
    console.log(wantsAssistance.value);
} else {
    console.log('No radio button is selected');
}
})

const mainh1 = document.getElementsByClassName("main-h1")![0]
document.addEventListener("DOMContentLoaded", () => {
  mainh1.innerHTML = "New title"
})

const bkg = document.getElementsByClassName("main")[0] as HTMLDivElement;
bkg.style.backgroundColor = "yellow"


const colorButton = document.getElementById("color-button") as HTMLButtonElement;
colorButton.addEventListener("click", (): void => {
  bkg.style.backgroundColor = "pink"
});

document.addEventListener('DOMContentLoaded', () => {
  const titleChanger = document.getElementById("title-changer") as HTMLButtonElement; 

  const changeTitle = (): void => {
    mainh1.innerHTML = "Newest och newest title"
  }

  titleChanger.addEventListener("mouseover", changeTitle)
//------------------//
  const personalizedText = document.getElementById('personalized-text') as HTMLInputElement; //typecasting
  const output = document.getElementById('output') as HTMLParagraphElement;

  let text:string = "";
  personalizedText.addEventListener('keydown', (event: KeyboardEvent) => {
    text += event.key;
    output.innerHTML = text

    if(text === "blue"){
      bkg.style.backgroundColor = "blue"
    }
  })  
//------------------//
  const toDoItem = document.getElementById("to-do") as HTMLInputElement;
  const addToDoItem = document.getElementById("add-to-do") as HTMLButtonElement; 
  const toDoList = document.getElementById("shopping-list") as HTMLUListElement;

  let shoppingListArray: string[] = [];

  const addShoppingItem = () => {
    console.log(toDoItem.value)
    if (!shoppingListArray.includes(toDoItem.value)){
        shoppingListArray.push(toDoItem.value)
        console.log(shoppingListArray)
        displayToDoList()
    }
    addToDoItem.value = ""
  }
  addToDoItem.addEventListener("click", addShoppingItem)
  
  const displayToDoList = (): string => {
    let html = ""
    for (let oneItem of shoppingListArray){
        html += `<li id=${oneItem}>${oneItem} <span style="color:red">X</span></li>`
    }
    return toDoList.innerHTML = html
  }

  toDoList.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;

    if (target && target.id && shoppingListArray.includes(target.id)){
      shoppingListArray = shoppingListArray.filter(oneItem => oneItem !== target.id)
      console.log(shoppingListArray)
      displayToDoList()
    }

    if(target && target.tagName === "LI"){
      target.remove();
    }
  
  })



//DECLARING TYPES ---------------------------------------------------------------------------------------------------------------------
//EXPLICIT (longer code as you have to add a line with redeclaring value)
let dog: string;
dog = "retriever"
console.log(typeof dog)

//IMPLICIT (you give value straight a way)
let person = "Petra";
//person = 23
console.log("Hello " + person)

//COMBINATION OF BOTH (called strongtyping and is redundant)
let num: number = 35;
console.log(num - 3)

let list: number[] = [1,2,3]
console.log(list)


//ADVANCED TYPES
//INTERFACE - used for objects
interface Car {
  year: number;
  model: string;
  electric: boolean;
}

// let car: Car 
let car: Car = {year: 2025, model: "Volvo", electric: true};
console.log(car.electric)

interface Person {
  first: string;
  last: string;
  [key: string]: any
}

const person1: Person = {
  first: "Petra",
  last: "Söderström"
}

const person2: Person = {
  first: "Jeff",
  last: "Doe",
  role: "teacher"
}
console.log(person1, person2)

//TYPE
type Brand = string
let handbag: Brand
handbag = 'Gucci'

type FontStyle = 'bold' | 'italic' //this is called union
let font: FontStyle
font = 'bold'

console.log(handbag, font)

// FUNCTIONS
function userDogAgeInput(x: number, y: number): string { //if you want the return type to be string
  return Math.pow(x, y).toString(); //then you have to convert the return result to string in the function body
}

userDogAgeInput(5,2) //na druhou

const add = (a: number, b: number) => {
  return a + b
};

const subtract = (a: number, b: number) => {
  return a - b
};

const result = add(subtract(5,1), 3)
console.log(result)

//VOID - if you do not return
function showConsole(person1: Person): void {
  console.log(person1.first)
}

showConsole(person1)

//ARRAY
const arr: number[] = [] //!!!! : number[]
arr.push(1)

//TUPPLE - fixed amount of items with fixed types in an array
type MyTupple = [number?, string?, boolean?]

const myList: MyTupple = [] //by had declared the ?, I have ensured I can start with an empty array here

myList.push(1, "hi", true)

//DO NOT SPECIFY TYPE YET
// class Observable <T> {
//   constructor(public value: T) {}
// }

// let x: Observable <number>;
// let y: Observable<Person>;
// let z = new Observable(23)
})
