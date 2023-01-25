"use strict";
let myData = [];

while (true) {
  let name = prompt("what is your name?");
  if (name) name.split(" ").join("");

  let age = prompt("How old are you?");
  if (age) age.split(" ").join("");

  if (name === null || name === "" || age === null || age === "") {
    myData.sort((a, b) => a.age - b.age);
    console.log(myData);
  }

  if (name === null || name === "" || age === null || age === "") break;

  let localObj = {
    name,
    age: Number(age),
  };
  myData.push(localObj);
  console.log(myData);
}
