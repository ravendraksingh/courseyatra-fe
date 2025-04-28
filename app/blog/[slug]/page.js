import React from 'react'

const BlogPost = ({params: {slug}}) => {
  return (
    <div>
      <h1>CourseDetails Page</h1>
      <h1>{slug}</h1>
    </div>
  )
}

export default BlogPost