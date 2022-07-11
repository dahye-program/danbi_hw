import React from 'react';
import styles from './Content.css'

const Content = () => {
  const card = [
    { value: '1,504', title: 'Daily Views', src: 'images/dailyviews.png'},
    { value: '80', title: 'Sales', src: 'images/sales.png' },
    { value: '284', title: 'Comments', src: 'images/comments.png' },
    { value: '$7,842', title: 'Earning', src: 'images/earning.jpeg'}
  ]
  return(
    <section class="cardbox">
    {card && card.map((e)=>{
      return(
      <div class="card">
          <div class="card_wrap">
          <div class="card_content">
            <h2 class="card_value">{e.value}</h2>
            <h3 class="card_title">{e.title}</h3>
          </div>
          <img class="card_icon" src={e.src} alt='카드 아이콘'/>
        </div>
      </div> 
      );
    })}
    </section>
  );
}

export default Content;