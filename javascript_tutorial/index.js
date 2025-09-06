console.log("Tanzed Hasan");

studentName = "Tanzed";
studentEmail = "tanzedhasan@gmail.com";
studentContact = "0102424244";

console.log(studentName);
console.table([studentName, studentEmail, studentContact]);
studentName = "tanzed";
console.log(studentName);

// alert("Assalamu Alaikum");
console.log(typeof studentName);

const student = {
  firstName: "Hasan",
  lastName: "kiron",
  age: 24,
  CGPA: 3.45,
};

console.log(student);
student.age = 25;
console.log(student.age);

// prompt("Write your name");
// let secondName = prompt("Write your second name");
// console.log(secondName);

// ------> task : print vouwel

const str = "ahdsiuhobudsfergoe";
const vowel = (str) => {
  for (char of str) {
    console.log(char);
  }
};

vowel(str);

//  forEach loop in Array -----------> forEach(callback function) --> Higher order function/method

arr = [1, 2, 3, 4];
arr.forEach(function printArray(val) {
  console.log(val);
});
//method-2
arr.forEach(
  (printArray = (val, i) => {
    console.log(val, i); // index by default
  })
);
//method-3
arr = ["dhaka", "Mym", "cTG"];
arr.forEach((val, idx, a) => {
  // (value,index,array) --> by dfault
  console.log(val.toUpperCase(), idx, a);
});

//          -----------map ----> similar to forEach but map create a new array

arr = [3, 4, 5, 6];
let newArr = arr.map((val) => {
  console.log(val);
});
console.log(newArr);
newArr = arr.map((val) => {
  return val + 2;
});
console.log(newArr);

// ---- filter        -- > check condition

newArr = arr.filter((val) => {
  return val % 2 == 0;
});
console.log(newArr);

//                 -----------------DOM---------------            access HTML code

console.log(window.document);

let heading = document.getElementsByClassName("heading1");
console.dir(heading);
console.log(heading);
let hell = document.getElementById("hell");
console.log(hell);
let para = document.getElementsByTagName("p");
console.log(para);
console.log(para[0].innerText);
console.log(para[1].innerText);

// qquerySelector

let firstBox = document.querySelector(".box"); // access first element
console.log(firstBox);
let allBox = document.querySelectorAll(".box");
console.log(allBox);
let firstPara = document.querySelector("p");
console.log(firstPara);

// properties

console.log(firstBox.tagName);
console.log(hell.tagName);
console.log(firstBox.innerText);
console.log(allBox.innerText); //will result in undefined or an error because: allBox is a NodeList, not a single element.innerText is a property of individual elements, not NodeList.

allBox.forEach((box) => {
  console.log(box.innerText);
});

console.log(firstBox.innerHTML);
allBox.forEach((box) => {
  console.log(box.innerHTML);
});

//  firstPara.innerText="New Java Script"    firstPara.innerText=firstPara.innerText + "New Java Script"    // --> for changing text

let hide = document.querySelector("#hidden");
console.log(hide.textContent); // access hidden element

//         attribute ---

let firstBoxClass = firstBox.getAttribute("class");
console.log(firstBoxClass);
let hellID = hell.getAttribute("id");
console.log(hellID);
let firstBoxName = firstBox.getAttribute("name");
console.log(firstBoxName);

let secondBox = allBox[1];
secondBox.setAttribute("name", "second"); // change attribute or set attribute
//  secondBox.setAttribute("class","second");
console.log(secondBox);

//     style --------

console.log(firstBox.style);
// firstBox.style.backgroundColor = "pink";
// firstBox.style.visibility = "hidden";

// --- insert element

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);
let container = document.querySelector(".container");
container.after(newBtn); // also have   .append .prepend .before

let hello = document.createElement("h1");
hello.innerText = "Hello Everyone";
document.querySelector("body").prepend(hello);

// remove element
// newBtn.remove();
// firstBox.remove();

//             ------------- Event handling ------------

let firstBtn = document.querySelector("#firstButton");

firstBtn.onclick = () => {
  console.log("You clicked the first button");
  prompt("Write your name:");
};

let secondBtn = document.querySelector("#secButton");

secondBtn.onclick = (evt) => {
  console.log(evt.type);
  console.log(evt.target);
};

firstBtn.addEventListener("click", () => {
  console.log("event listener first");
});

firstBtn.removeEventListener("click", () => {
  console.log("event listener first");
});

// alada func nile print hobe na

const fun = () => {
  console.log("event listener second");
};
secondBtn.addEventListener("click", fun);
secondBtn.removeEventListener("click", fun);

// dark light mode ----->

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "rgb(228, 202, 166)";
  }
  console.log(currMode);
});

// ---------------- prototype in object --------------

const employee = {
  company: "Beximco",
  calTax: () => {
    console.log("tax of beximco company");
  },
  salarry: 50000,
};

const tanzed = {
  name: "Tanzed",
};
const hasan = {
  name: "Hasan",
};

tanzed.__proto__ = employee; // by using this tanzed obj can access the func and methods of employee obj
hasan.__proto__ = employee;
console.log(tanzed.company);
console.log(tanzed.calTax());
console.log(hasan.salarry);

//         ---------- class ------------

class car {
  start() {
    console.log("start car");
  }
  stop = (person) => {
    console.log(person + " stop car");
  };
}

let myObj = new car(); // class to object
console.log(myObj.start());
console.log(myObj.stop("Tanzed"));

//   inheritance

class parent {
  father(name) {
    console.log("Father's name is " + name);
  }
  mother(name) {
    console.log("Mother's name is " + name);
  }
}

class child extends parent {} // child can access parent's properties
let child_obj = new child();
console.log(child_obj.father("Azad"));

// overriding

class baby extends parent {
  mother() {
    console.log("Hello mother");
  }
}
let babyObj = new baby();
console.log(babyObj.mother()); // same nam er function parent and chind e thakle child er ta use hobe

// // synchronous code  =  line by line execute
// console.log("1");
// console.log("2");
// console.log("3");

// // asynchronous code = kono line/fun/method deri hole porer gula execute hote thakbe
// function asynFunc(data) {
//   console.log("1");
//   console.log("2");
//   setTimeout(() => {
//     console.log("your data is ", data);
//   }, 2000); //2s
//   console.log("3");
//   console.log("4");
// }

// // callback hell

// function getData(data, nextData) {
//   setTimeout(() => {
//     console.log("Your Data is ", data);
//     if (nextData) {
//       nextData();
//     }
//   }, 2000);
// }
// //  2s por por akta data asbe,,, username check kore koyek secend por password check
// getData(1, () => {
//   console.log("getting data 2 ....");
//   getData(2, () => {
//     console.log("getting data 3 ....");
//     getData(3);
//   });
// });

//  ------------ promise ------------  use to solve the problem of callback hell

let promise1 = new Promise((resolve, reject) => {
  console.log("I am promise");
  // console.log(promise1);    --> pending state in console
  // resolve(123);
  // reject("some error in promise");
});

function promiseFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === "null") {
        reject("error in the promiseFunc");
        console.log("error in the promiseFunc");
      } else {
        console.log("Date found -> " + data);
        resolve("Date found -> " + data);
      }
    }, 5000);
  });
}

//         ------------------ async await ------------------

async function myFunc() {
  console.log("This is async function");
}
// myFunc();    // return also a promise function

// await   -- pused untill the promise settled

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data received");
      resolve("success");
    }, 2000);
  });
}

// await api();                    not worked
async function getWeatherData() {
  await api(); // console a api() ba getWeatherData() jekono akta call korlei hobe
}
async function getWeatherDataTwice() {
  await api();
  await api();
}
// another example
function getDataBYasync(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data === undefined) {
        reject("error in the getDataBYasync");
        console.log("Data is null");
      } else {
        console.log("Date found -> " + data);
        resolve("Data Found");
      }
    }, 2000);
  });
}

async function NOTasyncData() {
  getDataBYasync(1);
  getDataBYasync(2);
  getDataBYasync(3);
  getDataBYasync(4);
}

async function asyncData() {
  console.log("getting data 1....");
  await getDataBYasync(1);
  console.log("getting data 2....");
  await getDataBYasync(2);
  console.log("getting data 3....");
  await getDataBYasync(3);
  console.log("getting data 4....");
  await getDataBYasync(4);
}

// ---------------------- Fetch API ---------------------

const URL = "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all";

let factBtn = document.querySelector("#fact-btn");
let factPara = document.querySelector("#fact-para");

const getFacts = async () => {
  let response = await fetch(URL);
  console.log(response); //JSON format
  let facts = await response.json();
  console.log(facts[0].width);
  // console.log(facts[0].url);
  factPara.innerText = facts[0].url;
};

factBtn.addEventListener("click", getFacts);
