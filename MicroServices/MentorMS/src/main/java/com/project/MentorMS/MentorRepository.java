package com.project.MentorMS;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface MentorRepository extends CrudRepository<MentorDetails,Integer> {

    @Query(value = "SELECT * FROM mentor_details WHERE mentor_email=?1",nativeQuery = true)
    MentorDetails getMentorDetailsByFirstName(String email);

    @Transactional
    @Modifying
    @Query(value="UPDATE mentor_details SET block_status=?2 WHERE mentor_email=?1",nativeQuery = true)
    public void updateBlockStatus(String mentorName,String status);
}
