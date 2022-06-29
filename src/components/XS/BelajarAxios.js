import Axios from 'axios';
import React, { useState } from "react";


function BelajarAxios () {

  const [getApi, setApi] = useState("")

  const [count, setCount] = useState(()=>{
    console.log('aplikasi jalan')
    return 0
  })

  function increment () {
    // setCount(count + 1)
    setCount(prevCount => prevCount + 1)
  }

  function decrement () {
    // setCount(count + 1)
    setCount(prevCount => prevCount - 1)
  }


  const Api = () => {
      Axios.get("https://new-kbbi-api.herokuapp.com/")
      .then(response => {
          setApi(response.data.message)
        });
  }

  return (
    <div>
      <button onClick={Api}>Get API</button>
      <br></br>
      {getApi}
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}


export default BelajarAxios;





