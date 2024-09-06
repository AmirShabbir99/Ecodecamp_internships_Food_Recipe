import React, { useState } from 'react'
import './Nav.css'
import { Link,useNavigate } from 'react-router-dom'
const Nav = () => {
  const navigate=useNavigate()
  const [input,setinput]=useState('')
  const [act,setAct]=useState('all')
  
  const arrayData= ['Indian','American','British','Chinese']
const handleSubmit=(e)=>
{
  e.preventDefault()
  navigate(`/search/${input}`)
}
  
return (
    <>
    <div className="Nav">
        <Link to={'/'}>
        <div className="recipe-logo">Recipe</div>
        </Link>
        
        <form onSubmit={handleSubmit}>
          <input 
          className='nav-input'
          type="text" 
          onChange={(e)=>setinput(e.target.value)}
          placeholder='  search recipe' 
          />
        </form>
        <div className="recipe-list">
        {
        arrayData.map((item,index)=>(
        <div className='recipe-nav' key={index}>
        <Link to={`/category/${item}`} onClick={()=>setAct(item)} >
        <div className={item === act  ? 'active' : ''}  >{item}</div>
        </Link>
        </div>
        ))}
        </div>
        </div>
    </>
  )
}

export default Nav