const info = document.getElementById('info');
const duplicateField = document.getElementById('duplicateField');
info.addEventListener('input', () => {
    duplicateField.textContent = info.value;
})
const buttonClear = document.getElementById('button_clear');
buttonClear.addEventListener('click', function (event) {
    console.log(info.value);
    info.value = "";
	duplicateField.innerHTML = "";
	event.preventDefault ();
})
