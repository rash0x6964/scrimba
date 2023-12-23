const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
]

const cpyTxt_1 = document.querySelector("#firstHolder")
const cpyTxt_2 = document.querySelector("#secondHolder")
const generateBtn = document.querySelector("#mainBtn")

const copy = async (container) => {
  const input = container.querySelector("input")
  input.select()
  try {
    document.execCommand("copy")
    // await navigator.clipboard.writeText(input.value)
    container.classList.add("active")
    window.getSelection().removeAllRanges()
    setTimeout(() => {
      container.classList.remove("active")
    }, 1000)
  } catch (err) {
    console.log("unable to copy text", err)
  }
}

cpyTxt_1.querySelector("button").addEventListener("click", () => {
  copy(cpyTxt_1)
})
cpyTxt_2.querySelector("button").addEventListener("click", () => {
  copy(cpyTxt_2)
})

function getRandomPass(len) {
  let newPass = ""

  for (i = 0; i < len; i++)
    newPass += characters[Math.round(Math.random() * characters.length)]

  return newPass
}

generateBtn.addEventListener("click", () => {
  cpyTxt_1.querySelector("input").value = getRandomPass(30)
  cpyTxt_2.querySelector("input").value = getRandomPass(30)
})
