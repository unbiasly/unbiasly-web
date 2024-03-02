import * as React from 'react'
import { Box, TextField } from '@mui/material'

export default function PrimaryTextField({ name, placeholder, value, onChange, error, helperText, mt = false }) {
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
        sx={{
          '& .MuiInputBase-root': {
            height: '4.375rem',
            padding: '1.25rem',
            border: 0,
            borderRadius: '51px',
            background: '#F4F6F5',
            transition: 'box-shadow 0.25s ease-in-out',
            boxShadow: 'none',
            '&:focus-within': {
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            },
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
          '& input': {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: '1.5rem',
            textAlign: 'left',
            color: '#171717',
          },
        }}
      />
    </Box>
  )
}
