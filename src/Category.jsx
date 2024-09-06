import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Category.css'
import Nav  from './Nav.jsx'

const Category = () => {

    const [data,setdata]=useState([])
  const {name} =useParams();
  
  useEffect(()=>{
    async function fetchData()
  {
    const api=await fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${name}`);
    const res=await api.json();
    if (res.meals) {
        setdata(res.meals);
      } else {
        setdata([]);  // Set to an empty array if res.meals is null
      }
  }
  fetchData();
  },[name])

  return (
    <>
    <Nav></Nav>
    <div className="Category">
    {
        data.map((item,index)=>(
          <Link to={`/${item.idMeal}`} key={index} className='recipe-link'>
            <div key={index} className="category-map">
            <div  className="category-content">
                <img className="category-img" src={item.strMealThumb} alt="" />
            <h3>{item.strMeal}</h3>
            </div>
            </div>
            </Link>
            
        ))
    }
    </div>
    </>
  )
}

export default Category