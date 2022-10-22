import React from 'react'
import { EngData } from './engineers-info/engData'
import { EngTableHeader } from './engineers-info/engTableHeader'
import Notification from './Notification'

const EngineersInfo = ({ engineers, handleDel }) => {
  return (
    <>
      <Notification data={engineers} dataName="engineers" />
      <table className="table is-bordered">
        <EngTableHeader />
        {engineers.map((eachEng, id) => {
          return <EngData engineer={eachEng} key={id} id={id} handleDel={handleDel}/>
        })}
        <tfoot>

        </tfoot>
      </table>
    </>
  )
}

export default EngineersInfo