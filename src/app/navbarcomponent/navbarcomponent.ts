import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-navbarcomponent',
  standalone:true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './navbarcomponent.html',
  styleUrl: './navbarcomponent.css',
})
export class Navbarcomponent implements OnInit{
 

  adminemail2:string='';

  ngOnInit(): void {
    
  }

constructor(private router:Router,public service:Apiservice)
{


}


get ishomepage():boolean
{
  return this.router.url==='/homepage'||this.router.url==='/';
}
get isadminpage():boolean{
  return this.router.url==='/fulldetails';
}

get isuserpage():boolean{

  return this.router.url==='/user';
}

logoutadmin():void{

  const qs=confirm("are you sure?");
  if(qs)
  {
      this.service.adminemail='';
      
     this.router.navigate(['/homepage']);
  }
}

logoutuser():void{

  const us=confirm("are you sure");

  if(us)
  {
    this.service.useremail='';
         this.router.navigate(['/homepage']);


  }
}



}
