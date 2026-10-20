import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidebarcomponent',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './sidebarcomponent.html',
  styleUrl: './sidebarcomponent.css',
})
export class Sidebarcomponent {


@Input() employeelistlink:boolean=false;
  
@Input() adminprofile:boolean=false;
}
