// import React,{useEffect,useState} from 'react'

// function Likebutton() {
//     const[count,setCount] = useState(0)

//     const tick=()=>{
//         setCount(count+ 1)
//     }

//     useEffect(()=>{
//         const interval = setInterval(tick,1000)
//         return()=> clearInterval(interval)
//     },[count])
//   return (
//     <div>
//         {count}
//     </div>
//   )
// }

// export default Likebutton




import React,{useState} from 'react'

function Likebutton() {
  const [name,setname] = useState('')
  const handlechange =event=>{
    setname(event.target.value)
    

  }
  const submithandle =event =>{
    
    console.log(name,'success.') 
  }
  return (
    <div>
      <input value={name} onChange={handlechange}></input>
      <button type='submit' onClick={submithandle}>submit</button>
     
    </div>
  )
}

export default Likebutton