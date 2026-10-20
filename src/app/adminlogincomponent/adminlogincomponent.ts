import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-adminlogincomponent',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './adminlogincomponent.html',
  styleUrl: './adminlogincomponent.css',
})
export class Adminlogincomponent implements OnInit{

addform!:FormGroup;
adminlogin:any;
ngOnInit(): void {
  
  this.getform();

}

constructor(private builder:FormBuilder,private router:Router,private service:Apiservice)

{

}

getform():void{

  this.addform=this.builder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
}


submit():void{

const admin=this.addform.value;

this.service.Postadminlogin(admin).subscribe({
  next:(responce)=>{
this.adminlogin=responce;
alert(responce.message);
if(responce.message=="Login successfull")
{
  this.service.adminemail=admin.email;

   localStorage.setItem('token',responce.token);
   localStorage.setItem('role',responce.role);

  this.router.navigate(['/fulldetails']);
    this.addform.reset();

}
  }
});


}

}
