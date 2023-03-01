import React from 'react'

import RequestCallButton from './RequestCallButton';
import OnlineBookingButton from './OnlineBookingButton';

const RightBottomButtons = () => {
  return (
    <div className='right-bottom-buttons'>
      <OnlineBookingButton/>
      <RequestCallButton/>
    </div>
  )
}

export default RightBottomButtons