let screen = document.getElementById("screen");
let screenValue = "";

 const backspace = () => {
    var val = document.getElementById("screen").value;
    document.getElementById("screen").value = val.substring(0, val.length-1)
 }
let buttons = document.querySelectorAll("button");
for (item of buttons) {
    item.addEventListener("click", (e) => {
        text = e.target.innerText
        if (text == "x") {
            text = "*";
            screenValue += text;
            screen.value = screenValue
        } else if (text == "=") {
            screen.value = eval(screenValue)
        } else if (text == "C") {
            screenValue = "";
            screen.value = screenValue
        } else if (text == "pow") {
            text ="**2"
            screenValue += text;
            screen.value = screenValue
        } else if (text == "Del") {
            backspace();
            console.log(screenValue)
            console.log(typeof screenValue)
            screenValue.split("");
            console.log(screenValue)
        }
        else {
            screenValue += text;
            screen.value = screenValue
        }
    })
}