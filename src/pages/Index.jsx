import { Link, useNavigate, useParams } from 'react-router-dom'



function Index(props){
    const { id } = useParams()
    let navigate = useNavigate()
    const bookmarks = props.bookmarks
    const bookmark = bookmarks.find((b) => b._id === id)


    //Form Code




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
            {/* form */}

            {/* ternary to call function to load bookmarks */}
            {props.bookmarks ? loaded() : loading()}
        </section>
    )
}