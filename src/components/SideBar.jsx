import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import PrimaryLink from './ui/PrimaryLink'
import { Box, IconButton } from '@mui/material'
import { useCustomMediaQueries } from '@/hooks'

import PrimaryButton from './ui/PrimaryButton'
import Link from 'next/link'
import Image from 'next/image'

export default function SideBar({ open, handleClose }) {
  const { sm } = useCustomMediaQueries()
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: open ? 0 : -280,
        width: 280,
        height: '100%',
        background: '#F4F6F5',
        transition: 'right 0.4s',
        zIndex: 2,
        boxShadow: 5,
        display: 'flex',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', p: '1rem', width: '40%', rowGap: '2rem' }}>
        <IconButton onClick={handleClose}>
          <CloseRoundedIcon sx={{ color: '#171717' }} />
        </IconButton>

        <PrimaryLink text='About Us' />
        <PrimaryLink text='Careers' />
        <PrimaryLink text='Blog' />

        <Link href='#'>
          <PrimaryButton
            text={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                Download Unbiasly
                <Image
                  src='/images/download-btn.svg'
                  height={18}
                  width={40}
                  alt='play-store'
                  style={{ marginLeft: '0.75rem' }}
                  loading={sm ? 'eager' : 'lazy'}
                />
              </Box>
            }
          />
        </Link>
      </Box>
    </Box>
  )
}
