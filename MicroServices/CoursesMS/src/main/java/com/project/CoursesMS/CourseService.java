package com.project.CoursesMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    public void addCourses(Courses courses){
        courseRepository.save(courses);
    }

    public List<Courses> getCourses(String courseName,String startTime,String endTime){
        List<Courses> courses = new ArrayList<>();
        courseRepository.getCourses(courseName,startTime,endTime).forEach(courses::add);
        return courses;
    }
}
