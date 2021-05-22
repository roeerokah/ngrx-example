import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  itemList = [
    {
      name: 'shluftzuk',
      checked: false,
  },{
      name: 'shlifzak',
      checked: true,
  },
  ];
}
