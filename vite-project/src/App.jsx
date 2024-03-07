import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Main from "./components/Main/Main.jsx"
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {


  const [news, setNews] = useState();
  const [error, setErr] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)


  const newsApiCall = async () => {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=&page=${page}`)
      setNews(response.data.hits)
      // console.log(news);




    }
    catch (err) {
      setErr(err)
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    newsApiCall();
  }, [page])

  const handleNextPage = () => {
    setPage(page + 1);

  }

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (isLoading) return <p>Is Loading</p>



  return (
    <>

      <Navbar />
      <Main news={news} />

      <div className="flex justify-around my-5">

        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={handlePrevPage}>Previous</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={handleNextPage}>Next</button>
      </div>

      <Footer />

    </>
  )
}

export default App
