import { Box, Typography } from '@mui/material';
//import "../styles/TopPanel.less"

interface TopPanelProps {
  totalItems: number;
  boughtItems: number;
  totalPrice: number;
  currentListName: string;
}

const TopPanel = ({ totalItems, boughtItems, totalPrice, currentListName }: TopPanelProps) => {
  return (
    <div className='top-panel'>
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#214555',
            color: 'white',
            padding: '10px 0',
            margin: 2,
            borderRadius: '8px',
        }}
        >
        <Typography variant="h6">List: {currentListName}</Typography>
        <Typography variant="h6">Total Items: {totalItems} db</Typography>
        <Typography variant="h6">Total Price: {totalPrice} Ft</Typography>
        <Typography variant="h6">Bought Items: {boughtItems} db</Typography>
        </Box>
    </div>
  );
};

export default TopPanel;