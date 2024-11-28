import { useState } from 'react';
import Input from './Input';
import AddButton from './AddButton';
import '../styles/AddItemParams.less';

interface AddItemParamsProps {
    onAddItem: (item: { name: string; quantity: string; info: string }) => void;
}

const AddItemParams = ({ onAddItem }: AddItemParamsProps) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [info, setInfo] = useState('');
  
    const handleSubmit = () => {
      if (name && quantity) {
        onAddItem({ name, quantity, info });
        setName('');
        setQuantity('');
        setInfo('');
      }
    };

    return (
      <div className="add-item-params">
        <h2>Shopping list application</h2>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Input
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Input
          label="Info"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <AddButton onClick={handleSubmit} label="Add Item" />
      </div>
    );
};
    
export default AddItemParams;