import React, { useEffect, useState } from 'react'
import './Popularslider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trendingslider  from './Trendingslider.jsx'
import { Link } from 'react-router-dom';
import Nav  from './Nav.jsx'

const Popularslider = () => {
  const [data,setdata]=useState([])

  
  useEffect(()=>{
    async function fetchData()
  {
    const api=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    const res=await api.json();
    setdata(res.meals);
  }
  fetchData();
  },[])

 var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  autoplay:true,
  slidesToScroll: 4,
  pauseOnHover:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

    return (
    <>
    <div className="Popularslider">
    <Nav></Nav>
    <Slider {...settings}>
    
    {
      
        data.map((item,index)=>(
          <Link to={`/${item.idMeal}`} key={index}>
            <div className='slider' key={index}>
            <img className='slider-img' src={item.strMealThumb} alt=""  />
            </div>
          </Link>
        ))
    }
    </Slider>

    <Trendingslider></Trendingslider>
    
    </div>
    
    </>
  )
}

export default Popularslider