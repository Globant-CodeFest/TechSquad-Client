import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import { FormControl, Box } from '@mui/material';

const InputText = ({ onSubmit, loading }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#20232B",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        style={{
          marginRight: 1,
          boxSizing: "border-box",
          background: "#20232B",
          border: "1px solid #B785F5",
        }}
        value={text}
        onChange={handleChange}
        label={loading ? "Cargando respuesta" : "Ingresa tu consulta..."}
        InputLabelProps={{shrink: text ? true : false, style: { color: 'white' } }}
        variant="outlined"
        fullWidth
        disabled={loading}
        InputProps={{
          style: { color: "white" },
        }}
      />
      <Button
        style={{
          minWidth: "auto",
          padding: 0,
          border: "1px solid #B785F5",
        }}
        type="submit"
        variant="outlined"
        color="primary"
        disabled={loading}
        disableElevation>
        {loading ? (
          <CircularProgress size={26} sx={{ position: 'absolute', left: '45%', px:2 }} />
        ) : (
          <SendIcon sx={{ color: "#B785F5", px:2 }}/>
        )}
      </Button>
    </form>
  );
};

export default InputText;
