import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  name:string;
  PEC_ID:string;
  password:string;
  phone:Number;
  email:string;
  cnic:Number;
  role:string;

  constructor(private contactService: ContactService) { }

  addContact()
  {
    const newContact ={
      name: this.name,
      PEC_ID: this.PEC_ID,
      password: this.password,
      phone: this.phone,
      email: this.email,
      cnic: this.cnic,
      role: "user"
    }
    this.contactService.addContact(newContact)
      .subscribe(contact =>{
        this.contacts.push(contact);
        this.contactService.getContacts()
        .subscribe( contacts =>
        this.contacts = contacts);
      });
    } 
  
  
  deleteContact(id:any)
  {
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data =>{
        if(data.n==1)
          {
            for(var i = 0; i< contacts.length; i++)
              {
                if(contacts[i]._id == id)
                  {
                    contacts.splice(i,1);
                  }
              }
          }

      })
  }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe( contacts =>
    this.contacts = contacts);
  }

}
