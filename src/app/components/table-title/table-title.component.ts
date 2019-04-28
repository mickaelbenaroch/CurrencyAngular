import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-title',
  templateUrl: './table-title.component.html',
  styleUrls: ['./table-title.component.scss']
})
export class TableTitleComponent {

  @Input() title: string;
  //#endregion

  //#region COnstructor & Lifecycle Hooks
  public constructor() { }  
  //#endregion
  
  //#region Public Methods
  //#endregion
}
