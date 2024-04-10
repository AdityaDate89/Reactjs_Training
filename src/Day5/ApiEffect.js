import React, { useEffect, useState } from 'react'

function ApiEffect() {

    const[posts,setPosts]=useState(null)
    useEffect(()=>{
        getApi();
    },[])
    
    const getApi = async () => {
        console.log("data received")
        try{
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
          const data = await response.json();
          setPosts(data)
          console.log(data);
        }
        catch(error){ 
          console.log(error);
        }
      };

  return (
    <div>
        <h1>Posts</h1>
        {/* {posts && posts.map(post => 
            <h2>{post.id} - {post.title}</h2>
        )} */}
    </div>
  )
}

export default ApiEffect