import React, {useState} from "react";
import { useHistory } from "react-router";
import axios
 from "axios";
const AddFriend = () => {
    const {push} = useHistory();
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })
    const handleChange =(e) => {
        setFriend({
            ...friend,
            [e.target.name]:e.target.value
        });
        
        const handleSubmit = (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token')
            return( 
                axios.post(`http://localhost:9000/api/friends`, friend, {
                    headers: {
                        authorization: token
                    }
                })
                .then(res => {
                    push('/friends');
                })
                .catch(err => {
                    console.error(err)
                })
            );
            }
    }
    return(<div>
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={handleChange} id="name"/>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input onChange={handleChange} id="age"/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} id="email"/>
            </div>
            <button>Submit</button>
        </form>
    </div>)
}
export default AddFriend;