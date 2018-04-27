import React from 'react'
import { Link, Route } from "react-router-dom";

const AboutPage = () => {

    return (
        <div className='center'>
            <h1><Link to={`/aboutPage`}>ABOUT</Link></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quisquam eos cumque sunt nostrum odit. Sunt laudantium ratione repellat et sit repellendus minus, distinctio illo, explicabo rem, iure accusantium veniam!</p>

            <h1>OUR STORY</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam quisquam eos cumque sunt nostrum odit. Sunt laudantium ratione repellat et sit repellendus minus, distinctio illo, explicabo rem, iure accusantium veniam!</p>

        </div>



    )

}

export {AboutPage}