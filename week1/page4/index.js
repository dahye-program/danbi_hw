import {CustomersData} from './Data/CustomersData.js';
import {OrdersData} from './Data/OrdersData.js';

// Recent Orders data
const orderstable = document.querySelector('.orders_wrap');
let orderslist = OrdersData.map((value)=>{
  return '<ul class="orders_table_content"><li class="orders_name">'+value.Name+'</li><li class="orders_price">'+value.Price+'</li><li class="orders_pament">'+value.Pament+'</li><li class="orders_status">'+value.Status+'</li></ul>';
})

orderstable.innerHTML = orderslist.join('');

// Recent Customers data
const customers = document.querySelector('.customers_wrap');
let list = CustomersData.map((value)=>{
  return '<div class="profile"><span><img src="imgs/profile.png" width="30px" height="30px"/></span><div class="customers_info"><div class="customers_name">'+value.Name+'</div>'+'<div class="customers_country">'+value.Country+'</div></div></div><br/>'
})

customers.innerHTML = list.join('');

// Recent Orders Status
const ordersStatus = document.querySelectorAll('.orders_status');

ordersStatus.forEach((e)=>{
  if(e.textContent === 'Delivered'){
    e.style.backgroundColor = '#00ff00';
  }else if(e.textContent === 'Pending'){
    e.style.backgroundColor = '#ff6347';
  }else if(e.textContent === 'Return'){
    e.style.backgroundColor = '#ff0000';
  }else if(e.textContent === 'In Progress'){
    e.style.backgroundColor = '#448ccb';
  }else{}
})

// 사이드바
const menubarActiveCheck = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');
const logocontent = document.querySelector('.titlecontent');
const navname = document.querySelectorAll('.navicontent');

menubarActiveCheck.addEventListener('click', ()=>{
  navigation.className === 'navigation' ? navigation.classList.add('on') : navigation.classList.remove('on');
  navigation.className === 'navigation on' ? logocontent.classList.add('none') : logocontent.classList.remove('none');
  navname.forEach((e)=>{
    navigation.className === 'navigation on' ? e.classList.add('none') : e.classList.remove('none');
  })
})
