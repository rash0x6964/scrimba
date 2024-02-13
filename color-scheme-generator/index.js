
let palettes = document.getElementById("body").getElementsByTagName("div")
let fotters = document.getElementById("footer").getElementsByTagName("div")
const colorPicker = document.getElementById("colorPicker")
const selecor = document.getElementById("colorType")
const btn = document.getElementById("getColorBtn")

function fetchColors(color, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < palettes.length; i++) {
            palettes[i].style.backgroundColor = data.colors[i].hex.value
            fotters[i].innerText = data.colors[i].hex.value
        }
    })
}


var selectedOption = "monochrome";

selecor.addEventListener("change", (e) => {
    selectedOption = e.target.value
})

btn.addEventListener('click', (e) => {
    console.log(selectedOption)
    fetchColors(
        colorPicker.value.substring(1),
        selectedOption
    )
})


