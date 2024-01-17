import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'grey',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({isOpen, onClose}) => {
  return (
    <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={customStyles}
    contentLabel="Example Modal"
     >
    <div >
      <img src="" alt="" />
    </div>
    <button onClick={onClose}>Close</button>
  </ReactModal> 
  )
}