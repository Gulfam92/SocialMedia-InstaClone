import React from 'react';


const Profile = ()=>{
    return (
        <div style={{maxWidth: "550px", margin: "0px auto",}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "2px solid grey"
            }}>
                <div>
                    <img style ={{width: "160px", height:"160px", borderRadius:"80px"}}
                    src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                </div>
                <div>
                    <h4>Name- User 1</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"120%"}}>
                        <h6> 8 posts</h6>
                        <h6> 20 followers</h6>
                        <h6> 50 following</h6>
                    </div>
                </div>
            </div>
        
            <div className= "gallery">
                <img className= "item" src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <img className= "item" src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <img className= "item" src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <img className= "item" src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <img className= "item" src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                <img className= "item" src ="https://images.unsplash.com/photo-1547333863-d58a53a7d443?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTV8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"/>
                
            </div>
        </div>
    )

}


export default Profile