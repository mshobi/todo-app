import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:string;
  PEC_ID:string;
  password:string;
  phone:Number;
  email:string;
  cnic:Number;

  constructor(private router:Router,private contactService: ContactService) { }

  ngOnInit() {
  }

  SignupUser(){
    const SignupUser={
      name: this.name,
      PEC_ID: this.PEC_ID,
      password: this.password,
      phone: this.phone,
      email: this.email,
      cnic: this.cnic,
    }

    this.contactService.getSign(SignupUser)
    .subscribe(sign =>{
      if(sign){
        this.contactService.setUserLoggedin();
        this.router.navigate(['reset']);

      }
      else{
        alert('Try Again');
      }
    });
  }

}
