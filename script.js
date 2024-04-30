function createDiv() {
    const input1 = document.querySelector(".width");
    const input2 = document.querySelector(".height");
    const height = parseFloat(document.querySelector(".height").value);
    const width = parseFloat(document.querySelector(".width").value);
    const unit = document.querySelector(".unit").value;
    const div = document.createElement("div");
    if (typeof width === "number" && typeof height === "number") {
        if (width < 0 || height < 0 || width===" " || height=== " ") {
            input1.style.border = "3px solid red";
            input2.style.border = "3px solid red";
            alert ("dogru eded daxil ed");
        }
        else if(width >= 0 || height >= 0) {
            div.style.width = width + unit;
            div.style.height = height + unit;
            div.style.backgroundColor = "blue";
            div.style.borderRadius = "1rem";

            const container = document.querySelector(".container");
            const oldDiv = container.querySelector(".created-div");

            if (oldDiv) {
                container.removeChild(oldDiv);
            }

            div.classList.add("created-div");
            container.appendChild(div);
        }
        else {
            input1.style.border = "3px solid red";
            input2.style.border = "3px solid red";
        }
    
    }

}

