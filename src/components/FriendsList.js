import React, {useState,useEffect} from"react";
import axios from "axios";

const FriendList = () => {
    const [friends, setFriends] = useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
       axios.get('htp//localhost:3000/api/friends',{
       headers: {
           authorization: token
        }

       })
       .then(resp=> {
           setFriends(resp.data)
        console.log(resp)
    })
       .catch(err =>{ console.log(err);
       })

    }, []);

    return(<div>
        <h2>FriendsList</h2>
        { friends.map( friends => {
               return  <li>{friends.name} - {friends.age} - {friends.email}</li>  
           })
         }
        </div>)
}

export default FriendsList;