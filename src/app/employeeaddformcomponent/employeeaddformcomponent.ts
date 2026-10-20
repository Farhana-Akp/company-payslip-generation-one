import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservice } from '../apiservice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employeeaddformcomponent',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './employeeaddformcomponent.html',
  styleUrl: './employeeaddformcomponent.css',
})
export class Employeeaddformcomponent implements OnInit{

  addform!:FormGroup;
  postemployee:any;
  getemployee:any;
  updateid:number=0;
  updateemployee:any;

ngOnInit(): void {
  this.getform();
  this.update();
}


constructor(private builder:FormBuilder,private service:Apiservice,private router:Router,private active:ActivatedRoute)
{

}

getform():void{


  this.addform=this.builder.group({
  
    name:['',Validators.required],
    employeeid:['',Validators.required],
    designation:['',Validators.required],
    joiningdate:['',Validators.required],
    basicsalary:['',Validators.required],
    hra:['',Validators.required],
    da:['',Validators.required],
    otherallowences:['',Validators.required],
    esi:['',Validators.required],
    pf:['',Validators.required]


  });

}

submit():void{


  this.updateid=Number(this.active.snapshot.paramMap.get('id'));

  if(this.updateid)
  {
    this.service.updateemployeegenerate(this.updateid,this.addform.value).subscribe(res=>{
     this.updateemployee=res;

     this.router.navigate(['/fulldetails']);

    });
  }else{

  

   const employee=this.addform.value;
  this.service.postemployeegenerate(employee).subscribe(res=>{
  this.postemployee=res;
  this.addform.reset();
  this.router.navigate(['/fulldetails']);

  });
}

}

update():void{


  this.active.paramMap.subscribe(res=>{
    const activeid=Number(res.get('id'));
    this.service.getemployeegenerate().subscribe(search=>{
    this.getemployee=search.find(x=>x.id==activeid);

    if(this.getemployee)
    {
      this.addform.patchValue(this.getemployee);
    }
    });
  })


}
  
}
