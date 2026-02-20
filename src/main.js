console.log("hi");

const inputTextE1 = document.getElementById("textinput");
const countE1 = document.getElementById("count");
const progressbarE1 = document.getElementById("progressbar");

console.log(inputTextE1);
// console.log(countE1);
// console.log(progressbarE1);

inputTextE1.addEventListener("input", (event) => {
  const textlength = event.target.value.length;
  countE1.innerHTML = textlength;

  progressbarE1.style.width = `${(textlength / 280) * 100}%`;

  if (textlength >= 1 && textlength <= 222) {
    progressbarE1.style.backgroundColor = "blue";
  } else if (textlength >= 223 && textlength <= 279) {
    progressbarE1.style.backgroundColor = "yellow";
  } else if (textlength >= 280) {
    progressbarE1.style.backgroundColor = "red";
  }

});
 

