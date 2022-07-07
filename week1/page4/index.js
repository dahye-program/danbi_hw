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
  return '<div class="customers_info"><div class="customers_name">'+value.Name+'</div>'+'<div class="customers_country">'+value.Country+'</div></div>'
})

customers.innerHTML = list.join('');

const ordersStatus = document.querySelectorAll('.orders_status');

ordersStatus.forEach((e, i)=>{
  if(ordersStatus[i].textContent === 'Delivered'){
    ordersStatus[i].style.backgroundColor = '#00ff00';
  }else if(ordersStatus[i].textContent === 'Pending'){
    ordersStatus[i].style.backgroundColor = '#ff6347';
  }else if(ordersStatus[i].textContent === 'Return'){
    ordersStatus[i].style.backgroundColor = '#ff0000';
  }else if(ordersStatus[i].textContent === 'In Progress'){
    ordersStatus[i].style.backgroundColor = '#448ccb';
  }else{}
})

const menubarActiveCheck = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');
const navcontent = document.querySelector('.navicontent');
const logocontent = document.querySelector('.titlecontent');
const navname = document.querySelectorAll('.navicontent');

menubarActiveCheck.addEventListener('click', ()=>{
  navigation.className === 'navigation' ? navigation.classList.add('on') : navigation.classList.remove('on');
  navigation.className === 'navigation on' ? logocontent.classList.add('none') : logocontent.classList.remove('none');
  navname.forEach((e, i)=>{
    navigation.className === 'navigation on' ? navname[i].classList.add('none') : navname[i].classList.remove('none');
  })
})
