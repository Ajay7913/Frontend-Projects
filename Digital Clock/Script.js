const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const ampm = document.querySelector("#ampm");

const update = () => {
  let date = new Date();
  let h = date.getHours();
  if (h >= 12) {
    ampm.innerText = "PM";
    h = h != 12 && h != 24 ? h % 12 : 12;
  } else ampm.innerText = "AM";

  hr.innerText = `0${h}`.slice(-2);
  min.innerText = `0${date.getMinutes()}`.slice(-2);
  sec.innerText = `0${date.getSeconds()}`.slice(-2);
};
setInterval(update, 1000);
window.onload = update();
