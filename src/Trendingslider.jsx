import React, { useEffect, useState } from 'react'
import './Trendingslider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Trendingslider = () => {
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
    puaseOnHover:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="Trendingslider">
    
    <Slider {...settings}>
    
    {
        data.map((item,index)=>(
          <Link to={`/${item.idMeal}`} key={index}>
            <div className='trend-slider' key={index}>
            <img className='trend-slider-img' src={item.strMealThumb} alt=""  />
            </div>
            </Link>
        ))
    }
    </Slider>
    </div>
    
    </>
  )
}

export default Trendingslider