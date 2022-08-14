let input_element = document.querySelectorAll("input");

input_element.addEventListener("keyup", () => {
    input_element.setAttribute("value", input_element.value);
})