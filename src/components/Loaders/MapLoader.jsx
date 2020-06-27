
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function MapLoader () {

  return (
      <div className="map_loader_container">
        <Skeleton className="map_loader_ske" circle={true} width={320} height={320} />
      </div>
  )
}