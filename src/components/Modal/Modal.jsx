import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onPress);
  }

  onPress = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onClickClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.onClickClose}>
        <div className="Modal">
          <img src={this.props.data.img} alt={this.props.data.tags} />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}
