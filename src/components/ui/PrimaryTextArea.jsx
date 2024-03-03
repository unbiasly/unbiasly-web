import * as React from 'react'
import { Box, TextField } from '@mui/material'

export default function PrimaryTextArea({ name, placeholder, value, onChange, error, helperText, mt = false }) {
  return (
    <Box sx={{ mt: mt ? '1.75rem' : 0 }}>
      <TextField
        type='text'
        variant='outlined'
        fullWidth
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        multiline
        rows={3}
        sx={{
          '& .MuiInputBase-root': {
            height: '8.75rem',
            padding: '1.25rem 2.25rem 1.25rem 2.25rem',
            border: 0,
            borderRadius: '28px',
            background: '#F4F6F5',
            transition: 'box-shadow 0.25s ease-in-out',
            boxShadow: '0px -4px 24px 0px #2124270A',
            '&:hover': { boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' },
            '&:focus-within': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& ::placeholder': {
            fontSize: '0.9375rem',
            fontWeight: 700,
            lineHeight: '1.5rem',
            textAlign: 'left',
            color: '#7C7C7C',
          },
          '& textarea': {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: '1.5rem',
            textAlign: 'left',
            color: '#171717',
            border: 'none',
            background: 'transparent',
            resize: 'none',
            width: '100%',
            height: '100%',
            outline: 'none',
            padding: 0,
          },
        }}
      />
    </Box>
  )
}
