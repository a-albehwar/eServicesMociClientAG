import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/users/models/user.model';

@Component({
  selector: 'app-homenavigation',
  templateUrl: './homenavigation.component.html',
  styleUrls: ['./homenavigation.component.scss']
})


export class HomenavigationComponent implements OnInit {
  CurrentUser: any;
  ParsedCurrentUser!: User;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.CurrentUser = localStorage.getItem('CurrentUser');
    if(this.CurrentUser==null)
    {
      this.route.navigate(['/Login']);
    }
    this.ParsedCurrentUser = JSON.parse(this.CurrentUser);
  }
  RedirectToTasks():void{
    this.route.navigate(['/OnSiteTasks']);
  }

}
