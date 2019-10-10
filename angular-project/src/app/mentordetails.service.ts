import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './user-signup/mentorsignup/Course';
import { MentorDetails } from './user-signup/mentorsignup/MentorDetails';
import { MentorCurrentTrainings } from './currenttrainings/currentTrainings';
import { IdentificationService } from './identification.service';



@Injectable({
  providedIn: 'root'
})
export class MentordetailsService {
  mentorSearchValue:any;
  startTime:any;
  endTime:any;
  newCourseProposal:any;
  courseAcceptStatus:any;
  paymentStatus="false";
 
  private baseUrl = 'http://localhost:8761';

  constructor(private http:HttpClient,private identity:IdentificationService) { }

  getCourseDetails():Observable<Course>{
    return this.http.get<Course>(`${this.baseUrl}`+'/courseapi/course/search/'+`${this.mentorSearchValue}`+'/'+`${this.startTime}`+'/'+`${this.endTime}`);
  }

  getMentorDetails():Observable<MentorDetails>{
    return this.http.get<MentorDetails>(`${this.baseUrl}`+'/mentorapi/mentor/search/'+`${this.mentorSearchValue}`+'/'+`${this.startTime}`+'/'+`${this.endTime}`)
  }

  sendCourseProposal(mentorCurrent:MentorCurrentTrainings):Observable<MentorCurrentTrainings>{
    return this.http.post<MentorCurrentTrainings>(`${this.baseUrl}`+'/mentorapi/mentor/addCurrentTrainings',mentorCurrent);
  }

  getCurrentTrainings():Observable<MentorCurrentTrainings>{
    return this.http.get<MentorCurrentTrainings>(`${this.baseUrl}`+'/mentorapi/mentor/getCurrentTrainings/'+this.identity.userName);
  }

  updateAcceptStatus(mentorName,userName,courseName,status){
    return this.http.get(`${this.baseUrl}`+'/mentorapi/mentor/acceptstatus/'+mentorName+'/'+userName+'/'+courseName+'/'+status);
  }

  updatePaymentStatus(mentorName,userName,courseName,status){
    return this.http.get(`${this.baseUrl}`+'/mentorapi/mentor/paymentstatus/'+mentorName+'/'+userName+'/'+courseName+'/'+status);
  }

  updateProgressStatus(mentorName,userName,courseName,status){
    return this.http.get(`${this.baseUrl}`+'/mentorapi/mentor/progressstatus/'+mentorName+'/'+userName+'/'+courseName+'/'+status);
  }

  updateBlockStatus(name,status){
    return this.http.get(`${this.baseUrl}`+'/mentorapi/mentor/blockstatus/'+name+'/'+status);
  }
}
