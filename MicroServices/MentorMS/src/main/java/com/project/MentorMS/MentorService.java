package com.project.MentorMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MentorService {

    @Autowired
    MentorRepository mentorRepository;

    @Autowired
    CurrentTrainingRepository currentTrainingRepository;

    public void addMentor(MentorDetails mentorDetails) {
        mentorRepository.save(mentorDetails);
    }

    public MentorDetails getMentorDetails(String mentorName) {
        MentorDetails mentorDetails = mentorRepository.getMentorDetailsByFirstName(mentorName);
        return mentorDetails;
    }

    public List<MentorDetails> getMentors() {
      List  <MentorDetails> mentorDetails = new ArrayList<>();
              mentorRepository.findAll().forEach(mentorDetails::add);
        return mentorDetails;
    }

    public void addCurrentTrainings(CurrentTrainings currentTrainings) {
        currentTrainingRepository.save(currentTrainings);
    }

    public List<CurrentTrainings> getCurrentTrainings(String email) {
        List<CurrentTrainings> currentTrainings = new ArrayList<>();
        currentTrainingRepository.findCurrentTrainingsByMentorName(email).forEach(currentTrainings::add);
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
        mentorRepository.updateBlockStatus(mentorName,status);
    }
}
