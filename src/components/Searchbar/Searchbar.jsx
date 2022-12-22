import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page && this.props.page !== 1) {
      this.handleFetch();
    }
  }

  handleFetch = () => {
    this.props.loading();
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.props.page}&key=31430020-162717a02f14be47bba144d73&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(el => el.json())
      .then(el => {
        this.props.onSearch(el.hits);
      })
      .finally(() => this.props.loading());
  };

  onSubmit = async evt => {
    evt.preventDefault();
    if (evt.target.searchbar.value.trim() !== this.state.query) {
      this.props.reset();
      await this.setState({ query: evt.target.searchbar.value.trim() });

      this.handleFetch();
    }
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
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
}
