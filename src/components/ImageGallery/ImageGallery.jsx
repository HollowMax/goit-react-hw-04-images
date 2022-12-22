import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export function ImageGallery({ list }) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({ tasg: '', img: '' });

  const onModal = (tags, img) => {
    setModal(true);
    setModalData({ tags, img });
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <ul className="ImageGallery">
        {list.map(el => (
          <ImageGalleryItem
            key={el.id}
            web={el.webformatURL}
            large={el.largeImageURL}
            tags={el.tags}
            onModal={onModal}
          />
        ))}
      </ul>
      {modal && <Modal data={modalData} onClose={onClose} />}
    </>
  );
}

ImageGallery.propTypes = {
  list: PropTypes.array.isRequired,
};
