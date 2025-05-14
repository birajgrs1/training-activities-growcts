import useStore from "../store/uiStore";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { MdClose } from 'react-icons/md';

const Modal = () => {
  const { isModalOpen, toggleModal } = useStore();

  return (
    <Dialog open={isModalOpen} onClose={toggleModal}>
      <DialogTitle className="flex justify-between items-center">
        Modal
        <MdClose className="cursor-pointer" onClick={toggleModal} />
      </DialogTitle>
      <DialogContent>
        <p>I am modal. You can add more content here.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
