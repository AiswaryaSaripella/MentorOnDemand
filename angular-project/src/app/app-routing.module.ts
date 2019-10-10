import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersignupComponent } from './user-signup/usersignup/usersignup.component';
import { MentorsignupComponent } from './user-signup/mentorsignup/mentorsignup.component';
import { MentorSearchComponent } from './mentor-search/mentor-search.component';
import { CurrenttrainingsComponent } from './currenttrainings/currenttrainings.component';
import { CompletedtrainingsComponent } from './completedtrainings/completedtrainings.component';
import { ConstantdataComponent } from './constantdata/constantdata.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { PayComponent } from './pay/pay.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: 'homepage', component: HomepageComponent, children: [
      {
        path: 'searchbar', component: SearchbarComponent, children: [
          { path: 'mentorsearch', component: MentorSearchComponent }
        ]
      },
      { path: 'currenttrainings', component: CurrenttrainingsComponent },
      { path: 'completedtrainings', component: CompletedtrainingsComponent },
      { path: 'constantdata', component: ConstantdataComponent },
      {path:'payment-gateway',component:PayComponent},
      { path: '', pathMatch: 'full', redirectTo: 'constantdata' }
    ]
  },
  { path: 'user', component: UsersignupComponent },
  { path: 'mentor', component: MentorsignupComponent },
  { path: 'admin', component: AdminComponent},
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
