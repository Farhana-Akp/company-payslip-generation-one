import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {

adminemail:string='';
useremail:string='';

  constructor(private http:HttpClient)
  {

  }

  Postadminlogin(admin:any)
  {
    return this.http.post<{
      message:string;
      token:string;
      role:string;
    }>('https://localhost:7261/api/Company/adminlogin',admin);
  }
  getadmindetails(email:any)
  {
    return this.http.get<any>(`https://localhost:7261/api/Company/admindetails/${email}`);
  }

  Insertuserregistration(user:any)
  {
    return this.http.post('https://localhost:7261/api/Company/userregistration',user,
      {responseType:'text'}
    );
  }
  postuserlogin(user:any)
  {
    return this.http.post('https://localhost:7261/api/Company/userlogin',user,
      {responseType:'text'}
    );
  }

  getuserdetailsbyemail(email:string)
  {
    return this.http.get<any>(`https://localhost:7261/api/Company/getuseremail/${email}`);
  }

  getuserdetails()
  {
    return this.http.get<any[]>('https://localhost:7261/api/Company/userdetails');
  }

  getemployeegenerate()
  {
return this.http.get<any[]>('https://localhost:7261/api/Company/getemployeegeneratedetails');

  }

  postemployeegenerate(employee:any)
  {

    return this.http.post<any>('https://localhost:7261/api/Company/insertemployeegenerate',employee);
  }

   updateemployeegenerate(id:number,employee:any)
   {
    return this.http.put<any>(`https://localhost:7261/api/Company/updateemployeegenerate/${id}`,employee);
   }
  deleteemployeegenerate(id:number)
  {
    return this.http.delete<any>(`https://localhost:7261/api/Company/delleteemployeegenerate/${id}`);
  }
  

  getowndetails()
  {
    return this.http.get<any[]>('https://localhost:7261/api/Company/userownpayslip');
  }

  postowndetails(details:any)
  {
   return this.http.post<any>('https://localhost:7261/api/Company/userownpayslip',details);
  }

}
