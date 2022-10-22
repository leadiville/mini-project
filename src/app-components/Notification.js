import React from 'react'

const Notification = ({data, dataName}) => {
  return (
        <>
            {data.length === 0 ? <p className="content is-small">
                <strong>{`No saved ${dataName} yet...`}</strong>
                </p> : (
                    <div className="columns content is-small has-text-centered">
                        <p className="column" ><strong>{`number of ${dataName}: ${data.length}`}</strong></p>
                        <p className="column" ><strong>{`inprogress: ${data.filter((each) => each.status = true).length}`}</strong></p>
                        <p className="column" ><strong>{`completed: ${data.filter((each) => each.status = true) }`}</strong></p>
                    </div>
            )}
        </>
    )
}

export default Notification