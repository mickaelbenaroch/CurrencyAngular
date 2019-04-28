
//#region Core
import * as $ from 'jquery';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyService } from './services/currency-service/currency.service';
import { TableTitleComponent } from './components/table-title/table-title.component';
import { SingleLineComponent } from './components/single-line/single-line.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { DateUpdateComponent } from './components/date-update/date-update.component';
import { RatePipe } from './pipes/ratepipe';
import { Angular2CsvModule } from 'angular2-csv';

//#endregion


@NgModule({
  declarations: [
    AppComponent,
    CurrencyTableComponent,
    TableHeaderComponent,
    TableTitleComponent,
    SingleLineComponent,
    DateUpdateComponent,
    RatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angular2CsvModule
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
