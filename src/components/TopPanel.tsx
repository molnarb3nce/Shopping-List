import { Box, Typography } from '@mui/material';
//import "../styles/TopPanel.less"

interface TopPanelProps {
  totalItems: number;
  boughtItems: number;
}

const TopPanel = ({ totalItems, boughtItems }: TopPanelProps) => {      // különböző statisztikák komponenseinek implementálása
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
        <Typography variant="h6">Total Items: {totalItems}</Typography>
        <Typography variant="h6">Bought Items: {boughtItems}</Typography>
        </Box>
    </div>
  );
};

export default TopPanel;