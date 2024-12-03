import ShoppingList from './ShoppingList';
import '../styles/RightPanel.less';

interface RightPanelProps {
  items: { name: string; quantity: string; info: string; bought: boolean; cheapestPrice: string; location: string; averagePrice: string }[];
  onDeleteItem: (index: number) => void;
  onToggleBought: (index: number) => void;
  onEditItem: (index: number, updatedItem: { name: string; quantity: string; info: string }) => void;
}

const RightPanel = ({ items, onDeleteItem, onToggleBought, onEditItem }: RightPanelProps) => {
  return (
    <div className="right-panel">
      <ShoppingList
        items={items}
        onDeleteItem={onDeleteItem}
        onToggleBought={onToggleBought}
        onEditItem={onEditItem}
      />
    </div>
  );
};

export default RightPanel;