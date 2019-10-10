package com.project.UserMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value="/user")
@CrossOrigin(value = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService detailsService;

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void addUser(@RequestBody UserDetails details) {
        detailsService.setUserEntity(details);
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public List<UserDetails> getUsers() {
        List<UserDetails> userDetails = new ArrayList<>();
        detailsService.getUsers().forEach(userDetails::add);
        return userDetails;
    }

    @RequestMapping(value = "/addcurrenttrainings",method = RequestMethod.POST)
    public void addCurrentTrainings(@RequestBody CurrentTrainings currentTrainings){
       detailsService.addCurrentTraining(currentTrainings);
    }

    @RequestMapping(value = "/getCurrentTrainings/{userName}",method = RequestMethod.GET)
    public List<CurrentTrainings> getCurrentTrainings(@PathVariable(value="userName") String userName){
        List <CurrentTrainings> currentTrainings= new ArrayList<>();
        detailsService.getCurrentTrainings(userName).forEach(currentTrainings::add);
        for (CurrentTrainings currentTrainings1:currentTrainings
             ) {
            System.out.println(currentTrainings1.getCourseName());
        }
        return currentTrainings;
    }

    @RequestMapping(value="/acceptstatus/{mentorName}/{userName}/{courseName}/{status}",method=RequestMethod.GET)
    public void updateAcceptStatus(@PathVariable(value = "mentorName") String mentorName,@PathVariable(value = "userName") String userName,@PathVariable(value = "courseName") String courseName,@PathVariable(value = "status")String status){
        detailsService.updateAcceptStatus(mentorName,userName,courseName,status);

    }

    @RequestMapping(value="/paymentstatus/{mentorName}/{userName}/{courseName}/{status}",method=RequestMethod.GET)
    public void updatePaymentStatus(@PathVariable(value = "mentorName") String mentorName,@PathVariable(value = "userName") String userName,@PathVariable(value = "courseName") String courseName,@PathVariable(value = "status")String status){
        detailsService.updatePaymentStatus(mentorName,userName,courseName,status);

    }

    @RequestMapping(value="/progressstatus/{mentorName}/{userName}/{courseName}/{status}",method=RequestMethod.GET)
    public void updateProgressStatus(@PathVariable(value = "mentorName") String mentorName,@PathVariable(value = "userName") String userName,@PathVariable(value = "courseName") String courseName,@PathVariable(value = "status")int status){
        detailsService.updateProgressStatus(mentorName,userName,courseName,status);

    }

    @RequestMapping(value="/blockstatus/{mentorName}/{status}",method=RequestMethod.GET)
    public void updateBlockStatus(@PathVariable(value = "mentorName") String mentorName,@PathVariable(value = "status")String status){
        detailsService.updateBlockStatus(mentorName,status);

    }
}
