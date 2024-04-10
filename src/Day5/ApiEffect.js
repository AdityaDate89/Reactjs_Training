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
        <table border={1}>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
          { posts && posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
        ))}
        </table>
        
    </div>
  )
}

export default ApiEffect