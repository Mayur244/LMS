import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const {navigate, isEducator, setIsEducator, backendUrl, getToken} = useContext(AppContext)
  const isCourseListpage = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator')
        return
      }
      const token = await getToken()
      const {data} = await axios.get(backendUrl + '/api/educator/update-role', {headers: {Authorization: `Bearer ${token}`}})

      if (data.success) {
        setIsEducator(true)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListpage ? "bg-white" : "bg-[#EBEAFF]"
      }`}
    >
      <div onClick={() => {navigate('/')}} className="flex cursor-pointer">
        <img src="/education_favicon.png" alt="icon" />
        <img src={assets.learnify_logo} alt="logo" className="w-28 lg:w-32" />
        </div>
      {/* For Desktop Screens*/}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button 
              onClick={becomeEducator}
              className="cursor-pointer">{isEducator ? "Educator Dashboard" : "Become Educator"} </button>{"|"}
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className="bg-[#9694FF] text-white px-5 py-2 rounded-full cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>
      {/* For Phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
        {user && (
            <>
              <button 
              onClick={becomeEducator}
              className="cursor-pointer">{isEducator ? "Educator Dashboard" : "Become Educator"} </button>{"|"}
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? <UserButton /> : <button onClick={() => {openSignIn()}} className="cursor-pointer">
          <img src={assets.user_icon} alt="user-icon" />
        </button>}
      </div>
    </div>
  );
};

export default Navbar;
