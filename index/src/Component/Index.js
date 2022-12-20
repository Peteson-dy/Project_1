import { React, useState, useEffect } from "react";
import Axios from "axios";
function Index() {
  const [idnumb, setid] = useState([]);
  const [post, setpots] = useState({});
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    id: "",
  });
function handleevent(e){
  
  //
}

function searchUser(e){
  e.preventDefault();
  setid(idnumb)
}
  function submit(e) {
    e.preventDefault();
    Axios.post("http://127.0.0.1:8000/new", data)

      .then((response) => {
        console.log(response.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }
  useEffect(() => {
    Axios.get(`/users/${idnumb}`)
      .then((response) => {
        setpots(response.data);
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <br/>
        <button>submit</button>
        <br />
      </form>
      <hr />
      <form onSubmit={e=>searchUser(e.target.value)}>
      <input
        placeholder="search user"
        value={idnumb}
        onChange={e=>setid(e.target.value)}
      ></input>
      <button>search</button>
      </form>
      
      {/* <ul>
      {post.map(post=><li key={post.id}>
        {post.firstname}
      </li>)}
     </ul> */}
    </div>
  );
}

export default Index;
