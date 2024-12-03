//weather api, drop down menu for other lists, login, registration, edit button should refresh price

import { useState, useEffect } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import TopPanel from '../components/TopPanel';
import ListManager from '../components/ListManager';
import '../styles/MainScreen.less';

const MainScreen = () => {
  const [selectedListIndex, setSelectedListIndex] = useState(0);
  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [{ name: 'Default List', items: [] }];
  });

  // Update localStorage when lists change
  useEffect(() => {
    localStorage.setItem('shoppingLists', JSON.stringify(lists));
  }, [lists]);

  const handleListChange = (index: number) => {
    setSelectedListIndex(index);
  };

  const handleAddItem = (item: { name: string; quantity: string; info: string; averagePrice: number }) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items.push({ ...item, bought: false });
    setLists(updatedLists);
  };

  const handleDeleteItem = (index: number) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items.splice(index, 1);
    setLists(updatedLists);
  };

  const handleToggleBought = (index: number) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items[index].bought = !updatedLists[selectedListIndex].items[index].bought;
    setLists(updatedLists);
  };

  const handleEditItem = (index: number, updatedItem: { name: string; quantity: string; info: string }) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items[index] = { ...updatedLists[selectedListIndex].items[index], ...updatedItem };
    setLists(updatedLists);
  };

  const totalItems = lists[selectedListIndex].items.length;
  const boughtItems = lists[selectedListIndex].items.filter((item: { bought: any; }) => item.bought).length;
  const totalPrice = lists[selectedListIndex].items.reduce((sum: any, item: { averagePrice: any; }) => sum + (item.averagePrice || 0), 0);

  return (
    <div className="main-screen">
      <LeftPanel onAddItem={handleAddItem} />
      <div className="right-panel-container">
        <TopPanel totalItems={totalItems} boughtItems={boughtItems} totalPrice={totalPrice} currentListName={lists[selectedListIndex].name}/>
        <ListManager onSelectList={handleListChange}/>
        <RightPanel
          items={lists[selectedListIndex].items}
          onDeleteItem={handleDeleteItem}
          onToggleBought={handleToggleBought}
          onEditItem={handleEditItem}
        />
      </div>
    </div>
  );
};

export default MainScreen;


/*
import { useState } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import TopPanel from '../components/TopPanel';
import ListManager from '../components/ListManager';
import '../styles/MainScreen.less';

const MainScreen = () => {
  const [selectedListIndex, setSelectedListIndex] = useState(0);

  const [lists, setLists] = useState(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [{ name: 'Default List', items: [] }];
  });

  const handleListChange = (index: number) => {
    setSelectedListIndex(index);
  };

  const handleAddItem = (item: { name: string; quantity: string; info: string; averagePrice: number }) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items.push({ ...item, bought: false });
    setLists(updatedLists);
  };

  const handleDeleteItem = (index: number) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items.splice(index, 1);
    setLists(updatedLists);
  };

  const handleToggleBought = (index: number) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items[index].bought = !updatedLists[selectedListIndex].items[index].bought;
    setLists(updatedLists);
  };

  const handleEditItem = (index: number, updatedItem: { name: string; quantity: string; info: string }) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items[index] = { ...updatedLists[selectedListIndex].items[index], ...updatedItem };
    setLists(updatedLists);
  };

  const totalItems = lists[selectedListIndex].items.length;
  const boughtItems = lists[selectedListIndex].items.filter((item: { bought: any; }) => item.bought).length;
  const totalPrice = lists[selectedListIndex].items.reduce((sum: any, item: { averagePrice: any; }) => sum + (item.averagePrice || 0), 0);


  //
  return (
    <div className="main-screen">
      <LeftPanel onAddItem={handleAddItem} />
      <div className="right-panel-container">
        <TopPanel totalItems={totalItems} boughtItems={boughtItems} totalPrice={totalPrice} />
        <ListManager onListSelect={handleListChange} selectedListIndex={selectedListIndex} />
        <RightPanel
          items={lists[selectedListIndex].items}
          onDeleteItem={handleDeleteItem}
          onToggleBought={handleToggleBought}
          onEditItem={handleEditItem}
        />
      </div>
    </div>
  );
};

export default MainScreen;
*/

/*
import { useState, useEffect } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import TopPanel from '../components/TopPanel';
import AddButton from '../components/AddButton';
import { Dialog, TextField, Button, Box, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/MainScreen.less';

const MainScreen = () => {
  // Manages lists of shopping lists, each with its own name and items
  const [lists, setLists] = useState<{ name: string; items: { name: string; quantity: string; info: string; averagePrice: number; bought: boolean }[] }[]>(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    return savedLists ? JSON.parse(savedLists) : [{ name: 'Default List', items: [] }];
  });

  const [selectedListIndex, setSelectedListIndex] = useState(0); // Index of currently selected list
  const [dialogOpen, setDialogOpen] = useState(false); // Dialog visibility state
  const [newListName, setNewListName] = useState(''); // New list name input

  // Save lists to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('shoppingLists', JSON.stringify(lists));
  }, [lists]);

  // Add an item to the selected list
  const handleAddItem = (item: { name: string; quantity: string; info: string; averagePrice: number }) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items.push({ ...item, bought: false });
    setLists(updatedLists);
  };

  // Delete an item from the selected list
  const handleDeleteItem = (index: number) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items.splice(index, 1);
    setLists(updatedLists);
  };

  // Toggle the bought status of an item
  const handleToggleBought = (index: number) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items[index].bought = !updatedLists[selectedListIndex].items[index].bought;
    setLists(updatedLists);
  };

  // Edit an existing item in the selected list
  const handleEditItem = (index: number, updatedItem: { name: string; quantity: string; info: string }) => {
    const updatedLists = [...lists];
    updatedLists[selectedListIndex].items[index] = { ...updatedLists[selectedListIndex].items[index], ...updatedItem };
    setLists(updatedLists);
  };

  // Create a new shopping list
  const handleCreateNewList = () => {
    if (newListName.trim() !== '') {
      setLists([...lists, { name: newListName, items: [] }]);
      setSelectedListIndex(lists.length);
      setNewListName('');
      setDialogOpen(false);
    }
  };

  // Select a list
  const handleSelectList = (index: number) => {
    setSelectedListIndex(index);
    setDialogOpen(false);
  };

  // Delete a shopping list (if more than one exists)
  const handleDeleteList = (index: number) => {
    if (lists.length > 1) {
      const updatedLists = lists.filter((_, i) => i !== index);
      setLists(updatedLists);
      setSelectedListIndex(index === selectedListIndex ? 0 : selectedListIndex - 1);
    }
  };

  const totalItems = lists[selectedListIndex].items.length;
  const boughtItems = lists[selectedListIndex].items.filter((item) => item.bought).length;
  const totalPrice = lists[selectedListIndex].items.reduce((sum, item) => sum + (item.averagePrice || 0), 0);

  return (
    <div className="main-screen">
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
                <Button onClick={() => handleSelectList(index)}>{list.name}</Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>

      <LeftPanel onAddItem={handleAddItem} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <AddButton label="SELECT" onClick={() => setDialogOpen(true)} />
      </Box>
      <div className="right-panel-container">
        <TopPanel totalItems={totalItems} boughtItems={boughtItems} totalPrice={totalPrice} />
        <RightPanel
          items={lists[selectedListIndex].items}
          onDeleteItem={handleDeleteItem}
          onToggleBought={handleToggleBought}
          onEditItem={handleEditItem}
        />
      </div>
    </div>
  );
};

export default MainScreen;
*/