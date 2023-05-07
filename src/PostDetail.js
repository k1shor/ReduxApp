import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const PostDetail = () => {
  const params = useParams()
  const id = params.id

  const [post, setPost] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response=> response.json())
    .then(data=>setPost(data))
    .catch(error=>console.log(error))
  }, [id])
  

  return (
    <>
    <h2>PostDetail</h2>
    <h2>Post ID: {post.id} </h2>
    <h2>Post Title: {post.title} </h2>
    <p>Body: {post.body} </p>
    <h2>User ID: {post.userId}</h2>
    <Link to='/'>Go Back</Link>
    </>
  )
}

export default PostDetail