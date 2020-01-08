import React, { PureComponent } from 'react';

import './index.scss';

class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="footer__success-menu-item" onClick={() => console.log('Шаг конструктора: Вариант Кухни')}>
          Вариант Кухни
          <span />
        </div>
        <div className="footer__success-menu-item" onClick={() => console.log('Шаг конструктора: Размеры')}>
          Размеры
          <span />
        </div>
        <div className="footer__success-menu-item" onClick={() => console.log('Шаг конструктора: Сенсор')}>
          Сенсор
          <span />
        </div>
        <div className="footer__success-menu-item" onClick={() => console.log('Шаг конструктора: Питающий кабель')}>
          Питающий кабель
          <span />
        </div>
        <div className="footer__success-menu-item" onClick={() => console.log('Шаг конструктора: Блок питания')}>
          Блок питания
          <span />
        </div>
        <div className="footer__success-step" onClick={() => console.log('Шаг конструктора: Цвет свечения')}>
          Цвет свечения
          <span />
        </div>
        <div onClick={() => console.log('Шаг конструктора: Монтаж')}>
          Монтаж
          <span />
        </div>
        <div onClick={() => console.log('Шаг конструктора: Корзина')}>
          Корзина
          <span />
        </div>
      </div>
    );
  }
}

export default Footer;