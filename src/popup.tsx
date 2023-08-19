import React, { useState } from "react"

import { LocationButton } from "~features/location-button"

import "~style.css"

function IndexPopup() {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-[500px] plasmo-w-[500px]">
      <LocationButton txt="Show My Location" />
    </div>
  )
}

export default IndexPopup
