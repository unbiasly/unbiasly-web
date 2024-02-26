import { Button } from '@mui/material'

export default function PrimaryButton({ text }) {
  return (
    <Button
      variant='contained'
      sx={{
        textTransform: 'capitalize',
        borderRadius: '90px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {text}
    </Button>
  )
}
