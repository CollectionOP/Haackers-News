import { useState } from "react"

const SearchBar = ({setNews, newsApiCall}) => {
    const [search, setSearch] = useState('')

    const handleClick = async () => {
        await newsApiCall(search)
    }
    return(
        <>
        <input type="submit" onClick={handleClick}></input>
        <input placeholder="Search..." className="border-2" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        </>
    )
    
}


export default SearchBar