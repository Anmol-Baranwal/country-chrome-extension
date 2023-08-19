import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { type FC } from "react"

interface ShowMyLocationButtonProps {
  txt: string
  loading: boolean
  handleFetching: () => void
}

export const LocationButton: FC<ShowMyLocationButtonProps> = ({
  txt,
  loading,
  handleFetching
}) => {
  return (
    <div>
      <button
        onClick={handleFetching}
        className="plasmo-flex plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all plasmo-border-none
      plasmo-shadow-lg hover:plasmo-shadow-md plasmo-mr-3">
        {loading ? (
          <>
            <FontAwesomeIcon icon={faSpinner} spin size="lg" />
            Loading ...
          </>
        ) : (
          <>{txt}</>
        )}
      </button>
    </div>
  )
}
