import { Routes } from '@angular/router';
import { Parentcomponent } from './parentcomponent/parentcomponent';
import { Adminlogincomponent } from './adminlogincomponent/adminlogincomponent';
import { Userregistercomponent } from './userregistercomponent/userregistercomponent';
import { Homecomponent } from './homecomponent/homecomponent';
import { Employeefulldetailscomponent } from './employeefulldetailscomponent/employeefulldetailscomponent';
import { Employeedetails } from './employeedetails/employeedetails';
import { Adminprofilecomponent } from './adminprofilecomponent/adminprofilecomponent';
import { Usercomponent } from './usercomponent/usercomponent';
import { Userlogincomponent } from './userlogincomponent/userlogincomponent';
import { Employeeaddformcomponent } from './employeeaddformcomponent/employeeaddformcomponent';
import { Generatepayslipcomponent } from './generatepayslipcomponent/generatepayslipcomponent';
import { Userownpayslipcomponent } from './userownpayslipcomponent/userownpayslipcomponent';

export const routes: Routes = [


    {
        path: "", component: Parentcomponent,
        children: [
            { path: '', component: Homecomponent },
            { path: 'homepage', component: Homecomponent },
            { path: 'adminlogin', component: Adminlogincomponent },
            { path: 'userregister', component: Userregistercomponent },
            { path: 'fulldetails', component: Employeefulldetailscomponent },
            { path: 'employeelist', component: Employeedetails },
            { path: 'adminprofile', component: Adminprofilecomponent },
            { path: 'user', component: Usercomponent },
            { path: 'userlogin', component: Userlogincomponent },

            { path: 'employeeaddform', component: Employeeaddformcomponent },
            { path: 'employeeaddform/:id', component: Employeeaddformcomponent },
            { path: 'payslip/:id', component: Generatepayslipcomponent },
            { path: 'userown/:id', component:Userownpayslipcomponent },




        ]
    }
];
