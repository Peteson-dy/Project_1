import React,{useEffect,useState} from 'react'
import axios from 'axios'


function Crud() {
    const eventHandler =()=>{
        setclick(input)
    }

    const postinfo =()=>{
        addclick(name)
    }
    const [id,setid] = useState([])
    const [input,Setinput] = useState(0)
    const [btnClick,setclick] =useState(0)

    const [newuser,setuser] = useState([])
    const [name,setname] = useState('')
    const [lastname,setlast] = useState('')
    const [add,addclick] = useState()
useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/users/${input}`)
    .then(
        res =>{
        console.log(res)
        setclick(res.id)
        }
    )
    .catch(
        err=>{
            console.log(err)
        }
    )
},[btnClick])

const handleevent=()=>{
fetch('http://localhost:8000/new/',{
    method:'POST',
    mode:'no-cors',
    cache:'no-cache',
    credentials:'same-origin',
    headers:{"Content-Type":'application/text'},
    redirect:'follow',
    referrerPolicy:'no-referrer',
    body:JSON.stringify(name)
}).then(
    res =>{
        console.log(res.name)
    }
).catch(
    err=>{
        console.log(err)
    }
)
}
  return (
    <div>
        <input type='text' value={input} onChange={e=>Setinput(e.target.value)}/>
        <button onClick={eventHandler} >Search</button>
        <ul>{id.map((id)=>{
    return(
<li key={setclick}>{id.id}</li>
    )})}</ul>
        <hr/>
        <input type='text' value={name} onChange={e=>setname(e.target.value)} placeholder='firstname' required/>
        {/* <input type='text' value={lastname} onChange={e=>setlast(e.target.value)} placeholder='lastname' required/> */}
        <button type='button' onClick={handleevent}>Add User</button>

    </div>
  )
}

export default Crud