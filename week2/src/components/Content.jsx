import React from 'react';
import styles from '../styles/Content.css';
import Dashboard from './contents/Dashboard';
import Customers from './contents/Customers';
import Message from './contents/Message';
import Help from './contents/Help';
import Settings from './contents/Settings';
import Password from './contents/Password';
import Signout from './contents/Signout';

const Content = ({menuName}) => {
  switch(menuName){
    case 'Dashboard':
      return <Dashboard />
    case 'Customers':
      return <Customers />
    case 'Message':
      return <Message />
    case 'Help':
      return <Help/>
    case 'Settings':
      return <Settings />
    case 'Password':
      return <Password />
    case 'Signout':
      return <Signout />
    default:
      return null;
  }
}

export default Content;