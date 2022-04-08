import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()

export class AuthGuard implements CanActivate {
  
  constructor(private routes:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('email') != null){
        return true;
      }
      else{
        this.routes.navigate(['/login']);
        return false;
      }
    }
}