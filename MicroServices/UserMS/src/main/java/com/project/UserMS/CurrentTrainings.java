package com.project.UserMS;

import javax.persistence.*;


@Entity
@Table(name="current_trainings")
public class CurrentTrainings {

    @Id
    @GeneratedValue
    @Column(name="current_id")
    private int id;
    @Column(name="progress_status")
    private int progressStatus;
    @Column(name="course_name")
    private String courseName;
    @Column(name="user_name")
    private String userName;
    @Column(name = "accept_status")
    private String acceptStatus;
    @Column(name = "mentor_name")
    private String mentorName;
    @Column(name = "payment")
    private String payment;

    public String getMentorName() {
        return mentorName;
    }

    public void setMentorName(String mentorName) {
        this.mentorName = mentorName;
    }

    public String getPayment() {
        return payment;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public String getAcceptStatus() {
        return acceptStatus;
    }

    public void setAcceptStatus(String acceptStatus) {
        this.acceptStatus = acceptStatus;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getProgressStatus() {
        return progressStatus;
    }

    public void setProgressStatus(int progressStatus) {
        this.progressStatus = progressStatus;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
