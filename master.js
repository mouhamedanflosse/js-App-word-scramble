// let inp = document.querySelector(".wrapper input"),
//   chuffWord = document.querySelector(".chuffled-letters"),
//   hint = document.querySelector(".hint"),
//   refreshBtn = document.querySelector(".refresh-wrd"),
//   checkBtn = document.querySelector(".check-wrd"),
//   leftTime = document.querySelector(".left-time span"),
//   time,
//   currentWrd;
// // add the random word with relatable hint and time increament
// function initGame() {
//   let theWordkeys = Object.keys(words),
//     randomWord = theWordkeys[Math.floor(Math.random() * theWordkeys.length)],
//     wordArray = randomWord.split("");
//   currentWrd = randomWord;
//   for (let i = wordArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
//   }
//   chuffWord.innerText = wordArray.join("");
//   hint.innerText = `hint: ${words[randomWord]}`;
//   leftTime.setAttribute("max", "29");
//   timeCounter();
// }
// initGame();
// // refrishing page data and making next excution accessable for refreshing the time
// function refresh() {
//   inp.value = "";
//   initGame();
// }
// // counting and clearing the time
// function timeCounter() {
//   leftTime.innerText = leftTime.getAttribute("max");
//   clearInterval(time);
//   time = setInterval(() => {
//     if (leftTime.textContent > 0) {
//       return (leftTime.textContent -= 1);
//     }
//     clearInterval(time);
//     leftTime.innerText = leftTime.getAttribute("max");
//     alert("Full time !");
//     initGame();
//   }, 1000);
// }
// function checkWrd() {
//   inp.value === currentWrd
//     ? alert("the word is matched")
//     : inp.value.match(/\s+/) || inp.value == ""
//     ? alert("emtpy value")
//     : alert("the word is not matched");
//   refresh();
// }
// refreshBtn.addEventListener("click", refresh);
// checkBtn.addEventListener("click", checkWrd);
// let correctWord,
// hint = document.querySelector(".hint"),
// chuffword = document.querySelector(".chuffled-letters"),
// refreshwrd = document.querySelector(".refresh-wrd"),
// inp = document.querySelector(".wrapper input"),
// leftTime = document.querySelector(".left-time span"),
// checkwrd = document.querySelector(".check-wrd"),
// time;
// function wordScramble() {
//   let wordkeys = Object.keys(words),
//   randomWord = wordkeys[Math.floor(Math.random() * wordkeys.length)]
//   let wrdHint = words[randomWord]
//   correctWord = randomWord
//   let wordArray = randomWord.split("")
//   for (let i = wordArray.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]]
//   }
//   chuffword.innerText = wordArray.join("")
//   hint.innerText = `hint: ${wrdHint}`
//   decreamentCounter()
//   inp.setAttribute("maxlength",correctWord.length)
// }
// wordScramble()
// function refreshBtn() {
//   wordScramble()
//   leftTime.innerText = "29"
//   inp.value = ""
// }
// function decreamentCounter() {
//   clearInterval(time)
//   time = setInterval(() => {
//     if (leftTime.textContent > 0){
//      return leftTime.textContent -= 1
//      }
//      clearInterval(time)
//      alert("Full time!")
//      refreshBtn()
//   }, 1000);
// }
// function checkBtm() {
//   inp.value == correctWord
//   ? alert("congratulation the words is matched")
//   : inp.value.match(/\s+/) || inp.value == ""
//   ? alert("you are entering an empty value")
//   : alert("the words is NOT matched")
//   refreshBtn()
// }
// refreshwrd.addEventListener("click", refreshBtn)
// checkwrd.addEventListener("click", checkBtm)
// // excute checkBtm function by clicking on the enter key
// inp.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     checkBtm()
//   }
// })
let correctWrd,
  chuffword = document.querySelector(".chuffled-letters"),
  wordhint = document.querySelector(".hint"),
  leftTime = document.querySelector(".left-time span"),
  refreshBtn = document.querySelector(".refresh-wrd"),
  checkBtn = document.querySelector(".check-wrd"),
  inp = document.querySelector("input"),
  time;
function wordScramble() {
  let wordkeys = Object.keys(words),
    randomWord = wordkeys[Math.floor(Math.random() * wordkeys.length)];
  correctWrd = randomWord;
  hint = words[correctWrd];
  randomArray = randomWord.split("");
  for (let i = randomArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }
  chuffword.innerText = randomArray.join("");
  wordhint.innerText = `hint: ${hint}`;
  timeDecrement();
}
wordScramble();
function refresh() {
  inp.value = "";
  leftTime.textContent = "29";
  wordScramble();
}
function check() {
  inp.value == correctWrd
    ? alert("congratulation the words is matched")
    : inp.value.match(/\s*/) || inp.value == ""
    ? alert("empty value")
    : alert("the words is not matched");
  refresh();
}
function timeDecrement() {
  clearInterval(time);
  time = setInterval(() => {
    if (leftTime.textContent > 0) {
      return (leftTime.textContent -= 1);
    }
    clearInterval(time);
    alert("Full Time !");
    refresh();
  }, 1000);
}
refreshBtn.addEventListener("click", refresh);
checkBtn.addEventListener("click", check);
inp.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    check();
  }
});
