package com.project.MentorMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value="/mentor")
@CrossOrigin(value = "http://localhost:4200")
public class MentorController {

    @Autowired
    MentorService mentorService;

    @Autowired
    RestTemplate restTemplate;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void addMentor(@RequestBody MentorDetails mentorDetails) {
        mentorService.addMentor(mentorDetails);
    }

    @RequestMapping(value = "/search/{courseName}/{startTime}/{endTime}", method = RequestMethod.GET)
    public List<MentorDetails> getCourses(@PathVariable(value = "courseName") String courseName, @PathVariable(value = "startTime") String startTime, @PathVariable(value = "endTime") String endTime) {
        List<MentorDetails> mentorDetails = new ArrayList<>();

        Courses[] courses = restTemplate.getForObject("http://localhost:8761/courseapi/course/search/" + courseName + "/" + startTime + "/" + endTime, Courses[].class);
        // System.out.println(courses.length);
        for (Courses course : courses) {
            MentorDetails mentorDetails1 = new MentorDetails();
            //System.out.println(course.getMentorName());
            mentorDetails1 = mentorService.getMentorDetails(course.getMentorName());

            mentorDetails.add(mentorDetails1);
        }
        return mentorDetails;
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public List<MentorDetails> getUsers() {
        List<MentorDetails> mentorDetails = new ArrayList<>();
        mentorService.getMentors().forEach(mentorDetails::add);
        return mentorDetails;
    }

    @RequestMapping(value = "/addCurrentTrainings")
    public void addCurrentTrainings(@RequestBody CurrentTrainings currentTrainings) {
        mentorService.addCurrentTrainings(currentTrainings);
    }

    @RequestMapping(value = "/getCurrentTrainings/{mentorName}", method = RequestMethod.GET)
    public List<CurrentTrainings> getCurrentTrainings(@PathVariable(value = "mentorName") String email) {
        List<CurrentTrainings> currentTrainings = new ArrayList<>();
        mentorService.getCurrentTrainings(email).forEach(currentTrainings::add);
        return currentTrainings;
    }

    @RequestMapping(value = "/acceptstatus/{mentorName}/{userName}/{courseName}/{status}", method = RequestMethod.GET)
    public void updateAcceptStatus(@PathVariable(value = "mentorName") String mentorName, @PathVariable(value = "userName") String userName, @PathVariable(value = "courseName") String courseName, @PathVariable(value = "status") String status) {
        mentorService.updateAcceptStatus(mentorName, userName, courseName, status);
    }

    @RequestMapping(value = "/paymentstatus/{mentorName}/{userName}/{courseName}/{status}", method = RequestMethod.GET)
    public void updatePaymentStatus(@PathVariable(value = "mentorName") String mentorName, @PathVariable(value = "userName") String userName, @PathVariable(value = "courseName") String courseName, @PathVariable(value = "status") String status) {
        mentorService.updatePaymentStatus(mentorName, userName, courseName, status);

    }

    @RequestMapping(value="/progressstatus/{mentorName}/{userName}/{courseName}/{status}",method=RequestMethod.GET)
    public void updateProgressStatus(@PathVariable(value = "mentorName") String mentorName,@PathVariable(value = "userName") String userName,@PathVariable(value = "courseName") String courseName,@PathVariable(value = "status")int status){
        mentorService.updateProgressStatus(mentorName,userName,courseName,status);

    }

    @RequestMapping(value="/blockstatus/{mentorName}/{status}",method=RequestMethod.GET)
    public void updateBlockStatus(@PathVariable(value = "mentorName") String mentorName,@PathVariable(value = "status")String status){
        mentorService.updateBlockStatus(mentorName,status);

    }
}
