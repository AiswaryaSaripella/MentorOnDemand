import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UsersignupComponent } from './user-signup/usersignup/usersignup.component';
import { MentorsignupComponent } from './user-signup/mentorsignup/mentorsignup.component';
import { UserLoginComponent } from './user-login/user-login.component'
import { MentorSearchComponent } from './mentor-search/mentor-search.component';
import { CurrenttrainingsComponent } from './currenttrainings/currenttrainings.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { ConstantdataComponent } from './constantdata/constantdata.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PayComponent } from './pay/pay.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserSignupComponent,
    UsersignupComponent,
    MentorsignupComponent,
    UserLoginComponent,
    MentorSearchComponent,
    CurrenttrainingsComponent,
    CompletedtrainingsComponent,
    ConstantdataComponent,
    SearchbarComponent,
    PayComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
