'use client'

import * as React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

function useConfirmation() {
  const [confirmation, setConfirmation] = React.useState({
    show: false,
    okLabel: 'OK',
    cancelLabel: 'Cancel',
    title: 'Are you sure?',
    description: '',
    proceed: () => {},
    cancel: () => {},
    dismiss: () => {},
  })

  const confirm = ({ okLabel, cancelLabel, title, description, onConfirm, onCancel }) => {
    setConfirmation({
      show: true,
      okLabel: okLabel || 'OK',
      cancelLabel: cancelLabel || 'Cancel',
      title: title || 'Are you sure?',
      description: description || '',
      proceed: () => {
        onConfirm && onConfirm()
        setConfirmation((prevState) => ({ ...prevState, show: false }))
      },
      cancel: () => {
        onCancel && onCancel()
        setConfirmation((prevState) => ({ ...prevState, show: false }))
      },
      dismiss: () => {
        onCancel && onCancel()
        setConfirmation((prevState) => ({ ...prevState, show: false }))
      },
    })
  }

  const ConfirmationDialog = () => {
    const { show, okLabel, cancelLabel, title, description, proceed, cancel, dismiss } = confirmation

    // Check if the window object is defined before accessing its properties
    const theme = typeof window !== 'undefined' ? window.__theme || {} : {}

    return (
      <ThemeProvider theme={theme}>
        <Dialog
          open={show}
          onClose={dismiss}
          fullWidth
          maxWidth='xs'
          sx={{
            textAlign: 'center',
            margin: 'auto',
            '& .MuiDialog-paper': {
              width: '100%',
              maxWidth: '45rem',
              pt: 2,
              opacity: 1,
            },
          }}
        >
          <DialogTitle sx={{ fontWeight: '700', fontSize: '2rem' }}>{title}</DialogTitle>
          <DialogContent sx={{ px: 5 }}>{description}</DialogContent>
          <DialogActions
            sx={{
              pb: 4,
              px: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '& .MuiButtonBase-root': { mx: 1 },
            }}
          >
            {cancelLabel && (
              <Button variant='outlined' sx={{ mr: 2 }} onClick={cancel}>
                {cancelLabel}
              </Button>
            )}
            <Button variant='contained' onClick={proceed} autoFocus>
              {okLabel}
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    )
  }

  return { confirm, ConfirmationDialog }
}

export default useConfirmation
