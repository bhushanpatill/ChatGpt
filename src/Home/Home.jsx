import { useState,useEffect } from 'react'
import { Header, Footer, Blog, Possibility,  Featuress,  WhatGPT3} from '../Containers'
import { Brand, CTA, Features, Navbar} from '../Components'
import './Home.css'
import axios from "axios"

// import React from 'react'

const Home = () => {
    const [count, setCount] = useState(0)

    // const fetchAPI = async() => {
    //     const response = await axios.get("http://127.0.0.1:8000/api/users")
    //     console.log(response.data.users)
    
    //   }
    
    //   useEffect(()=>{
    //     fetchAPI();
    //   },[])
    
  return (
      <div className="App">
       <div className="gradient__bg">
          <Navbar/>
          <Header/>
       </div>
       <Brand/>
       <WhatGPT3/>
       <Featuress/>
       <Possibility/>
       <CTA/>
       <Blog/>
       <Footer/>
    </div>
  )
}

export default Home
