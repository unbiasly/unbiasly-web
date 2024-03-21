import * as React from 'react'
import { Box, TextField } from '@mui/material'
import { useCustomMediaQueries } from '@/hooks'

export default function PrimaryTextField({ name, placeholder, value, onChange, error, helperText, mt = false }) {
  const { mobileMode } = useCustomMediaQueries()

  return (
    <Box sx={{ mt: mt ? '1.25rem' : 0 }}>
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
            // height: mobileMode ? '2rem' : '3.75rem',
            py: 'auto',
            px: '0.75rem',
            border: 0,
            borderRadius: '8px',
            background: '#FFFFFF',
            transition: 'box-shadow 0.25s ease-in-out',
            boxShadow: 0,
            '&:hover': { boxShadow: '0px 8px 24px 0px #2124270A' },
            '&:focus-within': { boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& ::placeholder': {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: 'left',
            color: '#7C7C7C',
          },
          '& input': {
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: 1.6,
            textAlign: 'left',
            color: '#171717',
          },
        }}
      />
    </Box>
  )
}
