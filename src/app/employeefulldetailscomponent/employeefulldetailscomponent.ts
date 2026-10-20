import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Sidebarcomponent } from "../sidebarcomponent/sidebarcomponent";
import { Navbarcomponent } from "../navbarcomponent/navbarcomponent";
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeefulldetailscomponent',
  standalone: true,
  imports: [Sidebarcomponent, CommonModule],
  templateUrl: './employeefulldetailscomponent.html',
  styleUrl: './employeefulldetailscomponent.css',
})
export class Employeefulldetailscomponent implements OnInit {


  getdetails: any;
  deletedetails:any;



  ngOnInit(): void {
    this.getemployees();
  }

  constructor(private router: Router, private service: Apiservice,private cd:ChangeDetectorRef) {


    
  }

  getemployees(): void {

this.service.getemployeegenerate().subscribe(res => {
      this.getdetails = res;
      this.cd.detectChanges();
      
    });

  }

  generate(id:number):void{


    this.router.navigate(['/payslip',id]);


  }

  edit(id:number):void{
    
    this.router.navigate(['/employeeaddform',id]);

  }


  delete(id:number):void{


   this.service.deleteemployeegenerate(id).subscribe(res=>{
    this.deletedetails=res;
    this.getemployees();
   });

  }


  add(): void {
    this.router.navigate(['/employeeaddform']);

  }

}
