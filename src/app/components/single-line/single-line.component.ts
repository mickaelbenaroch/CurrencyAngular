import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-line',
  templateUrl: './single-line.component.html',
  styleUrls: ['./single-line.component.scss']
})
export class SingleLineComponent {

    //#region Public Members
    @Input() LeftItem: string;
    @Input() CenterItem: string;
    @Input() RightItem: string;
  
    //#endregion
  
    //#region COnstructor & Lifecycle Hooks
    public constructor() { }  
    //#endregion
    
    //#region Public Methods
    //#endregion

}
