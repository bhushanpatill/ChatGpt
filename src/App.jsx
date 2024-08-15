import { useState,useEffect }from 'react'
import {Footer, Header, Blog, Possibility, Featuress, WhatGPT3} from './Containers'
import {Brand, CTA, Features, Navbar} from './Components'
import './App.css'
import axios from "axios"
import Home from './Home/Home'


function App() {
  // const [count, setCount] = useState(0)
  // const 

  // useEffect(()=>{

  // },[])
  const fetchAPI = async() => {
    const response = await axios.get("http://127.0.0.1:8000/api/users")
    console.log(response.data.users)

  }

  useEffect(()=>{
    fetchAPI();
  },[])

  return (
    // <div className="App">
    //    <div className="gradient__bg">
    //       <Navbar/>
    //       <Header/>
    //    </div>
    //    <Brand/>
    //    <WhatGPT3/>
    //    <Featuress/>
    //    <Possibility/>
    //    <CTA/>
    //    <Blog/>
    //    <Footer/>
    // </div>
    <div className="div">
      {/* <Home/> */}
      
    </div>
  )
}

export default App
