import { Component } from '@angular/core';
import { Navbarcomponent } from "../navbarcomponent/navbarcomponent";
import { Sidebarcomponent } from "../sidebarcomponent/sidebarcomponent";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-parentcomponent',
  standalone:true,
  imports: [Navbarcomponent, Sidebarcomponent, RouterModule,RouterModule],
  templateUrl: './parentcomponent.html',
  styleUrl: './parentcomponent.css',
})
export class Parentcomponent {}
