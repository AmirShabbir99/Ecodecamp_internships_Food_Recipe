import React, { useEffect, useState } from 'react'
import './SearchElement.css'
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';

const SearchElement = () => {

  
  const [data,setdata]=useState([])
  const {searchTerm} =useParams();
  
  useEffect(()=>{
    async function fetchData()
  {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const res=await api.json();
     setdata(res.meals);
      
  }
  fetchData();
  },[searchTerm])

  return (
    <>
    
    <Nav></Nav>
    <div className="Category">
    {
        data.map((item,index)=>(
          <Link to={`/${item.idMeal}`} key={index} className='recipe-link'>
            <div  className="category-map">
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

export default SearchElement