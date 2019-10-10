import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MentordetailsService } from '../mentordetails.service';
import { UserdetailsServiceService } from '../UserdetailsServiceService';
import { UserCurrentTrainings } from '../currenttrainings/currentTrainings';
import { IdentificationService } from '../identification.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  userCurrent:UserCurrentTrainings=null;
  length;
  i;
  constructor(private route:Router,private identity:IdentificationService,private userService:UserdetailsServiceService,private mentorService:MentordetailsService) { }

  ngOnInit() {
    this.i=this.identity.paymentId;
    this.userService.getCurrentTrainings().subscribe(data=>{
      this.userCurrent=data as  UserCurrentTrainings;
      this.length=Object.keys(this.userCurrent).length;
      console.log(this.userCurrent);
    });
    
  }

  onPayment(event){
    this.mentorService.paymentStatus="true";
    this.userService.updatePaymentStatus(this.userCurrent[this.i].mentorName,this.userCurrent[this.i].userName,this.userCurrent[this.i].courseName,this.mentorService.paymentStatus).subscribe(data=>console.log(data));
    this.mentorService.updatePaymentStatus(this.userCurrent[this.i].mentorName,this.userCurrent[this.i].userName,this.userCurrent[this.i].courseName,this.mentorService.paymentStatus).subscribe(data=>console.log(data));
    alert('payment successful');
    this.route.navigate(['/homepage']);
  }

}
