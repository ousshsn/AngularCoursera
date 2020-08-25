import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from '@angular/material/slider';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import { DishdetailsComponent } from './dishdetails/dishdetails.component';

import {DishService} from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import {ProcessHTTPMsgService} from './services/process-httpmsg.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule
  ],
  entryComponents: [
    LoginComponent
  ],
  providers: [
    DishService,
    PromotionService,
    LeaderService,
    {provide: 'baseURL', useValue: baseURL},
    ProcessHTTPMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
