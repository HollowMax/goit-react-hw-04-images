import { useState } from 'react';
import '../index.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ColorRing } from 'react-loader-spinner';

export function App() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const onSearch = value => setList(prevState => [...prevState, ...value]);

  const handleLoading = () => {
    setLoading(prevState => !prevState);
  };

  const reset = () => {
    setList([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar onSearch={onSearch} page={page} loading={handleLoading} reset={reset} />
      <ImageGallery list={list} />
      {list.length > 0 && !loading && <Button loadMore={loadMore} />}
      {loading && (
        <div style={{ textAlign: 'center' }}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      )}
    </>
  );
}
