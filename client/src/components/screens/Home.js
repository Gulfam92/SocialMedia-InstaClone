import React from 'react';


const Home = ()=>{
    return (
        <div className= "home">
            <div className= "card home-card">
                <h5>Name - User 1</h5>
                <div className= "card-image">
                    <img src= "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlcnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                </div>
                <div className= "card-content">
                    <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This wallpaper looks great.</p>
                    <input type= "text" placeholder= "add a comment"/>
                </div>
            </div>
            <div className= "card home-card">
                <h5>Name - User 1</h5>
                <div className= "card-image">
                    <img src= "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlcnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                </div>
                <div className= "card-content">
                <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This wallpaper looks great.</p>
                    <input type= "text" placeholder= "add a comment"/>
                </div>
            </div>
            <div className= "card home-card">
                <h5>Name - User 1</h5>
                <div className= "card-image">
                    <img src= "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdhbGxwYXBlcnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                </div>
                <div className= "card-content">
                <i className="material-icons" style={{color: "red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>This wallpaper looks great.</p>
                    <input type= "text" placeholder= "add a comment"/>
                </div>
            </div>

        </div>
    )

}


export default Home