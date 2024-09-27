import React,{useState} from "react";
import  Axios  from "axios";
const DemoPut=()=>
{
    const [name,setName]=useState('');
    const [userId, setUserId] = useState([]);
   
    const addNew=()=>{
        Axios.put('https://jsonplaceholder.typicode.com/users/'+userId,{name:name})
        .then(res=>console.log(res.data));
    }
    return(
        <>

        <h1>Put Demo</h1>
        <input type="text" value={userId} onChange={(e)=>setUserId(e.target.value)}/><br></br>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br>
        <button onClick={addNew}>Add New</button>
        <h1>HELLO</h1>
       
        </>
    )
}
export default  DemoPut;