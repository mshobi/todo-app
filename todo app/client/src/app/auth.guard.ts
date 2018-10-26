import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ContactService} from './contact.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private contactservice:ContactService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.contactservice.getUserLoggedin();
  }
}
