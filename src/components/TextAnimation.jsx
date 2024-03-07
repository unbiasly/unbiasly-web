'use client'
import React from 'react'
import { Typography } from '@mui/material'
import './TextAnimation.css'

const TextAnimation = () => {
  const texts = ['NEWS', 'TRENDING', 'FASHION', 'HEALTH', 'SPORTS', 'TECHNOLOGY', 'WORLD', 'POLITICS', 'ENTERTAINMENT']
  const duplicatedTexts = [...texts]

  return (
    <div className='marquee'>
      <div className='track'>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
          {duplicatedTexts.map((word, index) => (
            <li key={index}>
              <div style={{ display: 'flex' }}>
                <img
                  src='/images/icons/white-bullet.svg'
                  alt='white-bullet'
                  style={{ width: '100%', maxWidth: '28px', height: 'auto', marginLeft: '1.25rem' }}
                />
                <Typography variant='h5' sx={{ mx: '1.25rem' }}>
                  {word}
                </Typography>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default TextAnimation
