// import Course from "../models/Course.js";



// //Get All Courses
// export const getAllCourses = async (req, res)=>{
//     try {
//         const courses = await Course.find({isPublished: true}).select(['-courseContent', '-enrolledStudents']).populate({path: 'educator'})
//         res.json({success: true, courses})
//     } catch (error) {
//         res.json({success: false, message: error.message})
//     }
// }


// //Get Course By Id
// export const getCourseId = async (req, res)=>{
//     const {id} = req.params
//     try {
//         const courseData = await Course.findById(id).populate({path: 'educator'})

//         //Remove lectureUrl if isPreviewFree is false
//         courseData.courseContent.forEach(chapter => {
//             chapter.chapterContent.forEach(lecture => {
//                 if(!lecture.isPreviewFree){
//                     lecture.lectureUrl = ""
//                 }
//             })
//         })
//         res.json({success: true, courseData})
//     } catch (error) {
//         res.json({success: false, message: error.message})
//     }
// }


import Course from "../models/Course.js";

// Get All Courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isPublished: true })
            .select(['-courseContent', '-enrolledStudents'])
            .populate({ path: 'educator' });

        res.status(200).json({ success: true, courses });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Get Course By Id
export const getCourseId = async (req, res) => {
    const { id } = req.params;
    
    try {
        const courseData = await Course.findById(id).populate({ path: 'educator' });

        if (!courseData) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Remove lectureUrl if isPreviewFree is false
        courseData.courseContent.forEach(chapter => {
            chapter.chapterContent.forEach(lecture => {
                if (!lecture.isPreviewFree) {
                    lecture.lectureUrl = "";
                }
            });
        });

        courseData.markModified('courseContent'); // Ensure Mongoose updates the modified data

        res.status(200).json({ success: true, courseData });
    } catch (error) {
        console.error("Error fetching course by ID:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
