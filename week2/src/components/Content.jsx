import React from 'react';
import styles from '../styles/Content.css'
import CARD from '../data/CARDDATA'
import ORDERS from '../data/ORDERSDATA'
import CUSTOMERS from '../data/CUSTOMERSDATA';

const Content = ({menuName}) => {
  console.log(menuName);
  // menuName 이 'Dashboard' 일 때 Content 내용 return
  // 그 외에는 빈페이지 return 
  if(menuName === 'Dashboard'){
    return(
      <div className='main'>
      <div className="cardbox">
      {CARD && CARD.map((e, index)=>{
        return(
        <div key={index} className="card">
            <div className="card_wrap">
            <div className="card_content">
              <h2 className="card_value">{e.value}</h2>
              <h3 className="card_title">{e.title}</h3>
            </div>
            <img className="card_icon" src={e.src} alt='카드 아이콘'/>
          </div>
        </div> 
        );
      })}
      </div>
      <div className="details">
          <div className="orders">
            <div className="orders_container">
              <h2 className="orders_title">Recent Orders</h2>
              <button>View All</button>
            </div>
            <div className="orders_table_title">
              <h4 className="title">Name</h4>
              <h4 className="title">Price</h4>
              <h4 className="title">Payment</h4>
              <h4 className="title">Status</h4>
            </div>
            {ORDERS && ORDERS.map((e, index)=>{
              return(
                <div className="orders_wrap" key={index}>
                    <ul className="orders_table_content" >
                      <li className="orders_name">{e.Name}</li>
                      <li className="orders_price">{e.Price}</li>
                      <li className="orders_pament">{e.Pament}</li>
                      <li className="orders_status">{e.Status}</li>
                    </ul>
                </div>
              )})}
        </div>
          <div className="customers">
            <h2 className="customers_title">Recent Customers</h2>
            <div className="customers_profile">
              <div className="customers_wrap">
                {CUSTOMERS && CUSTOMERS.map((e, index)=>{
                  return(
                  <div className="profile" key={index}>
                    <span><img src="images/profile.png" alt='프로필 사진'/></span>
                    <div className="customers_info">
                      <div className="customers_name">{e.Name}</div>
                      <div className="customers_country">{e.Country}</div>
                      </div>
                  </div>
                  )})}
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }else{
    return(
      <div className='others_page'>
        <h1>{menuName} 페이지 입니다.</h1>
      </div>
    )
  }
  
}

export default Content;