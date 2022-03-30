import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Person } from 'src/app/shared/data-access/models/person';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Mock loading data with observable
  person$: Observable<Person> = of({ name: 'Josh' }).pipe(delay(400));

  constructor() {}
}
