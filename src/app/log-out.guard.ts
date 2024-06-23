import { CanActivateFn } from '@angular/router';

export const logOutGuard: CanActivateFn = (route, state) => {
  return true;
};
