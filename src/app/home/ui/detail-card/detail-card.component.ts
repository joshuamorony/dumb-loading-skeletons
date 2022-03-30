import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../../shared/data-access/models/person';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailCardComponent {
  @Input() person: Person;

  constructor() {}
}
