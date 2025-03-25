import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const CourseCard = ({ course }) => {
  const { currency, calculateCourseRating } = useContext(AppContext);
  const { courseThumbnail, courseTitle, coursePrice, discount, courseRatings, _id } = course;

  // Calculate the final discounted price
  const finalPrice = discount ? (coursePrice * (1 - discount / 100)).toFixed(2) : coursePrice.toFixed(2);

  return (
    <Link
      to={`/course/${_id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="border border-gray-300 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
    >
      <img className="w-full h-40 object-cover" src={courseThumbnail} alt={`${courseTitle} Thumbnail`} />
      
      <div className="p-3 text-left">
        <h3 className="text-base font-semibold text-gray-900">{courseTitle}</h3>
        <p className="text-sm text-gray-500">Learnify</p>

        <div className="flex items-center space-x-2 mt-1">
          <p className="text-sm font-medium">{calculateCourseRating(course)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < Math.floor(calculateCourseRating(course)) ? assets.star : assets.star_blank}
                alt={i < Math.floor(calculateCourseRating(course)) ? "Filled Star" : "Empty Star"}
                className="w-4 h-4"
              />
            ))}
          </div>
          <p className="text-sm text-gray-500">({courseRatings.length})</p>
        </div>

        <p className="text-lg font-semibold text-gray-800 mt-2">
          {currency} {finalPrice}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
