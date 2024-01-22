// import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import { GaleryItem, GaleryItemImage, ImageGaleryList } from "./ImageGallery.styled";

const ImageGallery = ({images}) => (
  <ImageGaleryList >
    {images.map(({id, webformatURL, largeImageURL }) => (
      //  <ImageGalleryItem key={id}
      //  id={id}
      //  webformatURL={webformatURL}
      //  largeImageURL={largeImageURL}
      //  />
      <GaleryItem key={id}>
      <GaleryItemImage src={webformatURL} alt="" />
      {/* <Modal isOpen={this.openModal} onClose={this.closeModal}/> */}
    </GaleryItem>
    ))}
   
</ImageGaleryList>
)

export default ImageGallery;