import { Link, useNavigate, useParams, useState } from 'react-router-dom'

export default function Index(props, {createBookmark}){
    const { id } = useParams()
    let navigate = useNavigate()
    const bookmarks = props.bookmarks
    const bookmark = bookmarks.find((b) => b._id === id)


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
        createBookmark(newForm)
        setNewForm({
            title: "",
            url: "",
        })
    }


    //Delete Function
    function deleteBookmark(){
        props.deleteBookmark(bookmark._id)
        navigate('/')
    }


    //Loaded and Loading functions
    const loaded = ()=>{
        return props.bookmarks.map((bookmark)=>(
            <div key={bookmark._id}>
                <Link to={bookmark.url}>
                    <h1>{bookmark.title}</h1>
                </Link>
                <button id='delete' onClick={deleteBookmark}>x</button>
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
                    />
                    <input
                    type="text"
                    name="url"
                    placeholder="http://"
                    value={newForm.url}
                    onChange={handleChange}
                    />
                    <input type="submit" value="Add!!" />
                </form>
            </div>
            <div className='list'>
                {props.bookmarks ? loaded() : loading()}
            </div>
        </section>
    )

}