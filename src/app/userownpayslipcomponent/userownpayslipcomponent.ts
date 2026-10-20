import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Apiservice } from '../apiservice';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-userownpayslipcomponent',
  standalone:true,
  imports: [CommonModule, ɵInternalFormsSharedModule,ReactiveFormsModule],
  templateUrl: './userownpayslipcomponent.html',
  styleUrl: './userownpayslipcomponent.css',
})
export class Userownpayslipcomponent implements OnInit{

owndetails:any;

search=new FormControl('');
textsearch:any;
ngOnInit(): void {
  

  this.getowndetails();
  this.getsearch();
}

constructor(private service:Apiservice,private active:ActivatedRoute,private cd:ChangeDetectorRef)
{

}

getowndetails():void{
    
  this.active.paramMap.subscribe(res=>{
    const id=Number(res.get('id'));
    this.service.getowndetails().subscribe(res=>{
     this.owndetails=res.filter(x=>x.userid==id);
     this.textsearch=this.owndetails;
     this.cd.detectChanges();
    });
  });


}
getsearch():void{

  this.search.valueChanges.subscribe(value=>{
   const searchtext=(value||'').toString();
     this.textsearch=this.owndetails.filter((res:any)=>
    res.month.toString().includes(searchtext));
  });
}

}
