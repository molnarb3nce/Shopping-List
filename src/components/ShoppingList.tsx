import ListItem from './ListItem';
import '../styles/ShoppingList.less'

interface ShoppingListProps {
  items: { name: string; quantity: string; info: string; cheapestPrice: string; location: string; averagePrice: string; bought: boolean }[];
  onDeleteItem: (index: number) => void;
  onToggleBought: (index: number) => void;
  onEditItem: (index: number, updatedItem: { name: string; quantity: string; info: string }) => void;
}

const ShoppingList = ({ items, onDeleteItem, onToggleBought, onEditItem }: ShoppingListProps) => (
  <div className="shopping-list">
    {items.map((item, index) => (
      <ListItem
        key={index}
        item={item}
        onDelete={() => onDeleteItem(index)}
        onToggleBought={() => onToggleBought(index)}
        onEdit={(updatedItem) => onEditItem(index, updatedItem)}
      />
    ))}
  </div>
);

export default ShoppingList;