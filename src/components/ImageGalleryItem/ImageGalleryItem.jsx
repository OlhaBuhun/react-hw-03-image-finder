import { Component } from "react";
// import { Modal } from "components/Modal/Modal";


class ImageGalleryItem extends Component {
  state = {
    id: '',
    webformatURL: '',
    
    isModalOpen: false,
  }

  openModal = ()  => {
    this.setState(prevState => ({
      isModalOpen: true,
    }))
  }

  closeModal = ()  => {
    this.setState(prevState => ({
      isModalOpen: false,
    }))
  }
 

  render() {
    return (
      <li >
        <img src={this.webformatURL} alt="" onClick={this.openModal}/>
        {/* <Modal isOpen={this.openModal} onClose={this.closeModal}/> */}
      </li>
    )
  }
  
}

export default ImageGalleryItem;