import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({course}) => {
  const {currency, calculateCourseRating} = useContext(AppContext)
  const {courseThumbnail, courseTitle, coursePrice, discount, courseRatings} = course
  return (
    <Link to={'/course/' + course._id} onClick={()=> scrollTo(0,0,)} className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'>
      <img className='w-full' src={courseThumbnail} alt='course-thumbnail'/>
      <div className='p-3 text-left'>
        <h3 className='text-base font-semifold'>{courseTitle}</h3>
        <p className='text-gray-500'>Learnify</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateCourseRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_,i)=>(<img key={i} src={i < Math.floor(calculateCourseRating(course)) ? assets.star : assets.star_blank} alt='rating-star' className='w-3.5 h-3.5' />))}
          </div>
          <p className='text-gray-500'>{courseRatings.length}</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{(coursePrice - (discount ?? 0) * coursePrice / 100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard






