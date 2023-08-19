import React, { type FC } from "react"

interface ShowLocationProps {
  city: string
  country: string
}

export const ShowLocation: FC<ShowLocationProps> = ({ city, country }) => {
  const dataStyles = "plasmo-text-theme-primary plasmo-font-medium plasmo-mb-2"
  return (
    <>
      <h1 className="plasmo-text-lg plasmo-text-dark-primary tracking-wide">
        Your country is <em className={dataStyles}>{country}</em>
        <br />
        and city is <em className={dataStyles}>{city}</em>
      </h1>
    </>
  )
}
