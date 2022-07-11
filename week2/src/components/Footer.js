import React from 'react';
import styles from './Footer.css'
import OrdersData from '../data/OrdersData'
import CustomersData from '../data/CustomersData';

const Footer = () => {
  return(
    <div class="details">
        <div class="orders">
          <div class="orders_container">
            <h2 class="orders_title">Recent Orders</h2>
            <button>View All</button>
          </div>
          <div class="orders_table_title">
            <h4 class="title">Name</h4>
            <h4 class="title">Price</h4>
            <h4 class="title">Payment</h4>
            <h4 class="title">Status</h4>
          </div>
          {OrdersData && OrdersData.map((e)=>{
            return(
              <div class="orders_wrap">
                  <ul class="orders_table_content">
                    <li class="orders_name">{e.Name}</li>
                    <li class="orders_price">{e.Price}</li>
                    <li class="orders_pament">{e.Pament}</li>
                    <li class="orders_status">{e.Status}</li>
                  </ul>
              </div>
            )})}
      </div>
        <div class="customers">
          <h2 class="customers_title">Recent Customers</h2>
          <div class="customers_profile">
            <div class="customers_wrap">
              {CustomersData && CustomersData.map((e)=>{
                return(
                <div class="profile">
                  <span><img src="images/profile.png" alt='프로필 사진'/></span>
                  <div class="customers_info">
                    <div class="customers_name">{e.Name}</div>
                    <div class="customers_country">{e.Country}</div>
                    </div>
                </div>
                )})}
              </div>
            </div>
          </div>
    </div>
  );
}

export default Footer;