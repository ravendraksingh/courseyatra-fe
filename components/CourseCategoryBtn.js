import React from 'react'

const CourseCategoryBtn = ({courseCategory, childClicked}) => {
  return (
    <button className='text-sm text-nowrap w-fit p-2 rounded bg-gray-200 border border-gray-300 hover:bg-blue-600 hover:text-white 
      focus:bg-blue-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50'
      onClick={(event) => {
        event.preventDefault();
        console.log(courseCategory + ' clicked');
        // Add your category click handling logic here  
        childClicked(courseCategory);
      }}
      >
        {courseCategory}
    </button>
  )
}

export default CourseCategoryBtn