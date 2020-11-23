
let alarmBtn = document.getElementById("alarmBtn");
let alarmInput = document.getElementById("alarmInput");

let alarmTime;
let alarmSound;
alarmBtn.addEventListener('click', function() {
  //Store alarmTime input
  if (alarmInput.value != "") {
    alarmTime = alarmInput.value;
    //Turn on alarmLight when alarm set
    let alarmLight = document.getElementById("alarmLight");
    alarmLight.style.background = "limegreen";
    alarmLight.style.boxShadow = "0 0 10px lime";

    alarmSound = new Audio('alarm.mp3');

    modal.classList.remove('visible');
  } else {
    alarmInput.style.background = 'rgba(255, 0, 0, .5)';
  }
  
})

alarmInput.addEventListener('click', function() {
  if (alarmInput.style.background = 'rgba(255, 0, 0, .5)') {
    alarmInput.style.background = "";
  }
})

//Update currentTime to enable alarmTime match
setInterval(() => {
  let e = new Date();
  let currentTime;

  currentTime = append0s(e.getHours()) + ":" + 
                append0s(e.getMinutes());

  if (alarmTime === currentTime && alarmSound !== null) { alarmSound.play(); } 
}, 1000);


//Shut off alarm
let alarmOff = document.getElementById("alarmOff");
alarmOff.addEventListener('click', () => {
  alarmSound.pause();
  alarmSound = null;
  alarmLight.style.background = "grey";
  alarmLight.style.boxShadow = "";
  alarmTime = "";
  alarmInput.value = "";
})