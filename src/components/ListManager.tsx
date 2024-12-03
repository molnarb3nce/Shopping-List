import { useState, useEffect } from 'react';
import { Dialog, TextField, Box, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from './AddButton';

interface ListManagerProps {
  onSelectList: (index: number) => void;
}

const ListManager = ({ onSelectList }: ListManagerProps) => {
  const [lists, setLists] = useState<{ name: string; items: any[] }[]>(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [{ name: 'Default List', items: [] }];
  });

  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingLists', JSON.stringify(lists));
  }, [lists]);

  const handleCreateNewList = () => {
    if (newListName.trim() !== '') {
      setLists([...lists, { name: newListName, items: [] }]);
      setSelectedListIndex(lists.length - 1);
      setNewListName('');
      setDialogOpen(false);
    }
  };

  const handleSelectList = (index: number) => {
    setSelectedListIndex(index);
    onSelectList(index);
    setDialogOpen(false);
  };

  const handleDeleteList = (index: number) => {
    if (lists.length > 1) {
      const updatedLists = lists.filter((_, i) => i !== index);
      setLists(updatedLists);
      setSelectedListIndex(index === selectedListIndex ? 0 : selectedListIndex - 1);
    }
  };

  return (
    <>
      <AddButton onClick={() => setDialogOpen(true)} label="Manage Lists" />

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Box sx={{ padding: '20px', minWidth: '300px' }}>
          <h2>Manage Lists</h2>
          <TextField
            label="New List Name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <AddButton onClick={handleCreateNewList} label="Create New List" />

          <h3>Existing Lists</h3>
          <List>
            {lists.map((list, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  list.name !== 'Default List' && (
                    <IconButton edge="end" onClick={() => handleDeleteList(index)}>
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <AddButton
                  onClick={() => handleSelectList(index)}
                  label={list.name}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
    </>
  );
};

export default ListManager;


/*
import { useState, useEffect } from 'react';
import { Dialog, TextField, Button, Box, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from './AddButton';

interface ListManagerProps {
  onSelectList: (index: number) => void; // Passes the selected list index to parent
}

const ListManager = ({ onSelectList }: ListManagerProps) => {
  const [lists, setLists] = useState<{ name: string; items: any[] }[]>(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [{ name: 'Default List', items: [] }];
  });

  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppingLists', JSON.stringify(lists));
  }, [lists]);

  const handleCreateNewList = () => {
    if (newListName.trim() !== '') {
      setLists([...lists, { name: newListName, items: [] }]);
      setSelectedListIndex(lists.length);
      setNewListName('');
      setDialogOpen(false);
    }
  };

  const handleSelectList = (index: number) => {
    setSelectedListIndex(index);
    onSelectList(index); // Notify parent component
    setDialogOpen(false);
  };

  const handleDeleteList = (index: number) => {
    if (lists.length > 1) {
      const updatedLists = lists.filter((_, i) => i !== index);
      setLists(updatedLists);
      setSelectedListIndex(index === selectedListIndex ? 0 : selectedListIndex - 1);
    }
  };

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Select List</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Box sx={{ padding: '20px', minWidth: '300px' }}>
          <h2>Manage Lists</h2>
          <TextField
            label="New List Name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <AddButton onClick={handleCreateNewList}>Create New List</AddButton>
          <h3>Existing Lists</h3>
          <List>
            {lists.map((list, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  list.name !== 'Default List' && (
                    <IconButton edge="end" onClick={() => handleDeleteList(index)}>
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <Button onClick={() => handleSelectList(index)}>{list.name}</Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
    </>
  );
};

export default ListManager;
*/

/*
import { useState, useEffect } from 'react';
import { Dialog, TextField, Box, List, ListItem, IconButton, Button as MUIButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddButton from './AddButton';

interface ListManagerProps {
  onListSelect: (index: number) => void;
  selectedListIndex: number;
}

const ListManager = ({ onListSelect, selectedListIndex }: ListManagerProps) => {
  const [lists, setLists] = useState<{ name: string; items: any[] }[]>(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [{ name: 'Default List', items: [] }];
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newListName, setNewListName] = useState('');

  // Save lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('shoppingLists', JSON.stringify(lists));
  }, [lists]);

  // Create a new shopping list
  const handleCreateNewList = () => {
    if (newListName.trim() !== '') {
      setLists([...lists, { name: newListName, items: [] }]);
      onListSelect(lists.length); // Select the new list
      setNewListName('');
      setDialogOpen(false);
    }
  };

  // Delete a shopping list (if more than one exists)
  const handleDeleteList = (index: number) => {
    if (lists.length > 1) {
      const updatedLists = lists.filter((_, i) => i !== index);
      setLists(updatedLists);
      onListSelect(index === selectedListIndex ? 0 : selectedListIndex - 1);
    }
  };

  return (
    <div>
      <AddButton label="SELECT" onClick={() => setDialogOpen(true)} />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Box sx={{ padding: '20px', minWidth: '300px' }}>
          <h2>Manage Lists</h2>
          <TextField
            label="New List Name"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <AddButton label="Create New List" onClick={handleCreateNewList} />
          <h3>Existing Lists</h3>
          <List>
            {lists.map((list, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  list.name !== 'Default List' && (
                    <IconButton edge="end" onClick={() => handleDeleteList(index)}>
                      <DeleteIcon />
                    </IconButton>
                  )
                }
              >
                <MUIButton onClick={() => { onListSelect(index); setDialogOpen(false); }}>
                  {list.name}
                </MUIButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
    </div>
  );
};

export default ListManager;
*/