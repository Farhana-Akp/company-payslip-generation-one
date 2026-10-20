import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminprofilecomponent',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './adminprofilecomponent.html',
  styleUrl: './adminprofilecomponent.css',
})
export class Adminprofilecomponent implements OnInit{


  getdetails:any;
  ngOnInit(): void {
    this.getprofile();
  }

  constructor(private service:Apiservice,private cd:ChangeDetectorRef){

  }

  getprofile():void{

    const email=this.service.adminemail;

    this.service.getadmindetails(email).subscribe(res=>{
      this.getdetails=res;
        console.log("PROFILE RESPONSE:", res);
        this.cd.detectChanges();

    });

  }



  }

