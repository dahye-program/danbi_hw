const body = document.querySelector('body');

const homeIcon = document.querySelector('.home_icon');
const profileIcon = document.querySelector('.profile_icon');
const messageIcon = document.querySelector('.message_icon');
const helpIcon = document.querySelector('.help_icon');
const settingsIcon = document.querySelector('.settings_icon');

homeIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#ff0000';  
})

profileIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#0000ff';  
})

messageIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#00ff00';  
})

helpIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#ff9900';  
})

settingsIcon.addEventListener('click', ()=>{
  body.style.backgroundColor = '#ffffff';  
})