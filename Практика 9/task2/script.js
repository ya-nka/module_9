const consoleLog = document.querySelector(`#consoleLog`);

consoleLog.addEventListener(`click`, () => {
  alert(`Служит для вывода информации в консоль`);
});

const a_lert = document.querySelector(`#a_lert`);

a_lert.addEventListener(`click`, () => {
  alert(`простой способ вывести информацию`);
});

const promp_t = document.querySelector(`#promp_t`);

promp_t.addEventListener(`click`, () => {
  prompt(`нажмите ОК`);
});
