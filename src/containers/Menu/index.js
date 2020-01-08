import React, { forwardRef } from 'react';
import classNames from 'classnames';

import './index.scss';

const Menu = forwardRef(({ isShowMenu }, ref) => {
  const menuClasses = classNames('menu', { 'menu-close': !isShowMenu });

  return (
    <div className={menuClasses} ref={ref}>
      <ul>
        <li onClick={() => console.log('Переход на страницу: Обучающее видео')}>Обучающее видео</li>
        <li onClick={() => console.log('Переход на страницу: Оформление заказа')}>Оформление заказа</li>
        <li onClick={() => console.log('Переход на страницу: Оплата')}>Оплата</li>
        <li onClick={() => console.log('Переход на страницу: Доставка')}>Доставка</li>
        <li onClick={() => console.log('Переход на страницу: Гарантия')}>Гарантия</li>
        <li onClick={() => console.log('Переход на страницу: Возврат')}>Возврат</li>
        <li onClick={() => console.log('Переход на страницу: Контакты')}>Контакты</li>
        <li onClick={() => console.log('Переход на страницу: Партнерам')}>Партнерам</li>
      </ul>
    </div>
  );
});

export default Menu;
