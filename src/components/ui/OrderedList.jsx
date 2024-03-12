import React from 'react'

function OrderedList({ index, children }) {
  return (
    <li style={{ listStyle: 'none', counterIncrement: 'list', marginTop: '0.5rem' }}>
      <span style={{ display: 'inline-block', width: '1em', textAlign: 'center' }}>
        ({String.fromCharCode(96 + index)})
      </span>
      &nbsp;
      <span>{children}</span>
    </li>
  )
}

export default OrderedList
