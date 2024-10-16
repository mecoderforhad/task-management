import React from 'react';

import { Box, Modal, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
}) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={style}>
      <Typography variant="h6" component="h2">
        Confirm Deletion
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Are you sure you want to delete this item? This action cannot be undone.
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={onClose} color="primary" variant="outlined" sx={{ mr: 1 }}>
          Cancel
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained">
          Delete
        </Button>
      </Box>
    </Box>
  </Modal>
);

export default DeleteConfirmationModal;
