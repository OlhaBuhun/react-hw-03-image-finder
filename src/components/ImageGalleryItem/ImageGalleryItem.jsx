import { Component } from "react";
import { ModalWindow } from "components/Modal/ModalWindow";
import { GaleryItem, GaleryItemImage } from "./ImageGalleryItem.styled";


class ImageGalleryItem extends Component {
  state = {
    // id: '',
    // webformatURL: '',
    // largeImageURL: '',
    // tags:'',
    isModalOpen: false,
  }

  // openModal = (largeImageURL, tags) => {
  //   this.toggleModal();
  //   this.setState({
  //     largeImageURL,
  //     tags,
  //   });
  // };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  openModal = () => {
    this.setState ({
      isModalOpen: true,
    })
  }
 
  closeModal = () => {
    this.setState ({
      isModalOpen: false,
    })
  }

  render() {
    const { isModalOpen} = this.state;
    const {webformatURL, largeImageURL, tags,}
    = this.props;
     

    return (
      <GaleryItem onClick={this.openModal}>
        <GaleryItemImage src={webformatURL} alt={tags} />
        <ModalWindow
          onCloseModal={this.closeModal}
          largeImageURL={largeImageURL}
          alt={tags}
          isModalOpen={isModalOpen}
        />
      </GaleryItem>
    )
  }
  
}

export default ImageGalleryItem;