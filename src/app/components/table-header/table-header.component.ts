import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {

  //#region Public Members
  @Input() LeftItem: string;
  @Input() CenterItem: string;
  @Input() RightItem: string;
  @Output() sortLeftEvent: EventEmitter<string> = new EventEmitter(); 

  //#endregion

  //#region COnstructor & Lifecycle Hooks
  public constructor() { }  
  //#endregion
  
  //#region Public Methods
  /**
   * Sort SortLeft colum
   */
  public Sort(string: string):void{
    this.sortLeftEvent.emit(string);
  }
  //#endregion

}
