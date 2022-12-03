import { category } from './../modal/modal';
import { Component, Input, OnInit } from '@angular/core';

export interface ImagesModel{
  img: string;
};
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  @Input() category:category ={
id:0,
category:'',
subcategory:''
  }

@Input() count: number=3;
  constructor(){}
  product=[]
  ngOnInit():void{}
}
