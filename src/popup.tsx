import React, { useState } from "react"

import { LocationButton } from "~features/location-button"
import { ShowLocation } from "~features/show-location"

import "~style.css"

function IndexPopup() {
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>("")

  // to display the info
  const [country, setCountry] = useState<string>("")
  const [city, setCity] = useState<string>("")

  const handleFetchLocation = async () => {
    setLoading(true)
    setErrorMsg("")
    try {
      // to get ip address
      const Response = await fetch("https://api.ipify.org?format=json") // sample output: {"ip":"98.207.254.136"}

      // good for displaying custom message
      if (!Response.ok) {
        throw new Error("Error fetching IP data")
      }

      const ipData = await Response.json()

      // as denoted by the sample output
      const ipVal = ipData.ip

      // call ipinfo.io API to get the geolocation
      const locResponse = await fetch(
        `https://ipinfo.io/${ipVal}?token=${process.env.PLASMO_PUBLIC_IPINFO_API_TOKEN}`
      )

      if (!locResponse.ok) {
        throw new Error("Error fetching location data")
      }

      const locData = await locResponse.json() // sample output: {"ip": "49.42.95.190", "city": "Sonīpat", "region": "Haryana", "country": "IN", "loc": "28.9948,77.0194", "org": "AS55836 Reliance Jio Infocomm Limited", "postal": "131001", "timezone": "Asia/Kolkata"}
      const { city, country } = locData

      setCity(city)
      setCountry(country)
      setErrorMsg("")
    } catch (error) {
      console.log("Error in fetching geolocation" + error)
      setErrorMsg(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-h-[500px] plasmo-w-[500px] plasmo-border-2 plasmo-border-solid plasmo-border-dark">
      {city && country && (
        <div className="plasmo-mb-4">
          <ShowLocation city={city} country={country} />
        </div>
      )}
      {errorMsg && (
        <p className="plasmo-my-3 plasmo-text-lg plasmo-text-gray-text">
          {errorMsg}
        </p>
      )}
      <LocationButton
        txt="Show My Location"
        loading={loading}
        handleFetching={handleFetchLocation}
      />
    </div>
  )
}

export default IndexPopup
