import React from "react";
import "./home.css"
import 'aos/dist/aos.css'
import {hoverCard} from '../js/js.js'
export default function Card({name, image, genders, rating}) {
    return (

        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="divCard" onMouseEnter={ (e) => hoverCard (image, name, genders , rating)}>
                <div className="dvImageCard">
                    <img src={image.image ? image.image : image.src} alt="imagen" />
                </div>
                <div className="textDesc">
                    <h3>{name}</h3>
                    {<p>Rating: {rating}</p>}
                    {<p>{genders.join("-")}</p>}
            </div>
        </div>

    )
}