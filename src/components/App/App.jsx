import { Component } from "react";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import { AppStyled } from "./App.styled";
import { fetchImages } from "api";

class App extends Component {

  state = {
    searchQueru: '',
    images: [],
    isLoading: false,
    error: false,
    page: 1,
  }

  async componentDidUpdate(prevProps, prevState) {
    if(
      prevState.searchQueru !== this.state.searchQueru ||
      prevState.page !== this.state.page
      ){
        try {
          this.setState({isLoading: true, });

          const { hits,  } = await fetchImages(this.state.searchQueru, this.state.page);

          // if(totalHits === 0) {
          //   toast.error('Sorry, there are no images matching your search query. Please try again.');
          // }
          this.setState({images: hits})
        } catch (error) {
          toast.error('Opps! Somathing went wrong! Please try reloading this page');
        } finally {
          this.setState({isLoading:false})
        }

    }
  }

  handleFormSubmit = newSearchQueru => {
    console.log(newSearchQueru);
    this.setState({
      // searchQueru: `${Date.now()}/${newSearchQueru}`,
      searchQueru: newSearchQueru, 
      page: 1,
      images: [],
    });

  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page +1,
      }
    })
  }


  render() {
    const { images, isLoading} = this.state;

    return (
      <AppStyled
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
        <Searchbar onSubmit={this.handleFormSubmit}/>
        {/* {error && (
          <b>Opps! Somathing went wrong! Please try reloading this page</b>
        )} */}
        {images.length > 0 && (
          <ImageGallery images={images}/>
        )}
        {isLoading && (
          <p>Loading ....</p>
        )}
        <Loader onClickButton={this.handleLoadMore}/>
        <ToastContainer autoClose={3000} />
      </AppStyled>
    );
  }
 
};

export default App;