import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export function Searchbar({ onSearch, page, loading, reset }) {
  const [query, setQuery] = useState('');

  const handleFetch = useCallback(() => {
    console.log('a');
    if (query) {
      loading();
      fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=31430020-162717a02f14be47bba144d73&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(el => el.json())
        .then(el => {
          onSearch(el.hits);
        })
        .finally(() => loading());
    }
  }, [query, page]);

  useEffect(() => {
    handleFetch();
  }, [page, query, handleFetch]);

  const onSubmit = evt => {
    evt.preventDefault();
    if (evt.target.searchbar.value.trim() !== query) {
      reset();
      setQuery(evt.target.searchbar.value.trim());
    }
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
          <AiOutlineSearch style={{ width: '25', height: '25' }} />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="searchbar"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
