export function ImageGalleryItem({ web, large, tags, onModal }) {
  return (
    <li className="ImageGalleryItem" onClick={() => onModal(tags, large)}>
      <img className="ImageGalleryItem-image" src={web} alt={tags} large={large} />
    </li>
  );
}
