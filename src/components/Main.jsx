import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

function Main(props) {
    const [bookmark, setBookmark] = useState(null)
    const URL = "https://vanilla-ice-bookmark-backend.herokuapp.com/bookmarks"

    const getBookmarks = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setBookmark(data)
    }



    useEffect(() => {
        getBookmarks()
    }, [])
}
export default Main