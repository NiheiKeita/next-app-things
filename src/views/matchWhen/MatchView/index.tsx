
import React, { useState } from 'react'
import { Match, When } from '~/components/MatchWhen'

export const MatchView = React.memo(function MatchView() {
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
      <Match>
        <When exp={selectedValue === 1}>
          <div>Content for 1</div>
        </When>
        <When exp={selectedValue === 2}>
          <div>Content for 2</div>
        </When>
        <When exp={selectedValue === 3}>
          <div>Content for 3</div>
        </When>
        <When otherwise>
          <div>No data available</div>
        </When>
      </Match>
    </>
  )
})
export default MatchView


