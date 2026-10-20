import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercomponent',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usercomponent.html',
  styleUrl: './usercomponent.css',
})
export class Usercomponent implements OnInit {


  getemail:any;
   selectmonth:string='';



ngOnInit(): void {
  this.getuser();
}

constructor(private service:Apiservice,private router:Router,private cd:ChangeDetectorRef)
{

}
getuser():void{

  const useremail=this.service.useremail;

  this.service.getuserdetailsbyemail(useremail).subscribe(res=>{
   this.getemail=res;
   this.cd.detectChanges();
  });
}

payslip(id:number):void{

this.router.navigate(['/userown',id]);


}

  
}
