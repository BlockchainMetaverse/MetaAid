import React, { FC } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: grey[800],
        },
      },
    },
  },
})

interface CardButtonLoading {
  message: string
}
const CardButtonLoading: FC<CardButtonLoading> = ({ message }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="rounded-md overflow-hidden bg-gray-800">
        <Button
          fullWidth={true}
          variant="outlined"
          startIcon={<CircularProgress color="inherit" size={20} />}
          disabled
          style={{ textTransform: 'none' }}
          size="medium">
          <span className="text-white text-opacity-30 ">{message}</span>
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default CardButtonLoading
