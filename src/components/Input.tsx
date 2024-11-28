import { TextField, TextFieldProps } from '@mui/material';

const Input = (props: TextFieldProps) => {
  return (
    <TextField
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#214555',
          color: '#0288d1',
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontSize: '1rem',
          borderRadius: '8px',
          boxShadow: 'none',
          '& fieldset': {
            borderColor: '#c9f2fc',
            fontFamily: 'Montserrat, Arial, sans-serif',
          },
          '&:hover fieldset': {
            borderColor: '#c9f2fc',
            fontFamily: 'Montserrat, Arial, sans-serif',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#c9f2fc',
            fontFamily: 'Montserrat, Arial, sans-serif',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#c9f2fc',
          fontFamily: 'Montserrat, Arial, sans-serif',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#c9f2fc',
          fontFamily: 'Montserrat, Arial, sans-serif',
        },
      }}
      {...props}
    />
  );
};

export default Input;