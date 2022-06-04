import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Index(props){
    //const { id } = useParams()
    let navigate = useNavigate()
    const bookmarks = props.bookmark
   // const bookmark = bookmarks ? bookmarks.find((b) => b._id === id):"";
    const[bookmark, setBookmark]=useState();

    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        url: "",
    })


    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createBookmark(newForm)
        setNewForm({
            title: "",
            url: "",
        })
    }


    //Delete Function
    const deleteBookmark = (id) => {
        console.log(props.deleteBookmark)
       props.deleteBookmark(id)
        navigate('/')
    }

    //Update Function for Button
    const updateBookmark = (id) => {
        //props.updateBookmark(bookmark._id)
        navigate(`/bookmarks/${id}`)
    }


    //Loaded and Loading functions
    const loaded = ()=>{
        return bookmarks.map((bookmark)=>(
            <div className='mark' key={bookmark._id}>
                    <a href={bookmark.url}><h1>{bookmark.title}</h1></a>
                <button id='update' onClick={(e)=>{updateBookmark(bookmark._id)}}>Edit</button>
                <button id='delete' onClick={(e)=>{deleteBookmark(bookmark._id)}}>x</button>
            </div>
        ))
    }

    const loading = ()=>{
        return <h1>Loading...</h1>
    }


    return(
        <section>
            <div className='submitForm'>
                <h3>Add a new Bookmark</h3>
                <form onSubmit={handleSubmit}>

                    <input
                    type="text"
                    name="title"
                    placeholder="website"
                    value={newForm.title}
                    onChange={handleChange}
                    className="text" 
                    />
                    <input
                    type="text"
                    name="url"
                    placeholder="http://"
                    value={newForm.url}
                    onChange={handleChange}
                    className="text" 
                    />
                    <input type="submit" value="Add!!" className='button' />
                </form>
            </div>
            <div className='list'>
                {bookmarks ? loaded() : loading()}
            </div>
        </section>
    )

}