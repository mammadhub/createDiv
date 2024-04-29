function createDiv() {
    const height = document.querySelector(".height").value;
    const width = document.querySelector(".width").value;
    const unit = document.querySelector(".unit").value;
    const div = document.createElement("div");
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
