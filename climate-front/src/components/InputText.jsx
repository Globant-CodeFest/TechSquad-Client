import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

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
    <form onSubmit={handleSubmit} style={{background: '#20232B',  display:'flex', justifyContent:'center',
    }}>
      <TextField
        style={{
          marginRight: 1,
          boxSizing: 'border-box',
          background: '#20232B',
          border: '1px solid #B785F5',
        }}
        value={text}
        onChange={handleChange}
        label="Enter your message..."
        variant="outlined"
        fullWidth
      />
      <Button style={{
        minWidth: 'auto',
        padding: 0,
      }}
        type="submit"
        variant="outlined"
        color="primary"
        disableElevation>
        <SendIcon />
      </Button>
    </form>
  );
};

export default InputText;
