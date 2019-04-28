import { Injectable } from '@angular/core';
import { FatherModel } from '../../models/fatherModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //#region Public Members
  public Model: FatherModel;
  //#endregion

  //#region Constructor
  public constructor(public httpservice: HttpClient) { }
  //#endregion

  //#region Public Methods
  /**
   * Get data from Currency API
   */
  public GetData():void{
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'text/xml')
    this.httpservice.get('./assets/currency.json',{headers: headers}).subscribe(
      (res: FatherModel) =>{
        this.Model = res;
      },
      err =>{
        console.log(err);
      }
    )
  }
  //#endregion
}
