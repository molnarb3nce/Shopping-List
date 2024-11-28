import { useState } from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import TopPanel from '../components/TopPanel';
import '../styles/MainScreen.less';

const MainScreen = () => {
  const [items, setItems] = useState<{ name: string; quantity: string; info: string; bought: boolean; }[]>([]);

  const handleAddItem = (item: { name: string; quantity: string; info: string }) => {
    setItems([...items, { ...item, bought: false }]);
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleToggleBought = (index: number) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const handleEditItem = (index: number, updatedItem: { name: string; quantity: string; info: string }) => {
    setItems(items.map((item, i) => (i === index ? { ...item, ...updatedItem } : item)));
  };

  const totalItems = items.length;
  const boughtItems = items.filter((item) => item.bought).length;

  return (
    <div className="main-screen">
        <LeftPanel onAddItem={handleAddItem} />
      <div className="right-panel-container">
        <TopPanel totalItems={totalItems} boughtItems={boughtItems} />
        <RightPanel items={items} onDeleteItem={handleDeleteItem} onToggleBought={handleToggleBought} onEditItem={handleEditItem}/>
      </div>
    </div>
  );
};

export default MainScreen;