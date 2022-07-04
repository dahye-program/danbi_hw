function clock(){
  let Hour = document.getElementById('hour');
  let Minute = document.getElementById('minute');
  let Second = document.getElementById('second');
  let AmPm = document.getElementById('amOrpm');

  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  Hour.innerText =  hours < 10 ? `0${hours}` : hours +` :`;
  Minute.innerText = minutes < 10 ? `0${minutes}` : minutes;
  Second.innerText = seconds < 10 ? `0${seconds}`: seconds;
  AmPm.innerText = hours > 12 ? `PM` : 'AM';  
}

clock();
setInterval(clock, 1000); // 1초마다 실행
