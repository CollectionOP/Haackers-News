import { useState } from "react"

const SearchBar = ({newsApiCall}) => {
    const [search, setSearch] = useState('')

    const handleClick = async () => {
        await newsApiCall(search)
    }

    return(
        
        <div className="w-full">
            <h1 className="w-80 mx-auto text-2xl mb-5">Welcome to Hackers News!</h1>
            <div className="mx-auto w-72">
                <input placeholder="Search for news" className="border-2" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                <input className="ml-2 border-2" type="submit" onClick={handleClick}></input>
            </div>
        </div>
    ) 
    
}


export default SearchBar