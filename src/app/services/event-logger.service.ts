import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Injectable({
  providedIn: 'root'
})
export class EventLoggerService {
  constructor(public fba: FirebaseAnalytics) {
  }

  logButton(name: string, value: any) {
    this.fba
      .logEvent(name, { pram: value })
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => console.error(error));
  }
}
