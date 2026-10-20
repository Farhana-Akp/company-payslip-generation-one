import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-userregistercomponent',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './userregistercomponent.html',
  styleUrl: './userregistercomponent.css',
})
export class Userregistercomponent  implements OnInit {

addform!:FormGroup;
userregister:any;
ngOnInit(): void {
  this.getform();
}


constructor(private builder:FormBuilder,private service:Apiservice,private router:Router)
{


}

getform():void{
this.addform=this.builder.group({
  name:['',Validators.required],
  email:['',[Validators.required,Validators.email,  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
  password:['',Validators.required],
  confirm:['',Validators.required]
});
}


submit():void{
  const user=this.addform.value;
   this.service.Insertuserregistration(user).subscribe({
    next:(res)=>{
   this.userregister=res;
   alert(res);
   if(res=="registration successfull")
   {
    this.service.useremail=user.email;
     this.router.navigate(['/user']);
   }
    }
   });
}

login():void{

this.router.navigate(['/userlogin']);


}
}
