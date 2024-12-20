
import React, { useState } from 'react'

export const OldMatchView = React.memo(function OldMatchView() {
  const [selectedValue, setSelectedValue] = useState(1)

  return (
    <>
      <div className="mb-4 flex space-x-4">
        {[1, 2, 3].map((value) => (
          <label key={value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedValue === value}
              onChange={() => setSelectedValue(value)}
              className="cursor-pointer"
            />
            <span>{value}</span>
          </label>
        ))}
      </div>
      {selectedValue === 1 && (
        <div>Content for 1</div>
      )}
      {selectedValue === 2 && (
        <div>Content for 2</div>
      )}
      {selectedValue === 3 && (
        <div>Content for 3</div>
      )}
      {![1, 2, 3].includes(selectedValue) && (
        <div>No data available</div>
      )}
    </>
  )
})
export default OldMatchView


