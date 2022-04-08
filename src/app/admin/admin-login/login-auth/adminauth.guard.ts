import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()

export class AdminauthGuard implements CanActivate {
  
  constructor(private routes:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('aemail') != null){
        return true;
      }
      else{
        this.routes.navigate(['/admin-login']);
        return false;
      }
    }
}