
import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function TableLoader (cols) {

  return (
    <>
      <tr>
        <td>
          <Skeleton count={1} width={40} />
        </td>
        <td><Skeleton count={1} width={60} /></td>
        <td><Skeleton count={1} width={80} /></td>
        <td><Skeleton count={1} width={75} /></td>
        <td><Skeleton count={1} width={94} /></td>
        <td><Skeleton count={1} width={56} /></td>
        <td><Skeleton count={1} width={75} /></td>
      </tr>
      <tr>
        <td>
          <Skeleton count={1} width={55} />
        </td>
        <td><Skeleton count={1} width={73} /></td>
        <td><Skeleton count={1} width={39} /></td>
        <td><Skeleton count={1} width={65} /></td>
        <td><Skeleton count={1} width={28} /></td>
        <td><Skeleton count={1} width={75} /></td>
        <td><Skeleton count={1} width={16} /></td>
      </tr>
      <tr>
        <td>
          <Skeleton count={1} width={64} />
        </td>
        <td><Skeleton count={1} width={73} /></td>
        <td><Skeleton count={1} width={39} /></td>
        <td><Skeleton count={1} width={65} /></td>
        <td><Skeleton count={1} width={28} /></td>
        <td><Skeleton count={1} width={75} /></td>
        <td><Skeleton count={1} width={16} /></td>
      </tr>
    </>
  )
}