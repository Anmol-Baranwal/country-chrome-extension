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
        className="plasmo-flex plasmo-items-center plasmo-px-4 plasmo-py-2 plasmo-mt-5 plasmo-text-sm plasmo-rounded-lg plasmo-transition-all
      plasmo-shadow-sm hover:plasmo-shadow-md plasmo-text-dark-primary plasmo-border plasmo-border-solid plasmo-border-dark plasmo-bg-text-primary
      active:plasmo-scale-105 active:plasmo-bg-light-primary hover:plasmo-bg-light-primary"
        style={{ letterSpacing: ".8px" }}>
        {loading ? (
          <>
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              size="lg"
              className="plasmo-mr-2"
            />
            Loading ...
          </>
        ) : (
          <>{txt}</>
        )}
      </button>
    </div>
  )
}
