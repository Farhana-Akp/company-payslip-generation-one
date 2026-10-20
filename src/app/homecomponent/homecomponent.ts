import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  standalone:true,
  imports: [],
  templateUrl: './homecomponent.html',
  styleUrl: './homecomponent.css',
})
export class Homecomponent {



  constructor(private  router:Router)
  {

  }

  adminlogin():void{

   this.router.navigate(['/adminlogin']);

  }

  userlogin():void{

   this.router.navigate(['/userregister']);


  }
}
