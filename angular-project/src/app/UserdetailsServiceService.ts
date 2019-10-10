import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { User } from './user-signup/usersignup/User';
import { MentorDetails } from './user-signup/mentorsignup/MentorDetails';
import { UserCurrentTrainings } from './currenttrainings/currentTrainings';
import { IdentificationService } from './identification.service';

@Injectable({
  providedIn: 'root'
})

export class UserdetailsServiceService {
  public baseUrl = 'http://localhost:8761'; 
 

  

  
  constructor(private http:HttpClient,private identity:IdentificationService) { 
    
  } 
  
  ngOnInit(){
    
  }

  createUser(user: object): Observable<object> {  
    console.log(user);
    return this.http.post(`${this.baseUrl}`+'/userapi/user/signup', user);  
  }  

  createMentor(mentor:Object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'/mentorapi/mentor/signup',mentor);
  }

  createCourse(course:Object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'/courseapi/course/add',course);
  }
  
  getUsers(baseUrl:any):Observable<User> {
    return this.http.get<User>(baseUrl);
  }

  getMentors(baseUrl:any):Observable<MentorDetails> {
    return this.http.get<MentorDetails>(baseUrl);
  }

  sendCurrentTraining(userCurrent:UserCurrentTrainings):Observable<any>{  
    return this.http.post(`${this.baseUrl}`+'/userapi/user/addcurrenttrainings',userCurrent);  
  }  

  getCurrentTrainings():Observable<UserCurrentTrainings>{
    return this.http.get<UserCurrentTrainings>(`${this.baseUrl}`+'/userapi/user/getCurrentTrainings/'+this.identity.userName);
  }

  updateAcceptStatus(mentorName,userName,courseName,status){
    return this.http.get(`${this.baseUrl}`+'/userapi/user/acceptstatus/'+mentorName+'/'+userName+'/'+courseName+'/'+status);
  }

  updatePaymentStatus(mentorName,userName,courseName,status){
    return this.http.get(`${this.baseUrl}`+'/userapi/user/paymentstatus/'+mentorName+'/'+userName+'/'+courseName+'/'+status);
  }

  updateProgressStatus(mentorName,userName,courseName,status){
    return this.http.get(`${this.baseUrl}`+'/userapi/user/progressstatus/'+mentorName+'/'+userName+'/'+courseName+'/'+status);
  }

  updateBlockStatus(name,status){
    return this.http.get(`${this.baseUrl}`+'/userapi/user/blockstatus/'+name+'/'+status);
  }
}
