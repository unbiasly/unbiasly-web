'use client'
import React from 'react'
import { Toolbar, Typography } from '@mui/material'
import './TextAnimation.css'
import Image from 'next/image'

const TextAnimation = () => {
  const texts = ['NEWS', 'TRENDING', 'FASHION', 'HEALTH', 'SPORTS', 'TECHNOLOGY', 'WORLD', 'POLITICS', 'ENTERTAINMENT']

  return (
    <div className='marquee'>
      <div className='track'>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex' }}>
          {texts.map((word, index) => (
            <li key={index}>
              <div style={{ display: 'flex' }}>
                <strong>.</strong>
                <Typography variant='h5'>{word}</Typography>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default TextAnimation
