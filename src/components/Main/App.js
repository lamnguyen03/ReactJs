import Card from './Card';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [listPros,setlistPros]=useState([]);
  const [type,setType] =useState('')
  const getData=()=>{
    axios.get("https://61bc10c1d8542f0017824535.mockapi.io/Products")
      .then((res) => {
        setlistPros(res.data);
      })

  };
  useEffect(() =>{
      getData()
    },[]);
  return (
    <>
      <button onClick={() => { setType("phone");}}>
        Phone
      </button>
      <button onClick={() => {setType("laptop");}}>
        Laptop
      </button>
      <div class="row">
        {type == ""
          ? listPros.map((product) => (
              <Card
                linkimg={product.avatar}
                namepro={product.name}
                price={product.price}
              />
            ))
          : listPros
              .filter((product) => product.type == type)
              .map((product) => (
                <Card
                  linkimg={product.avatar}
                  namepro={product.name}
                  price={product.price}
                />
              ))}
      </div>
    </>
  );


}

export default App;
