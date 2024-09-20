import React from 'react'
import './Posts.css'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost'

const Posts = () => {
  return (
    <div className='posts'>
        <NewPost/>
        <Post />
        <Post />
        <Post />
        <Post />

        
    </div>
  )
}

export default Posts