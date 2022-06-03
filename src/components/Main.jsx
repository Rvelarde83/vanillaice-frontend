import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"

function Main() {
    const [bookmark, setBookmar] = useState(null)
    const URL = "https://vanilla-ice-bookmark-backend.herokuapp.com/bookmarks"

    const getBookmarks = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setBookmar(data)
    }


    const createBookmark = async (bookmark) => {
        console.log(bookmark)
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(bookmark),

        })

        // update list of people
        getBookmarks();
    }

    useEffect(() => {
        getBookmarks()
    }, [])

    return (
        < main >
            <Routes>
                <Route path="/" element={<Index bookmark={bookmark} createBookmark={createBookmark} />}></Route>
            </Routes>
        </main >
    )
}
export default Main