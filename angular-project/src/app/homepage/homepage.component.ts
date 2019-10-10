import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentificationService } from '../identification.service';
import { Navbar } from 'src/app/homepage/navbar-list';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  identity=null;
  Navbar= Navbar;
  index;
  clicked: boolean =false;


  constructor(private route:Router,private identityService:IdentificationService) { }

  ngOnInit() {
    
  }
  navigate(id){
    this.index=id;
    if(Navbar[id].name=='logout'){
      this.identity.identity=null;
      this.identity.routeStatus=false;
    }
    this.route.navigate([Navbar[id].url]);
  }

  onclick(event){
   this.route.navigate(['/homepage/searchbar'])
  }

}
