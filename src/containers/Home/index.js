import React, { PureComponent } from 'react';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import './index.scss';

class Home extends PureComponent {
  state = { isShowMenu: false };

  changeShownMenu = () => this.setState(({ isShowMenu }) => ({ isShowMenu: !isShowMenu }));

  closeMenu = () => this.setState({ isShowMenu: false });

  render() {
    const { isShowMenu } = this.state;

    return (
      <div className="home__container">
        <Header isShowMenu={isShowMenu} changeShownMenu={this.changeShownMenu} />
        <Content isShowMenu={isShowMenu} closeMenu={this.closeMenu} />
        <Footer />
      </div>
    );
  }
}

export default Home;