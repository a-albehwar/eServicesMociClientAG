import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homenavigation',
  templateUrl: './homenavigation.component.html',
  styleUrls: ['./homenavigation.component.scss']
})
export class HomenavigationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  RedirectToTasks():void{
    this.route.navigate(['/OnSiteTasks']);
  }

}
