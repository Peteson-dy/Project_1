import React from 'react'

function test() {
  return (
    function App() {

        const clickMe = async () => {
          // const headers = new Headers({"Content-Type": "application/json"})
          // let formData = new FormData();
          // formData.append("name", "info")
          // formData.append("age", 23)
          // fetch('http://127.0.0.1:8000/items', {
          //   method: "POST",
          //   mode: "no-cors",
          //   credentials: 'same-origin',
          //   referrerPolicy: 'no-referrer',
      
          //   headers: headers,
          //   body: {name:"info",age:23}
          // }).then(function  (response) {
          //   response.json()
      
          // }).then(response=>console.log(response))
          //   .catch(function (err) {
          //     console.log('Fetch Error :-S', err);
          //   });
      
          fetch('http://127.0.0.1:8000/items', {
            method: "POST",
            mode: 'cors',
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin",
            body: JSON.stringify({ name: "info", age: 34 })
          })
            .then((response) => {
              return response.json();
      
            }).then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log("err ", err)
            });
        }
        return (
          <div>
            <button onClick={clickMe}>click me</button>
          </div>
        );
      }
        
  )
}



  export default test