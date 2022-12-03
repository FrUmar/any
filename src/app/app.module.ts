import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { WorkerComponent } from './worker/worker.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UsedProductComponent } from './used-product/used-product.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WorkerComponent,
    NewProductComponent,
    UsedProductComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,BrowserAnimationsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
