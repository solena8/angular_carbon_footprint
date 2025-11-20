import {CanActivateFn, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {inject} from '@angular/core';

export const userGuard: CanActivateFn = async (route, state) => {
  const userSvc = inject(UserService);
  const router = inject(Router);

  if (!await userSvc.getUsername()) {
    router.navigate(['/']).then(() => false);
  }
  return true;
};
