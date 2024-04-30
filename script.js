function createDiv() {
    const height = parseFloat(document.querySelector(".height").value);
    const width = parseFloat(document.querySelector(".width").value);
    const unit = document.querySelector(".unit").value;
    const div = document.createElement("div");
    if (typeof width === "number" && typeof height === "number") {
        if (width < 0 || height < 0) {
            alert ("dogru eded daxil ed");
        }
        else if(width >= 0 || height >= 0) {
            div.style.width = width + unit;
            div.style.height = height + unit;
            div.style.backgroundColor = "blue";

            const container = document.querySelector(".container");
            const oldDiv = container.querySelector(".created-div");

            if (oldDiv) {
                container.removeChild(oldDiv);
            }

            div.classList.add("created-div");
            container.appendChild(div);
        }
        else {
            alert ("dogru eded daxil ed");
        }
    
    }

}

