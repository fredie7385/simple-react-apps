import React from 'react';
import '../styles/Meal_Api.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function Meal_API() {
  const [items, setItems] =useState([])
  useEffect(() =>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res =>{
      setItems(res.data.meals)
    }).catch((err)=>{
      console.log(err)
    })
  },[]);
  const itemList = items.map(({strMeal, strMealThumb, idMeal}) =>{
    return (
      <section className="card">      
        <img src={strMealThumb}/>
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    )
  })
  return <div className="items-container">{itemList}</div>
}

export default Meal_API