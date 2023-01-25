"use strict";
const alarm = document.getElementById("alarm");
const btn = document.getElementById("btn");

function setAlarm() {
  let top = `${prompt("top?")}px`;
  let left = `${prompt("left?")}px`;

  if (top !== "nullpx" && left !== "nullpx" && top !== "px" && left !== "px") {
    alarm.style.top = top;
    alarm.style.left = left;
    alarm.firstChild.textContent = `${prompt("Text?")}`;
    alarm.style.height = "70px";
    alarm.style.width = "200px";
  }
}

btn.addEventListener("click", setAlarm);
