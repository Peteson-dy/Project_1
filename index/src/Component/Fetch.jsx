import {React,useEffect, useState} from 'react'
import axios from 'axios'

function Fetch() {
    const [set,setCount] = useState([])
    const [name,setName] = useState('')

    useEffect(()=>{
      document.title=`you clicked ${set} times.`
      console.log(`updating.....${set}`)
      return ()=>{
        console.log('unlike reel.')
        setCount(false)
      }
    },[set])
    axios.post('http://loclahost:8000/new/',{
      name:'gina'
    })
    .then(
      res=>{
        console.log(res)
      }
    )
  return (
    <div>
        <input type='text' onChange={e=>setName(e.target.value)} value={name}/>
        <button  onKeyDown={()=>setCount(true)}>like {set}</button></div>
  )
}

export default Fetch