import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListItem } from '../models/list-item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() itemList: ListItem[];

  newItem(itemName: string): void {
    this.itemList;
  }
}
