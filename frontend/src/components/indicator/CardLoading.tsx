import React, { FC } from 'react'
import Skeleton from '@mui/material/Skeleton'

const CardLoading: FC = () => {
  return (
    <div className="px-4 py-2">
      <div className="py-2">
        <Skeleton
          variant="circular"
          width={150}
          height={150}
          animation="wave"
          sx={{ bgcolor: 'purple.800' }}
        />
      </div>
      <div className="py-2">
        <Skeleton height={30} animation="wave" sx={{ bgcolor: 'purple.800' }} />
        <Skeleton width="60%" height={30} animation="wave" sx={{ bgcolor: 'purple.800' }} />
      </div>
    </div>
  )
}

export default CardLoading
