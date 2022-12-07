let A = document.querySelector("a");

let counter = setTimeout(sayMsg, 3000);
function sayMsg() {
  document.links[0].click();
}

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};
