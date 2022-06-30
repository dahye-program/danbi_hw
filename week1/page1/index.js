const body = document.querySelector('body');
const pointer = document.querySelector('#pointer');

// 메뉴바 아이콘들
const homeIcon = document.querySelector('.home_icon');
const profileIcon = document.querySelector('.profile_icon');
const messageIcon = document.querySelector('.message_icon');
const helpIcon = document.querySelector('.help_icon');
const settingsIcon = document.querySelector('.settings_icon');

// 메뉴바 아이콘들 위치
const homeIconPosition = homeIcon.getBoundingClientRect().top;
const profileIconPosition = profileIcon.getBoundingClientRect().top;
const messageIconPosition = messageIcon.getBoundingClientRect().top;
const helpIconPosition = helpIcon.getBoundingClientRect().top;
const settingsIconPosition = settingsIcon.getBoundingClientRect().top;

homeIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#ff0000';
  pointer.style.backgroundColor = '#ff0000'
  pointer.style.top = homeIconPosition + "px";
})

profileIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#0000ff';
  pointer.style.backgroundColor = '#0000ff';
  pointer.style.top = profileIconPosition + "px";
})

messageIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#00ff00';  
  pointer.style.backgroundColor = '#00ff00';
  pointer.style.top = messageIconPosition + "px";
})

helpIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#33ccff';
  pointer.style.backgroundColor = '#33ccff';
  pointer.style.top = helpIconPosition + "px";
})

settingsIcon.addEventListener('click', ()=>{
  body.style.backgroundColor = '#ff9900';
  pointer.style.backgroundColor = '#ff9900';
  pointer.style.top = settingsIconPosition + "px";  
})