package com.project.UserMS;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CurrentTrainingRepository extends CrudRepository<CurrentTrainings,Integer> {
    @Query(value = "SELECT * FROM current_trainings WHERE user_name=?1", nativeQuery = true)
    List<CurrentTrainings> findCurrentTrainingsByCourseName(String userName);

    @Transactional
    @Modifying
    @Query(value = "UPDATE current_trainings SET accept_status=?4 WHERE course_name=?3 AND mentor_name=?1 AND user_name=?2", nativeQuery = true)
    public void updateAcceptStatus(String mentorName, String userName, String courseName, String status);


    @Transactional
    @Modifying
    @Query(value = "UPDATE current_trainings SET payment=?4 WHERE course_name=?3 AND mentor_name=?1 AND user_name=?2", nativeQuery = true)
    public void updatePaymentStatus(String mentorName, String userName, String courseName, String status);

    @Transactional
    @Modifying
    @Query(value = "UPDATE current_trainings SET progress_status=?4 WHERE course_name=?3 AND mentor_name=?1 AND user_name=?2", nativeQuery = true)
    public void updateProgressStatus(String mentorName, String userName, String courseName, int status);

}