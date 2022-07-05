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
