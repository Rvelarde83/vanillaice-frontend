import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom"
import Edit from "../pages/Edit"
import Index from "../pages/Index"

function Main() {
    const [bookmark, setBookmar] = useState(null)
    const URL = "https://vanilla-ice-bookmark-backend.herokuapp.com/bookmarks/"

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

    const updateBookmark = async (bookmark, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(bookmark)
        })
        getBookmarks()
    }

    const deleteBookmark = async (id) => {
        await fetch(URL + id, {
            method: "DELETE"
        })
        getBookmarks()
    }

    useEffect(() => {
        getBookmarks()
    }, [])
    

    return (
        < main >
            <Routes>
                <Route path="/" element={<Index bookmark={bookmark} createBookmark={createBookmark} deleteBookmark={deleteBookmark} />}></Route>
                <Route path='/bookmarks/:id' element={<Edit bookmark={bookmark} updateBookmark={updateBookmark} />}/>
            </Routes>
        </main >
    )
}
export default Main