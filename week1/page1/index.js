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

// 이름창
const contentName = document.querySelectorAll('.content');

homeIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#ff0000';
  pointer.style.backgroundColor = '#ff0000'
  homeIcon.style.backgroundColor = 'transparent';
  pointer.style.top = homeIconPosition + "px";

  contentName.forEach((el, i)=>{
    contentName[i].classList.remove('selected');
  })
  contentName[0].classList.add("selected");
})

profileIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#0000ff';
  pointer.style.backgroundColor = '#0000ff';
  profileIcon.style.backgroundColor = 'transparent';
  pointer.style.top = profileIconPosition + "px";

  contentName.forEach((el, i)=>{
    contentName[i].classList.remove('selected');
  })
  contentName[1].classList.add("selected");
})

messageIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#00ff00';  
  pointer.style.backgroundColor = '#00ff00';
  messageIcon.style.backgroundColor = 'transparent';
  pointer.style.top = messageIconPosition + "px";

  contentName.forEach((el, i)=>{
    contentName[i].classList.remove('selected');
  })
  contentName[2].classList.add("selected");
})

helpIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#33ccff';
  pointer.style.backgroundColor = '#33ccff';
  helpIcon.style.backgroundColor = 'transparent';
  pointer.style.top = helpIconPosition + "px";

  contentName.forEach((el, i)=>{
    contentName[i].classList.remove('selected');
  })
  contentName[3].classList.add("selected");
})

settingsIcon.addEventListener('click', (e)=>{
  body.style.backgroundColor = '#ff9900';
  pointer.style.backgroundColor = '#ff9900';
  settingsIcon.style.backgroundColor = 'transparent';
  pointer.style.top = settingsIconPosition + "px";  

  contentName.forEach((el, i)=>{
    contentName[i].classList.remove('selected');
  })
  contentName[4].classList.add("selected");
})