import React, { useEffect, useState } from 'react'
import './Recipeid.css'
import { useParams } from 'react-router-dom';
import Trendingslider  from './Trendingslider.jsx'
import Nav  from './Nav.jsx'

const Recipeid = () => {

  const [data,setdata]=useState([])
  const [active,setactive]=useState('ingredient')
  const {idMeal} =useParams();
  
  useEffect(()=>{
    async function fetchData()
  {
    const api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const res=await api.json();
    setdata(res.meals[0]);
  }
  fetchData();
  },[idMeal])

  return (
    <>
    <Nav></Nav>
    <div className="Recipeid">
        <h1>{data.strMeal}</h1>
        <div className="recipeid-flex">
        <div className="recipeid-img">
          <img className='recipeid-img1' src={data.strMealThumb} alt="" />
        </div>
        <div className="recipeid-btns">
          <button className={active === 'ingredient' ? 'active' : ''}  onClick={()=>setactive('ingredient')}>Ingridents</button>
          <button className={active === 'instruction' ? 'active' : ''} onClick={()=>setactive('instruction')}>Instructions</button>
        {
        active=== 'ingredient' ?
        (
        <div className="recipe-active">
        <div className="recipe-Ingredient">{data.strIngredient1}-{data.strMeasure1}</div>
        <div className="recipe-Ingredient">{data.strIngredient2}-{data.strMeasure2}</div>
        <div className="recipe-Ingredient">{data.strIngredient3}-{data.strMeasure3}</div>
        <div className="recipe-Ingredient">{data.strIngredient4}-{data.strMeasure4}</div>
        <div className="recipe-Ingredient">{data.strIngredient5}-{data.strMeasure5}</div>
        <div className="recipe-Ingredient">{data.strIngredient6}-{data.strMeasure6}</div>
        </div>
        ) :
        <div className="recipe-instruction">
        <p className='recipe-instruction1'>{data.strInstructions}</p>
        </div>
        }
        </div>
        
        </div>

        <Trendingslider></Trendingslider>
    </div>
    </>
  )
}

export default Recipeid