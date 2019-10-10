package com.project.UserMS;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    UserRepository repository;

    @Autowired
    CurrentTrainingRepository currentTrainingRepository;

    //adding user details to database on signup
    public void setUserEntity(UserDetails details) {
        repository.save(details);
    }

    //retrieving all user details from database
    public List<UserDetails> getUsers() {
        List<UserDetails> details = new ArrayList<UserDetails>();
        repository.findAll().forEach(details::add);
        return details;
    }

    public void addCurrentTraining(CurrentTrainings currentTrainings){
        currentTrainingRepository.save(currentTrainings);
    }

    public List<CurrentTrainings> getCurrentTrainings(String userName){
        List <CurrentTrainings> currentTrainings= new ArrayList<>();
        currentTrainingRepository.findCurrentTrainingsByCourseName(userName).forEach(currentTrainings::add);
        return currentTrainings;
    }

    public void updateAcceptStatus(String mentorName,String userName,String courseName,String status){
        currentTrainingRepository.updateAcceptStatus(mentorName,userName,courseName,status);
    }

    public void updatePaymentStatus(String mentorName,String userName,String courseName,String status){
        currentTrainingRepository.updatePaymentStatus(mentorName,userName,courseName,status);
    }

    public void updateProgressStatus(String mentorName,String userName,String courseName,int status){
        currentTrainingRepository.updateProgressStatus(mentorName,userName,courseName,status);
    }

    public void updateBlockStatus(String mentorName,String status){
        repository.updateBlockStatus(mentorName,status);
    }
}
