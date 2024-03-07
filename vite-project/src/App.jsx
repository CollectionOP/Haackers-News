import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Main from "./components/Main/Main.jsx"
import axios from 'axios'
import {useState, useEffect} from 'react'
import SearchBar from "./components/Searchbar/Searchbar.jsx"

function App() {

  const [news, setNews] = useState();
  const [error, setErr] = useState();
  const [isLoading, setIsLoading] = useState(true)

  const newsApiCall = async (search) => {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${search}&page=1`)
      setNews(response.data.hits)
      // console.log(news);
    }
    catch (err){
      setErr(err)
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    newsApiCall();
  }, [])
  
  if (isLoading) return <p>Is Loading</p>
  
  return (
    <>
    <Navbar/>
    <SearchBar news={news} newsApiCall={newsApiCall}/>
    <Main news= {news}/>
    <Footer/>
    </>
  )
}

export default App
