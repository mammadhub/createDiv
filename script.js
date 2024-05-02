const createDivButton = document.querySelector("button");
createDivButton.addEventListener("click", createDiv);
function createDiv() {
    const input1 = document.querySelector(".width");
    const input2 = document.querySelector(".height");
    const input3 = document.querySelector(".borderradius");
    const input4 = document.querySelector("#backgroundColor");
    const unit = document.querySelector(".unit").value;
    const width = parseFloat(input1.value);
    const height = parseFloat(input2.value);
    const borderRadius = parseFloat(input3.value);
    const div = document.createElement("div");
    if (!isNaN(width) && !isNaN(height) && !isNaN(borderRadius) && width >= 0 && height >= 0 && borderRadius >= 0) {
        div.style.width = width + unit;
        div.style.height = height + unit;
        div.style.borderRadius = borderRadius + unit;
        div.style.backgroundColor = input4.value;
        div.classList.add("created-div");
        const container = document.querySelector(".container");
        const oldDiv = container.querySelector(".created-div");
        if (oldDiv) {
            container.removeChild(oldDiv);
        }
        container.appendChild(div);
    } else {
        input1.style.border = "2px solid red";
        input2.style.border = "2px solid red";
        input3.style.border = "2px solid red";
        input4.style.border = "2px solid red";
    }
}
