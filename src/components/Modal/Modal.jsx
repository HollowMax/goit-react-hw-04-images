import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ data, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', onPress);
    return () => window.removeEventListener('keydown', onPress);
  }, []);

  const onPress = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const onClickClose = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={onClickClose}>
      <div className="Modal">
        <img src={data.img} alt={data.tags} />
      </div>
    </div>,
    document.getElementById('modal')
  );
}

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onPress);
//   }

//   onPress = evt => {
//     if (evt.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onClickClose = evt => {
//     if (evt.currentTarget === evt.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Overlay" onClick={this.onClickClose}>
//         <div className="Modal">
//           <img src={this.props.data.img} alt={this.props.data.tags} />
//         </div>
//       </div>,
//       document.getElementById('modal')
//     );
//   }
// }

Modal.propTypes = {
  onClose: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
