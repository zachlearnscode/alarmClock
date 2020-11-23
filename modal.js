let modal = document.querySelector(".modal");
let setAlarm = document.querySelector(".setAlarm");
let x = document.getElementById("x");

setAlarm.addEventListener('click', function() {
  modal.classList.add('visible');
});

x.addEventListener('click', function() {
  modal.classList.remove('visible');
})