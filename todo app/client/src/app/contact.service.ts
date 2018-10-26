import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {
  private isSignup;
  private isUserLoggedin;
 

  constructor(private http: Http) { 
    this.isSignup=false;
    this.isUserLoggedin=false;
    
  }
  setSignup(){
    this.isSignup=true;
  }
  getSignup(){
    return this.isSignup;
  }

  setUserLoggedin(){
    this.isUserLoggedin=true;
  }

  getUserLoggedin(){
    return this.isUserLoggedin;
  }

  
 
  


  //retriving contactsservice

  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
    .map(res => res.json());
  }

  //add contact method 
  getSign(sign)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/getSign', sign ,{headers:headers})
    .map(res => res.json());
  }
 
  getUser(user)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/getUser', user ,{headers:headers})
    .map(res => res.json());
  }
  addContact(newContact)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers})
    .map(res => res.json());
  }

  //delete method
  deleteContact(id)
  {
    return this.http.delete('http://localhost:3000/api/contact/'+id)
    .map(res => res.json());
  }

}
