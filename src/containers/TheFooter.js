import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2021 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://alex-personal.000webhostapp.com" target="_blank" rel="noopener noreferrer">Aleksandr Aksenov</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
