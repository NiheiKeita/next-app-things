
import React from 'react'
import { Match, When } from '~/components/MatchWhen'

export const MatchView = React.memo(function MatchView() {

  return (
    <>
      <Match>
        <When exp={true}>
          <div>failed to load</div>
        </When>
        <When exp={true}>
          <div>loading...</div>
        </When>
        <When exp={true}>
          <div>hello</div>
        </When>
        <When otherwise>
          <div>no data available</div>
        </When>
      </Match>
      vdf
    </>
  )
})
export default MatchView


