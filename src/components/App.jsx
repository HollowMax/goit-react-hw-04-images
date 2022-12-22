import { Component } from 'react';
import '../index.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ColorRing } from 'react-loader-spinner';

export class App extends Component {
  state = {
    list: [],
    page: 1,
    loading: false,
  };

  onSearch = value => {
    this.setState(prevState => ({ list: [...prevState.list, ...value] }));
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  reset = () => {
    this.setState({ list: [], page: 1 });
  };

  toggleLoading = () => {
    this.setState(prevState => ({ loading: !prevState.loading }));
  };

  render() {
    return (
      <>
        <Searchbar
          onSearch={this.onSearch}
          page={this.state.page}
          loading={this.toggleLoading}
          reset={this.reset}
        />
        <ImageGallery list={this.state.list} />
        {this.state.list.length > 0 && !this.state.loading && <Button loadMore={this.loadMore} />}
        {this.state.loading && (
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
}
