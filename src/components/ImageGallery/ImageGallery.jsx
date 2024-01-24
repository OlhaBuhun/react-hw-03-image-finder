import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

import {  ImageGaleryList } from "./ImageGallery.styled";

const ImageGallery = ({images}) => (
  <ImageGaleryList >
    {images.map(({id, webformatURL, largeImageURL, tags}) => (
       <ImageGalleryItem key={id}
       webformatURL={webformatURL}
       largeImageURL={largeImageURL}
       tags={tags}

       />
   
    ))}
   
</ImageGaleryList>
)

export default ImageGallery;

// const ImageGallery = ({ images }) => {
//   return (
//     <ImageGaleryList>
//       {images.map(galleryItem => {
//         return (
//           <ImageGalleryItem key={images.id} galleryItem={images} />
//         );
//       })}
//     </ImageGaleryList>
//   );
// };

// export default ImageGallery;

 //   <GaleryItem key={id} largeImageURL={largeImageURL}>
    //   <GaleryItemImage 
    //   src={webformatURL} 
    //   alt={tags}
      
    //    />
    //   {/* <Modal isOpen={this.openModal} onClose={this.closeModal}/> */}
    // </GaleryItem>
    // id={id}
    //    webformatURL={webformatURL}
    //    largeImageURL={largeImageURL}
    //    tags={tags}