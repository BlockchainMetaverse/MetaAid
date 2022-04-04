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
          // backgroundColor: 'rgba(255,255,255, 0.2)',
          backgroundColor: grey[800],
        },
      },
    },
  },
})

const CardButtonLoading: FC = () => {
  return (
    <div className="rounded-md overflow-hidden bg-gray-800">
      <ThemeProvider theme={theme}>
        <Button
          fullWidth={true}
          variant="outlined"
          startIcon={<CircularProgress color="inherit" size={20} />}
          disabled
          size="medium">
          <span className="text-white text-opacity-30">Loading...</span>
        </Button>
      </ThemeProvider>
    </div>
  )
}

export default CardButtonLoading
