import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-userlogincomponent',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './userlogincomponent.html',
  styleUrl: './userlogincomponent.css',
})
export class Userlogincomponent  implements OnInit {

addform!:FormGroup;
postlogin:any;

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

  const user=this.addform.value;

  this.service.postuserlogin(user).subscribe({
   next:(res)=>{
   this.postlogin=res;
   alert(res);

   if(res==="login successfull")
   {
    this.service.useremail=user.email;
  this.router.navigate(['/user']);

   }
   }
   
  });
  
}


}
