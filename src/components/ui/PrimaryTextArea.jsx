'use client'

import * as React from 'react'
import { Box, TextField } from '@mui/material'
import { useCustomMediaQueries } from '@/hooks'

export default function PrimaryTextArea({ name, placeholder, value, onChange, error, helperText, mt = false }) {
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
        multiline
        rows={mobileMode ? 3 : 5}
        sx={{
          '& .MuiInputBase-root': {
            height: mobileMode ? '8rem' : '12rem',
            py: '1.5rem',
            px: '1.6rem',
            border: 0,
            borderRadius: '8px',
            background: '#FFFFFF',
            transition: 'box-shadow 0.25s ease-in-out',
            boxShadow: '0px -4px 24px 0px #2124270A',
            '&:hover': { boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' },
            '&:focus-within': { boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)' },
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
          '& textarea': {
            fontSize: '1.125rem',
            fontWeight: 500,
            lineHeight: 1.6,
            textAlign: 'left',
            color: '#171717',
            border: 'none',
            background: 'transparent',
            resize: 'none',
            width: '100%',
            height: '100%',
            outline: 'none',
          },
        }}
      />
    </Box>
  )
}
