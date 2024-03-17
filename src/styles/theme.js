'use client'
import localFont from 'next/font/local'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const californianFB = localFont({
  src: [
    {
      path: './californian-fb/r.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './californian-fb/i.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './californian-fb/b.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './californian-fb/eb.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
})

let theme = createTheme({
  palette: {
    primary: {
      main: '#171717',
    },
    text: {
      primary: '#171717',
      disabled: '#7C7C7C',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: californianFB.style.fontFamily,

    h1: {
      fontWeight: 700,
      fontSize: '3.75rem',
      color: '#FFFFFF',
      lineHeight: 1,
    },
    h2: {
      fontWeight: 400,
      fontSize: '3.25rem',
      color: '#171717',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 900,
      fontSize: '2.5rem',
      lineHeight: 1,
    },
    h4: {
      fontWeight: 700,
      fontSize: '2.125rem',
      lineHeight: 1.2,
      color: '#171717',
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#171717',
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1110,
      xl: 1536,
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
