import React, { FC, useCallback, useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { ErrorType } from '../../lib/type'
import Slide, { SlideProps } from '@mui/material/Slide'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

interface ErrorProps {
  error: ErrorType
  onClose: () => void
}

const Toast: FC<ErrorProps> = ({ error, onClose }) => {
  const { isOpen, severity, message, link } = error
  const [open, setOpen] = useState(isOpen)

  type TransitionProps = Omit<SlideProps, 'direction'>
  const TransitionLeft = useCallback((props: TransitionProps): JSX.Element => {
    return <Slide {...props} direction="left" />
  }, [])

  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined)

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason !== 'clickaway') {
      setTransition(() => TransitionLeft)
      setOpen(false)
      onClose()
    }
  }

  useEffect(() => {
    setTransition(() => TransitionLeft)
  }, [TransitionLeft])
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      TransitionComponent={transition}
      key={transition ? transition.name : ''}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" className="underline">
            {message}
          </a>
        ) : (
          <span>{message}</span>
        )}
      </Alert>
    </Snackbar>
  )
}

export default Toast
