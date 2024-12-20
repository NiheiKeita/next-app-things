
import React from 'react'

type MatchProps = {
  children: React.ReactNode;
}
export const Match = React.memo<MatchProps>(function Match({
  children
}) {

  return (
    React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) &&
        ((child.props.exp || child.props.otherwise))
    ) || <></>
  )
})

type WhenProps = {
  children: React.ReactNode;
  exp?: boolean | number;
  otherwise?: boolean;
}
export const When = React.memo<WhenProps>(function When({
  children,
  exp = false,
  otherwise = false
}) {

  return exp === 0 ? <></> : (exp || otherwise) ? <>{children}</> : <></>
})


