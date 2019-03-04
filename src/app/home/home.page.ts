import { Component } from '@angular/core';
import { EventLoggerService } from '../services/event-logger.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public logger: EventLoggerService) {}

  logClick() {
    this.logger.logButton('firebaseEventBtn', { pram: 'paramValue' });
    console.log('Fui clicado!');
  }
}
