import React, { type FC } from "react"

interface ShowMyLocationButtonProps {
  txt: string
}

export const LocationButton: FC<ShowMyLocationButtonProps> = ({ txt }) => {
  return (
    <div>
      <button>{txt}</button>
    </div>
  )
}
