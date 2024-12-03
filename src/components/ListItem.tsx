import { useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDialog from './EditDialog';
import '../styles/ListItem.less';

interface ListItemProps {
  item: {
    name: string;
    quantity: string;
    info: string;
    cheapestPrice: string;
    location: string;
    averagePrice: string;
    bought: boolean;
  };
  onDelete: () => void;
  onToggleBought: () => void;
  onEdit: (updatedItem: { name: string; quantity: string; info: string }) => void;
}

const ListItem = ({ item, onDelete, onToggleBought, onEdit }: ListItemProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleSave = (updatedItem: { name: string; quantity: string; info: string }) => {
    onEdit(updatedItem);
    handleCloseDialog();
  };

  return (
    <>
      <div className="list-item">
        <div className="item-details" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          <div>
            <strong>{item.name}</strong> | {item.quantity}
            <div className="item-info">{item.info}</div>
            <div>Cheapest Price: {item.cheapestPrice} HUF</div>
            <div>Available at: {item.location}</div>
            <div>Average Price: {item.averagePrice} HUF</div>
          </div>
        </div>
        <div className="item-actions">
          <Checkbox checked={item.bought} onChange={onToggleBought} sx={{ color: '#6c6c6c' }} />
          <IconButton size="small" onClick={handleOpenDialog}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      <EditDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        item={item}
        onSave={handleSave}
      />
    </>
  );
};

export default ListItem;


/*
import { useState } from 'react';
import { Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDialog from './EditDialog';
import '../styles/ListItem.less';

interface ListItemProps {
  item: { name: string; quantity: string; info: string; bought: boolean };
  onDelete: () => void;
  onToggleBought: () => void;
  onEdit: (updatedItem: { name: string; quantity: string; info: string }) => void;
}

const ListItem = ({ item, onDelete, onToggleBought, onEdit }: ListItemProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleSave = (updatedItem: { name: string; quantity: string; info: string }) => {
    onEdit(updatedItem);
    handleCloseDialog();
  };

  return (
    <>
      <div className="list-item">
        <div className="item-details" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          <div>
            <strong>{item.name}</strong> | {item.quantity}
            <div className="item-info" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>{item.info}</div>
          </div>
        </div>
        <div className="item-actions">
          <Checkbox checked={item.bought} onChange={onToggleBought} sx={{ color: '#6c6c6c' }} />
          <IconButton size="small" onClick={handleOpenDialog}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>

      <EditDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        item={item}
        onSave={handleSave}
      />
    </>
  );
};

export default ListItem;
*/
