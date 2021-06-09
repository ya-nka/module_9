const replace = document.querySelector('#replace');

replace.addEventListener(`click`, 
	function click (event) {
  this.textContent = prompt(`введите текст`);
  event.preventDefault();
});