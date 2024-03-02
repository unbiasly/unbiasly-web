'use client'

import { useSnackbar } from 'notistack'

function useSnackbarNotifier() {
  const { enqueueSnackbar } = useSnackbar()

  const showSuccessMessage = (message) => {
    enqueueSnackbar(message ?? 'Successfully executed.', { variant: 'success' })
  }

  const showErrorMessage = (message) => {
    enqueueSnackbar(message ?? 'Error in execution', { variant: 'error' })
  }

  const showWarningMessage = (message) => {
    enqueueSnackbar(message ?? 'Invalid exceution', { variant: 'warning' })
  }

  return { showSuccessMessage, showErrorMessage, showWarningMessage }
}

export default useSnackbarNotifier
