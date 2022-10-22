import { FaSearch } from "react-icons/fa"
export const SearchBox = ({name, handleSearch, value}) => {

    return (
        <>
            <input className="input is-small" value={value} placeholder='search' name={name} onChange={handleSearch} type="search" />
            <span className="icon is-small is-left"><i className="icon">{<FaSearch />}</i></span>
        </>
    )
}