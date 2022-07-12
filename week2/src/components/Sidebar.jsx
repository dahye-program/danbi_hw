import React from 'react';
import styles from './Sidebar.css'

const Sidebar = ({value}) => {
  return(
    <section 
      className={
        value === 'navigation' ? 'navigation on' : 'navigation'
      }>
      <ul className='navlist'>
        <li className='title'>
          <img src="images/logo.png" alt='로고 아이콘'/>
          <p className='titlecontent'>Brand Name</p>
          <div className='menubaricon'>
          <input type="checkbox" id="hamburger"/>
          <label htmlFor="hamburger"><span><img src="images/hamburger.png" alt='사이드바 아이콘'/></span></label>
          </div>
        </li>
        <li className="navicon"><img src="images/dashboard.png" alt='대시보드 아이콘'/><a className="navicontent">Dashboard</a></li>
        <li className="navicon"><img src="images/customers.jpeg" alt='커스터머 아이콘'/><a className="navicontent">Customers</a></li>
        <li className="navicon"><img src="images/message.png" alt='메시지 아이콘'/><a className="navicontent">Message</a></li>
        <li className="navicon"><img src="images/help.png" alt='헬프 아이콘'/><a className="navicontent">Help</a></li>
        <li className="navicon"><img src="images/settings.png" alt='세팅 아이콘'/><a className="navicontent">Settings</a></li>
        <li className="navicon"><img src="images/password.png" alt='패스워드 아이콘'/><a className="navicontent">Password</a></li>
        <li className="navicon"><img src="images/signout.jpeg" alt='아웃 아이콘'/><a className="navicontent">Sign Out</a></li>
      </ul>
    </section>
  );
}

export default Sidebar;
