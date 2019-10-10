package com.project.CoursesMS;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends CrudRepository<Courses,Integer> {

    @Query(value="SELECT * FROM courses WHERE (course_name=?1 AND start_time=?2 AND end_time=?3)",nativeQuery = true)
    List<Courses> getCourses(String courseName,String startTime,String endTime);
}
