import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    modalData: { tags: '', img: '' },
  };

  onModal = (tags, img) => {
    this.setState({ isModalOpen: true, modalData: { tags, img } });
  };

  onClose = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <>
        <ul className="ImageGallery">
          {this.props.list.map(el => (
            <ImageGalleryItem
              key={el.id}
              web={el.webformatURL}
              large={el.largeImageURL}
              tags={el.tags}
              onModal={this.onModal}
            />
          ))}
        </ul>
        {this.state.isModalOpen && <Modal data={this.state.modalData} onClose={this.onClose} />}
      </>
    );
  }
}
