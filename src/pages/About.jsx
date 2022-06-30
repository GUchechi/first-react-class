import React from "react"
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div style={{display: 'flex', justifyContent:'space-around'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

    )
}

export default About