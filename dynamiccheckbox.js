const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));

function handleCheck(event) {
  let inBetween = false;
  if (event.shiftKey && this.checked) { // Checks if Shift is pressed and checkbox is checked
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

