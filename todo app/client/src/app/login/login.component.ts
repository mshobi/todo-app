import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:string;
  email:string;

  constructor(private router:Router,private contactService: ContactService) { }

  ngOnInit() {
  }
  loginUser(){

    const loginUser ={
      email: this.email,
      password: this.password
    }
    this.contactService.getUser(loginUser)
      .subscribe(user =>{
         if(user){
           this.contactService.setUserLoggedin();
           this.router.navigate(['contacts']);
         }else{
           alert('Try Again');
         }
      });
    } 

    /*e.preventDefault();
    console.log("print");
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username == 'admin' && password =='admin')
        this.router.navigate(['contacts']);
    }*/

}
