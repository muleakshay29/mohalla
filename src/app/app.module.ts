import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateDealComponent } from './deals/create-deal/create-deal.component';
import { ValidateDealComponent } from './deals/validate-deal/validate-deal.component';
import { CurrentDealsComponent } from './deals/current-deals/current-deals.component';
import { CompletedDealsComponent } from './deals/completed-deals/completed-deals.component';
import { CustomerReportComponent } from './reports/customer-report/customer-report.component';
import { TransactionReportComponent } from './reports/transaction-report/transaction-report.component';
import { CountryMasterComponent } from './masters/country-master/country-master.component';
import { StateMasterComponent } from './masters/state-master/state-master.component';
import { CityMasterComponent } from './masters/city-master/city-master.component';
import { ShopCategoryMasterComponent } from './masters/shop-category-master/shop-category-master.component';
import { ProductCategoryMasterComponent } from './masters/product-category-master/product-category-master.component';
import { ProductSubcategoryMasterComponent } from './masters/product-subcategory-master/product-subcategory-master.component';
import { MohallaRegisterComponent } from './enrollments/mohalla-register/mohalla-register.component';
import { SocietyRegisterComponent } from './enrollments/society-register/society-register.component';
import { ShopRegisterComponent } from './enrollments/shop-register/shop-register.component';
import { CustomerRegisterComponent } from './enrollments/customer-register/customer-register.component';

import { FetchCountryService } from './Service/fetch-country.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    CreateDealComponent,
    ValidateDealComponent,
    CurrentDealsComponent,
    CompletedDealsComponent,
    CustomerReportComponent,
    TransactionReportComponent,
    CountryMasterComponent,
    StateMasterComponent,
    CityMasterComponent,
    ShopCategoryMasterComponent,
    ProductCategoryMasterComponent,
    ProductSubcategoryMasterComponent,
    MohallaRegisterComponent,
    SocietyRegisterComponent,
    ShopRegisterComponent,
    CustomerRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchCountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
