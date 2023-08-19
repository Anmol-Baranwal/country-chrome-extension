import React, { useState } from "react"

import { LocationButton } from "~features/location-button"

import "~style.css"

function IndexPopup() {
  const [loading, setLoading] = useState<boolean>(false)

  // to display the info
  const [country, setCountry] = useState<string>("")
  const [city, setCity] = useState<string>("")

  const handleFetchLocation = async () => {
    setLoading(true)
    try {
      // to get geolocation
      const Response = await fetch("https://api.ipify.org?format=json") // sample output: {"ip":"98.207.254.136"}

      // good for displaying custom message
      if (!Response.ok) {
        throw new Error("Error fetching IP data")
      }

      const ipData = await Response.json()

      // as denoted by the sample output
      const ipVal = ipData.ip

      // call ipinfo.io API to get the location
      const locResponse = await fetch(
        `https://ipinfo.io/${ipVal}/geo?token=${process.env.PLASMO_PUBLIC_IPINFO_TOKEN}`
      )

      if (!locResponse.ok) {
        throw new Error("Error fetching location data")
      }

      const locData = await locResponse.json() // sample output: {"ip": "49.42.95.190", "city": "Sonīpat", "region": "Haryana", "country": "IN", "loc": "28.9948,77.0194", "org": "AS55836 Reliance Jio Infocomm Limited", "postal": "131001", "timezone": "Asia/Kolkata"}
      const { city, country } = locData

      setCity(city)
      setCountry(country)
    } catch (error) {
      console.log("Error in fetching geolocation", error)
      setLoading(false)
    }
  }

  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-[500px] plasmo-w-[500px]">
      <LocationButton
        txt="Show My Location"
        loading={loading}
        handleFetching={handleFetchLocation}
      />
    </div>
  )
}

export default IndexPopup
