import React, { Component } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './index.scss';

class Header extends Component {
  render() {
    const { isShowMenu, changeShownMenu } = this.props;
    const burgerMenuClasses = classNames('header__burger-header', {
      'header__burger-header_active': isShowMenu,
    });

    return (
      <div className="header">
        <div>
          <div>
            <Link to="/">Your logo</Link>
          </div>
        </div>
        <div >
          <span className="header__cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>1</span>
          </span>
          <span className={burgerMenuClasses} onClick={changeShownMenu} data-burger="1">
            <span />
          </span>
        </div>
      </div>
    );
  }
}

export default Header;