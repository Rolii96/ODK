const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
var x = ["Lets get in touch by contacting, or visiting us at our lovely enviroment."];
document.getElementById("demo").innerHTML = x;

var y=["Kosovë-Gjilan, Rruga Muharrem Ibrahimi 1/11"];
document.getElementById("text").innerHTML=y;

var z=["roland.ajeti@hotmail.com"];
document.getElementById("information").innerHTML=z;

var a=["045-447-162"];
document.getElementById("phone").innerHTML=a;