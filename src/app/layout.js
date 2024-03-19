'use client'

import '../styles/globals.css'
import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/styles/theme'
import { SnackbarProvider } from 'notistack'
import { Box } from '@mui/material'
import { FooterSection, Navbar } from '@/components'

export default function RootLayout(props) {
  return (
    <html lang='en'>
      <body>
        <SnackbarProvider maxSnack={3}>
          <AppRouterCacheProvider options={{ enableCssLayer: false }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#F4F6F5' }}>
                <Navbar />
                {props.children}
                <FooterSection />
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SnackbarProvider>
      </body>
    </html>
  )
}
