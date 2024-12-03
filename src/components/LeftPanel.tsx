import AddItemParams from './AddItemParams';
import '../styles/LeftPanel.less';

interface LeftPanelProps {
  onAddItem: (item: { name: string; quantity: string; info: string; averagePrice: number }) => void;
}

const LeftPanel = ({ onAddItem }: LeftPanelProps) => {
  return (
    <div className="left-panel">
      <AddItemParams onAddItem={onAddItem} />
    </div>
  );
};

export default LeftPanel;

/*
import AddItemParams from './AddItemParams';
import '../styles/LeftPanel.less';

interface LeftPanelProps {
  onAddItem: (item: { name: string; quantity: string; info: string; averagePrice: number }) => void;
}

const LeftPanel = ({ onAddItem }: LeftPanelProps) => {
  return (
    <div className="left-panel">
      <AddItemParams onAddItem={onAddItem} />
    </div>
  );
};

export default LeftPanel;
*/