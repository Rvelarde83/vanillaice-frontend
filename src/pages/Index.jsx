import { useState } from "react";
export default function Index({ bookmark, createBookmark }) {

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

    return (
        <section>
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

        </section>
    );
}