import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-generatepayslipcomponent',
  standalone:true,
  imports: [ɵInternalFormsSharedModule,FormsModule],
  templateUrl: './generatepayslipcomponent.html',
  styleUrl: './generatepayslipcomponent.css',
})
export class Generatepayslipcomponent implements OnInit{

  searchemployee:any;
  selectmonth:string='';
  leavecount:number=0;
   
  hraamount:number=0;
  daamount:number=0;
  allowances:number=0
  grosssalary:number=0;
  esiamount:number=0;
  pfamount:number=0;
  leavededuction:number=0;
  totaldeduction:number=0;
  netsalary:number=0;


  owndetails:any;

ngOnInit(): void {
  this.getemployee();
}

constructor(private active:ActivatedRoute,private service:Apiservice,private cd:ChangeDetectorRef,private  router:Router)
{

}

getemployee():void{

  this.active.paramMap.subscribe(res=>
  {
    const getid=Number(res.get('id'));
    this.service.getemployeegenerate().subscribe(res=>{
    this.searchemployee=res.find(x=>x.id==getid);
    this.cd.detectChanges();
      });

  });
}
calculate():void{
  
  if (!this.searchemployee) {
    return;
  }
    const basic=Number(this.searchemployee.basicsalary);

    this.hraamount=basic*this.searchemployee.hra/100;
    this.daamount=basic*this.searchemployee.da/100;
    this.allowances=basic*this.searchemployee.otherallowences/100;
     this.grosssalary=basic+this.hraamount+this.daamount+this.allowances;
     this.esiamount=basic*this.searchemployee.esi/100;
     this.pfamount=basic*this.searchemployee.pf/100;
     const persalary=this.grosssalary/30;
     const leavesalary=this.leavecount*persalary;
     this.leavededuction=Math.round(leavesalary);
     this.totaldeduction=Math.round(this.leavededuction+this.esiamount+this.pfamount);
      this.netsalary=this.grosssalary-this.totaldeduction;



  }
  

  print():void{
   
    if (!this.searchemployee) {
    return;
  }

    const details={
      month:this.selectmonth,
      userid:this.searchemployee.employeeid,
      name:this.searchemployee.name,
      designation:this.searchemployee.designation,
      basicsalary:this.searchemployee.basicsalary,
      hra:this.hraamount,
      da:this.daamount,
      otherallowences:this.allowances,
      grosssalary:this.grosssalary,
      esi:this.esiamount,
      pf:this.pfamount,
      leavededuction:this.leavededuction,
      totaldeduction:this.totaldeduction,
      netsalary:this.netsalary

    };


     this.service.postowndetails(details).subscribe(res=>{
      this.owndetails=res;
     });
     this.router.navigate(['/fulldetails']);
  }

}
