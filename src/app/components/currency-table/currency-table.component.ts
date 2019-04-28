import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency-service/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  //#region Public Members
  public tableName: string = "Exchange Rates (ILS Base)";
  public leftItemHeader: string = "Currency Name";
  public centerItemHeader: string = "Currency Code";
  public rightItemHeader: string = "Rate";
  public left: boolean = false;
  public right: boolean = false;
  public center: boolean = false;

  //#endregion

  //#region Constructor & Lifecycle Hooks
  public constructor(public currencyservice: CurrencyService) { }
  //#endregion

  //#region Public Methods
  public ngOnInit(): void{
    this.currencyservice.GetData();    
  }

  /**
   * Sorts the array, on event receive
   * @param event 
   */
  public Sort(event: string):void{
    //If left column clicked, sort the data by currency name
    if(event == 'left'){
      if(!this.left){
        this.currencyservice.Model.CURRENCY = this.currencyservice.Model.CURRENCY.sort((a, b) => {
          var nameA = a.NAME.toLowerCase(), nameB = b.NAME.toLowerCase();
          if (nameA < nameB) //sort string ascending
           return -1;
          if (nameA > nameB)
           return 1;
          return 0; //default return value (no sorting)
         })
        //In order to reverse the array on next click
        this.left = !this.left;
      }else{
        this.currencyservice.Model.CURRENCY = this.currencyservice.Model.CURRENCY.reverse();
        //In order to reverse the array on next click
        this.left = !this.left;
      }
    }
    
    //If right column clicked, sort the data by Rate value
    else if(event == 'right'){
      if(!this.right){
        this.currencyservice.Model.CURRENCY = this.currencyservice.Model.CURRENCY.sort((a, b) => {
          var nameA = a.RATE.toLowerCase(), nameB = b.RATE.toLowerCase();
          if (Number(nameA) < Number(nameB)) //sort string ascending
           return -1;
          if (Number(nameA) > Number(nameB))
           return 1;
          return 0; //default return value (no sorting)
         })
          //In order to reverse the array on next click
         this.right = !this.right;
      }else{
        this.currencyservice.Model.CURRENCY = this.currencyservice.Model.CURRENCY.reverse();
        //In order to reverse the array on next click
        this.right = !this.right;
      }
    }
    
    //If center column clicked, sort the data by Currency Code 
    else if(event == 'center'){
      if(!this.center){
        this.currencyservice.Model.CURRENCY = this.currencyservice.Model.CURRENCY.sort((a, b) => {
          var nameA = a.CURRENCYCODE.toLowerCase(), nameB = b.CURRENCYCODE.toLowerCase();
          if (nameA < nameB) //sort string ascending
           return -1;
          if (nameA > nameB)
           return 1;
          return 0; //default return value (no sorting)
         })
         //In order to reverse the array on next click
         this.center = !this.center;
      }else{
        this.currencyservice.Model.CURRENCY = this.currencyservice.Model.CURRENCY.reverse();
        //In order to reverse the array on next click
        this.center = !this.center;
      }
    }
  }
  //#endregion

}
