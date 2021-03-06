import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TollCountInfoComponent } from './toll-count-info/toll-count-info.component';
import { TollDetailsComponent } from './toll-details/toll-details.component';
import { TollTableComponent } from './toll-table/toll-table.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewsComponent } from './views/views.component';
import { LoginComponent } from './login/login.component';
import { PmsComponent } from './pms/pms.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlertsComponent,
    TollCountInfoComponent,
    TollDetailsComponent,
    TollTableComponent,
    HeaderComponent,
    SidebarComponent,
    ViewsComponent,
    LoginComponent,
    PmsComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    NgxEchartsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
