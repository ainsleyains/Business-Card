import React from 'react'

export default function Info() {
    return (
        <div className = 'infobox'>
            <img className = 'img' src='../imgs/businesswoman.jpg'/>
            <h2 className ='name'>Laura Smith</h2>
            <h3 className ='role'>Frontend Developer</h3>
            <h4 className = 'web'>laurasmith.website</h4>
            <div className ='btnlist'>
                <button className ='emailbox'>
                    <img className = 'icon-email' src='../imgs/email.png'/>
                    Email
                </button>
            
                <button className ='inbox'>
                    <img className = 'icon-in' src='../imgs/linkedin.png'/>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}