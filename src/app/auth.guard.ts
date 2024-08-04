import { CanActivateFn, CanActivateChildFn, CanMatchFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    //return true;

    const x=2;
    if( x%2==0 ){ return true }
    else{ return false }
};
