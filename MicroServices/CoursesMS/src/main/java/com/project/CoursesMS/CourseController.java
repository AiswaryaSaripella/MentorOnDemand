package com.project.CoursesMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/course")
@CrossOrigin(value = "http://localhost:4200")
public class CourseController {

    @Autowired
    CourseService courseService;

    @Autowired
    RestTemplate restTemplate;

    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public void addCourses(@RequestBody Courses courses){
        courseService.addCourses(courses);
    }

    @RequestMapping(value = "/search/{courseName}/{startTime}/{endTime}",method = RequestMethod.GET)
    public List<Courses> getCourses(@PathVariable(value = "courseName") String courseName,@PathVariable(value = "startTime") String startTime,@PathVariable(value = "endTime") String endTime){
        List<Courses> courses = new ArrayList<>();
        courseService.getCourses(courseName,startTime,endTime).forEach(courses::add);
        return courses;
    }
}
