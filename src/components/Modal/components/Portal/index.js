import { Component } from 'react';
import { createPortal } from 'react-dom';

class Portal extends Component {
  componentWillUnmount() {
    this.modal.remove();
  }

  render() {
    const { children } = this.props;
    if (!children) return null;

    this.modal = document.createElement('div');
    this.modal.className = 'modal-container';
    document.body.append(this.modal);

    return createPortal(children, this.modal);
  }
}

export default Portal;