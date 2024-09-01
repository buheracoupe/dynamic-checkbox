const checkboxElements = document.querySelectorAll("input[type='checkbox']");
const isShiftKeyPressed = false;//flag to check if the shiftkey is pressed, could not directly use eventListeners
const checkboxObjects = [];


checkboxElements.forEach((checkbox) => {
    const checkboxObject = {
        element: checkbox,
        isChecked: checkbox.checked
    }

    checkboxObject.toggleChecked = () => {
        checkboxObject.isChecked = !checkboxObject.isChecked;
    }
    checkbox.addEventListener("change", checkboxObject.toggleChecked)

    checkboxObjects.push(checkboxObject)
})



 window.addEventListener("keydown", (event) => {
    if(event.target === ""){
        isShiftKeyPressed = true;
    }
})
 window.addEventListener("keyup", (event) => {
    if(event.target === ""){
        isShiftKeyPressed = false;
    }
})
