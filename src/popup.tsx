import React, { useState } from "react"

import fetchGeolocation from "~features/fetch-geolocation"
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
      const { city, country } = await fetchGeolocation()

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
    <div className="bg-image plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-h-[500px] plasmo-w-[500px] plasmo-border-2 plasmo-border-solid plasmo-border-dark">
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
