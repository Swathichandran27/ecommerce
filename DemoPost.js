/*import React,{useState} from "react";
import  Axios  from "axios";
const DemoPost=()=>
{
    const [name,setName]=useState('');
    //const [users, setUsers] = useState([]);
   
    const addNew=()=>{
        Axios.post('https://jsonplaceholder.typicode.com/users',{name:name})
        .then(res=>console.log(res.data));
    }
    return(
        <>

        <h1>Post Demo</h1>
        
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={addNew}>Add New</button>
       
        </>
    )
}
export default  DemoPost;*/
import React, { useState } from "react";
import Axios from "axios";

const DemoPost = () => {
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const addNew = () => {
        Axios.post('https://jsonplaceholder.typicode.com/users', { name })
            .then(res => setUsers([...users, res.data])); // Append new user to the list
    };

    return (
        <>
            <h1>Post Demo</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter name" 
            />
            <button onClick={addNew}>Add New</button>
            <h2>Users:</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default DemoPost;
