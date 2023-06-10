import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { FormControl, Box } from '@mui/material';

const InputText = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <FormControl sx={{ m: 5 }} onSubmit={handleSubmit} style={{ background: '#20232B' }}>
      <Box display="flex" alignItems="center">
        <TextField
          style={{
            marginRight: 1,
            boxSizing: 'border-box',
            background: '#20232B',
            border: '1px solid #B785F5',
            color: 'white',
          }}
          value={text}
          onChange={handleChange}
          label="Enter your message..."
          variant="standard"
          fullWidth
          multiline
          sx={{ input: { color: 'white' } }}
        />
        <Button
          style={{
            minWidth: 'auto',
            padding: 0,
            height: '100%'
          }}
          type="submit"
          variant="outlined"
          color="primary"
          disableElevation
          sx={{borderColor:'#B785F3'}}
        >
          <SendIcon sx={{color:'#B785F3'}}/>
        </Button>
      </Box>
    </FormControl>
  );
};

export default InputText;
