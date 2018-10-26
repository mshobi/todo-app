//https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { EndpollComponent } from './endpoll/endpoll.component';
import { ViewpollComponent } from './viewpoll/viewpoll.component';
import { ViewresultComponent } from './viewresult/viewresult.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGuard} from './auth.guard';
import {ContactService} from './contact.service';
import { SignupComponent } from './signup/signup.component';
import { ResetComponent } from './reset/reset.component';


const appRoutes: Routes = [
  
{ path: 'login',
component: LoginComponent
},

{ path: 'createpoll',
canActivate:[AuthGuard],
component: CreatepollComponent
},

{ path: 'endpoll',
component: EndpollComponent
},

{ path: 'viewpoll',
component: ViewpollComponent
},

{ path: 'viewresult',
component: ViewresultComponent
},

{ path: 'logout',
component: LogoutComponent
},

{ path: 'signup',
component: SignupComponent
},

{ path: 'reset',
canActivate:[AuthGuard],
component: ResetComponent
},


{ path: 'contacts',
canActivate:[AuthGuard],
component: ContactsComponent
}
    ];
@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    ContactsComponent,
    LoginComponent,
    CreatepollComponent,
    EndpollComponent,
    ViewpollComponent,
    ViewresultComponent,
    LogoutComponent,
    SignupComponent,
    ResetComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [ContactService, AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
class SharedModule {}
