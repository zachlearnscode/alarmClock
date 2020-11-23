
let clock = document.getElementById("display");

//Modify Date values to append 0s
let append0s = (num) => {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

setInterval (function getTime() {
  let d = new Date();
  let convertHours = (num) => {
    if (num > 12) {
      num = num - 12;
    }
    return num;
  }

  let getAmPm = () => {
    let ampm = "";
    if (d.getHours() < 12) {
      ampm = "a.m.";
    } else {
      ampm = "p.m.";
    }
    return ampm;
  }

  let h = convertHours(d.getHours());
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ampm = getAmPm();
  

  clock.innerText = append0s(h) + ":" + append0s(m) + ":" + append0s(s) + " " + ampm;
}, 1000);