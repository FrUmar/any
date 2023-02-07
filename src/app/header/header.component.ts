import { observable } from 'rxjs';
import { SellarService } from './../services/sellar.service';
import { rejister, login } from './../data-type';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private registre:SellarService,private route:Router,private http:HttpClient) { }

icon=faUser;
display=true;

register(data:rejister):void{
  console.log(data)
  this.registre.userregister(data).subscribe((result)=>{
    console.log(result)
    if(result)
    {
    this.route.navigate(['worker']);
this.display=false;
      }
  });
};
login(dataa:login):void{
  console.log(dataa)
  debugger
  this.http.get(`http://localhost:3000/salar?usrname=${dataa.usrname}&psw=${dataa.psw}`,{observe:'response'}).subscribe((result:any)=>{
    console.log(result)
    if(result&&result.body)
    {
     console.log("hi u r in login")
     this.display=false;
      }
      else
      {
        console.log("not login")
      }
  });


}
 
  ngOnInit(): void {
  }
  url= "./assets/pngwing.com.png";
  
}
