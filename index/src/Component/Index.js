import { React, useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";
function Index() {
  const [deleteId, setdeleteId] = useState(1);
  const [idFromdelete, setdelete] = useState(1);
  const [idFrombtnClick, setIdFrombtnClick] = useState(1);
  const [idnumb, setid] = useState(1);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    id: "",
  });
  function Onload (){
    const [loading,setloading] = useEffect(false)
    useEffect(()=>{
      setloading(true);
      setTimeout(() => {
        setloading(false)
      }, 2000);
    }, [])
  }
  function delete_user(e) {
    e.preventDefault();
    setdelete(deleteId);
    axios
      .delete(`http://127.0.0.1:8000/remove/${idFromdelete}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSearch() {
    setIdFrombtnClick(idnumb);
    //
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/new/", data)
      .then(() => {
      })
      .catch((err) => {
        console.log(err);
      });
  } 

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/user/${idFrombtnClick}`)
      .then((response) => {
        // setpots(response.data);
        console.log(response);
        // Onload()
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFrombtnClick]);

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          id="firstname"
          placeholder="firstname"
          type="text"
          value={data.firstname}
          onChange={(e) => setdata({ ...data, firstname: e.target.value })}
          required
        ></input>
        <br />
        <input
          id="lastname"
          placeholder="lastname"
          type="text"
          value={data.lastname}
          onChange={(e) => setdata({ ...data, lastname: e.target.value })}
          required
        ></input>
        <br />
        <input
          id="id"
          type="id"
          value={data.id}
          onChange={(e) => setdata({ ...data, id: e.target.value })}
          placeholder="id"
        />
        <br />
        <button>submit</button>
        <br />
      </form>
      <hr />
      <div className="container"> loading ? 
<div className="loader-container">
  <div className="spinner">
    <div className="object"></div>
  <div className="main">
    
    </div>
  </div>
</div>

</div> 
      <input
        placeholder="search user"
        value={idnumb}
        onChange={(e) => setid(e.target.value)}
      ></input>
      <button onClick={handleSearch} className='button'>search</button>
      <hr />
      <input
        placeholder="delete user"
        value={deleteId}
        onChange={(e) => setdeleteId(e.target.value)}
      ></input>
      <button onClick={delete_user}> Delete</button>
    </div>
  );
}

export default Index;
