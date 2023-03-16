import React from 'react'
import './landingPage.css'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { VideogamesAll } from "../actions"
import { useEffect } from "react"
import { btnLanding, btnLandingOut } from '../js/js.js'
function LandingPage() {
    document.body.style.overflow = "hidden"
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(VideogamesAll());
    }, [dispatch])
  return (
 <div className="landingContainer">
        
        <div className="dvLanding">
        <div>
            <h1>Bienvenidos!</h1>
        </div>
        <div className="dvLanding">
            <div className='dvlandingBg'>
                <Link to={"/home"}><button onMouseOver={btnLanding} onMouseOut={btnLandingOut} className="buttonLanding">Ingresar
                <span className='bg'></span>
                </button></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage