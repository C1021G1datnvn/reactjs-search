/* eslint-disable react/jsx-key */
import { useState } from "react";

export const Search = () => {
  const fruits = [{name: 'Banana'},{name: 'Orange'},
  {name: 'Apple'},{name: 'WaterMelon'},
  {name: 'Mango'},{name: 'PineApple'}];
  const [FruitsShow, setFruitsShow] = useState(fruits);
  const [activeValue, setActiveValue] = useState("");
  const handleChange = (event) => {
    setActiveValue(event.target.value);
  };

  const SearchFruit = () => {
    const searchResult = fruits?.find(fruit => fruit?.name === activeValue)
    setFruitsShow([searchResult]);
  }

  return (
    <>       
      <div style={{display:'flex', justifyContent:'center'}}>
        <input placeholder="Search..." value={activeValue} onChange={handleChange}></input>
        <button onClick={SearchFruit} style={{background:'#47b475', color:'white', marginLeft:'10px', border:'1px solid grey'}}>
          Search
        </button>
      </div>
      {FruitsShow?.map((fruit) => <FruitValue value={fruit?.name} />)}
    </>
  )
}

const FruitValue = ({value, isShow}) => {
  return ( 
    <div style={{textAlign:'center'}}>
      <div>
      <p className={`${!isShow && 'd-none'}`}>{value}</p>
      </div>
    </div>
  )
}