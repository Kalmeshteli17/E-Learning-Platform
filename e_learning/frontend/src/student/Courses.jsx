import React from 'react';
import CourseCard from './CourseCard.jsx';
import './Courses.css'; 
import Navbar from './Navbar.jsx';

const Courses = () => {
    const courses = [
        { id: 1, title: 'Course 1', description: 'Description of course 1' },
        { id: 2, title: 'Course 2', description: 'Description of course 2' },
        { id: 3, title: 'Course 3', description: 'Description of course 3' },
    ];

    return (
        <div>
            <Navbar/>
            <h1>Courses</h1>
            <div className='course_container'>
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;