import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeedetails',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './employeedetails.html',
  styleUrl: './employeedetails.css',
})
export class Employeedetails  implements OnInit {


  getdetails:any;
ngOnInit(): void {
  this.getemployeedetails();
}



constructor(private service:Apiservice,private  cd:ChangeDetectorRef)
{

}
getemployeedetails():void{
this.service.getuserdetails().subscribe(res=>{
this.getdetails=res;
this.cd.detectChanges();
});

}

}
