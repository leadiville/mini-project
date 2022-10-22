import React from 'react'
import { FaPlus } from "react-icons/fa"
import AddNewBtn from './addNewBtn'
import { SearchBox } from './searchBox'

const AppLevel = ({ actionName, handleClick, handleSearch, title, value}) => {

    return (
        <>
            <div className="level-left">
                <div className="field">
                    <p className="control">
                        <AddNewBtn handleClick={handleClick} icon={<FaPlus />} actionName={actionName} />
                    </p>
                </div>
            </div>
            <div className="level-right">
                <div className="field">
                    <p className="control has-icons-left">
                        <SearchBox name={title} handleSearch={handleSearch} value={value}/>
                    </p>
                </div>
            </div>
        </>
    )

}

export default AppLevel