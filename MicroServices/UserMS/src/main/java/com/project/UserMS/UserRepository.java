package com.project.UserMS;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends CrudRepository<UserDetails,String> {

    @Transactional
    @Modifying
    @Query(value="UPDATE user_details SET block_status=?2 WHERE user_name=?1",nativeQuery = true)
    public void updateBlockStatus(String mentorName,String status);




}
