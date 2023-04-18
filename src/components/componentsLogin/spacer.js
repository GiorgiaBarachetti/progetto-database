import React from 'react'

const Spacer = ({ height, width }) => {
  return (
    <div
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
      />
  )
}

export default Spacer
