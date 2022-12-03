import { UsedProductComponent } from './used-product/used-product.component';
import{NewProductComponent}from './new-product/new-product.component'
import { WorkerComponent } from './worker/worker.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'worker',component:WorkerComponent},
  {path:'used-product',component:UsedProductComponent},
  {path:'new-product',component:NewProductComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule ,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
 
