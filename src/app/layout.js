'use client'

import '../styles/globals.css'
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/styles/theme'
import { SnackbarProvider } from 'notistack'

export default function RootLayout(props) {
  return (
    <html lang='en'>
      <body>
        <SnackbarProvider maxSnack={3}>
          <AppRouterCacheProvider options={{ enableCssLayer: false }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {props.children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SnackbarProvider>
      </body>
    </html>
  )
}
