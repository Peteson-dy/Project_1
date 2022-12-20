import {React,useState,useEffect} from 'react'
import axios from 'axios'

function InstaLike() {
	const [data,Setdata] = useState([])
	const [input,Setinput] = useState(0)
	const [btnClick,setBtnclick] = useState(0)

	const eventHandler =()=>{
		setBtnclick(input)
	}


	useEffect(()=>{
		axios.get(`http://127.0.0.1:8000/user/${input}`)
		.then(res =>{
			console.log(res)
			Setdata(res.data)
		})
		.catch(err =>{
			console.log(err)
		})
	},[btnClick])


    return(
        <div>
			<input type='number' value={input} onChange={e=>Setinput(e.target.value)} />
			<button type='button' onClick={eventHandler}> Search</button>
<ul style={{listStyleType:'none'}}>{data.map((data)=>{
	return(
		<li key={setBtnclick} >{data}</li>
	)
})}


</ul>

        </div>
    )
}

export default InstaLike;