import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import AddButton from './AddButton';

interface EditDialogProps {
  open: boolean;
  onClose: () => void;
  item: { name: string; quantity: string; info: string };
  onSave: (updatedItem: { name: string; quantity: string; info: string }) => void;
}

const EditDialog = ({ open, onClose, item, onSave }: EditDialogProps) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleInputChange = (field: keyof typeof item) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedItem({ ...editedItem, [field]: event.target.value });
  };

  const handleSave = () => {
    onSave(editedItem);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="edit-dialog-title">
      <DialogTitle id="edit-dialog-title">Edit Item</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          fullWidth
          value={editedItem.name}
          onChange={handleInputChange('name')}
          sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
        />
        <TextField
          margin="dense"
          label="Quantity"
          fullWidth
          value={editedItem.quantity}
          onChange={handleInputChange('quantity')}
          sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
        />
        <TextField
          margin="dense"
          label="Info"
          fullWidth
          multiline
          rows={3}
          value={editedItem.info}
          onChange={handleInputChange('info')}
          sx={{ fontFamily: 'Montserrat, Arial, sans-serif' }}
        />
      </DialogContent>
      <DialogActions>
        <AddButton onClick={handleSave} label="Save" />
        <AddButton onClick={onClose} label="Cancel" />
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
