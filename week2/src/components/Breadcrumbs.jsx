import React from 'react';
import styles from '../styles/Breadcrumbs.css';

const Breadcrumbs = ({menuName}) => {
  return(
    <>
      <div className='Breadcrumbs'>
      <h3>{`Home > ${menuName} `}</h3>
      </div>
    </>
)
}

export default Breadcrumbs;