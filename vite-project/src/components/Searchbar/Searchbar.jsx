import { useState } from "react"

const SearchBar = ({ setNews, newsApiCall }) => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)

    const handleNextPage = () => {
        setPage(page + 1);
    }

    const handlePrevPage = () => {
        setPage(page - 1);
    };



    const handleClick = async () => {
        setPage(0)
        await newsApiCall(search)
    }
    return (
        <>
            <input type="submit" onClick={handleClick}></input>
            <input placeholder="Search..." className="border-2" type="text" value={search} onChange={e => setSearch(e.target.value)} />
        </>
    )

}


export default SearchBar