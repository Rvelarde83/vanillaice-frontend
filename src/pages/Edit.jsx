import { useState } from "react";
import { useNavigate, useParams } from "react-router"

export default function Edit ({bookmark,updateBookmark}){
    const { id } = useParams()
    let navigate = useNavigate()
    console.log(bookmark)
    const mark=bookmark? bookmark.find(mark => mark._id === id):""
    const [newForm, setNewForm] = useState({
        title: mark.title,
        url: mark.url,
    })

    
    const handleChange = (event) => {
        setNewForm(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBookmark(newForm,id);
        navigate("/")
        
    }
   
    return (
        <section>
            <h3>Edit Bookmark</h3>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    value={newForm.title}
                    placeholder={mark.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="url"
                    placeholder={mark.url}
                    value={newForm.url}
                    onChange={handleChange}
                />
                <input type="submit" value="Update!!" />
            </form>

        </section>
    );

}