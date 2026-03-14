import React from 'react'
function DetailRow({ label, value }) {
  return (
    <div className="summary__row">
      <span>{label}</span>
      <strong>{value || 'Not provided yet'}</strong>
    </div>
  )
}

export default DetailRow
