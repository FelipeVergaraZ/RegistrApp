import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Storage } = Plugins;

export const INTRO_KEY = 'intro-seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {

  constructor(private router: Router) { }

  async canLoad(): Promise<boolean> {
      const hasSeenIntro = await Storage.get({key: INTRO_KEY});
      if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
        return true;
      } else {
        this.router.navigateByUrl('/intro', { replaceUrl:true });
        return false;
      }
  }
}
