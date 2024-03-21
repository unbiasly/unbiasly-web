import * as React from 'react'
import PrimaryLink from './ui/PrimaryLink'
import { Box, IconButton } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export default function SideBar({ open, handleClose }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: open ? 0 : -180,
        width: 180,
        height: '100%',
        backgroundColor: '#FFFFFF',
        transition: 'right 0.4s',
        zIndex: 2,
        boxShadow: 5,
        display: 'flex',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', px: '1rem', py: '1.5rem', width: '100%', rowGap: '1rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <IconButton sx={{ p: 0 }} onClick={handleClose}>
            <CloseRoundedIcon sx={{ fontSize: '20px', color: '#171717', ml: '-4px' }} />
          </IconButton>
        </Box>

        <PrimaryLink text='Home' href='/' />
        <PrimaryLink text='Careers' href='/' />
        <PrimaryLink text='Blog' href='/' />
        <PrimaryLink text='Contact Us' href='/contact' />
      </Box>
    </Box>
  )
}
