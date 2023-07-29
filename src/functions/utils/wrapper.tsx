import WrapperComponent from "../../components/utils/wrapper"
import React from "react"

export function Wrapper(elements: JSX.Element[]) {
  return (
    Array.isArray(elements)
      ? elements.map((element, i) => (
        <WrapperComponent key={i}>
          {element}
        </WrapperComponent>
      ))
      : elements
  )
}
