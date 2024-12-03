import { Button } from '@mui/material';

interface AddButtonProps {
  onClick: () => void;
  label: string;
}

const AddButton = ({ onClick, label }: AddButtonProps) => {
  return (
    <Button 
      className="add-button"
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: '#fff773',
        color: '#214555',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontSize: '1rem',
        fontWeight: 'bold',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#ee985b',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '#ee985b',
          boxShadow: 'none',
          border: 'none',
        },
        '&:focus': {
          outline: 'none',
          border: 'none',
          boxShadow: 'none',
        },
      }}>
      {label}
    </Button>
  );
};

export default AddButton;