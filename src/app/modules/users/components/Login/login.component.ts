import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // ResponseMessage!: ResponseMessage;
  // ResponseMessageValue!:object;
  CurrentUser!:User;
  ErrorMSG!:string;
  uname!:string;
  pw!:string;

  constructor(private UserService:UserService,private route:Router ) { }

  ngOnInit(): void {
  }

  LogIn():void{
    this.UserService.login(this.uname,this.pw)
    .subscribe({
      next: 
     (data) => {
       this.CurrentUser=data;
       if(this.CurrentUser.loginStatus=="LoggedIn" )
       {
          //this.CurrentUser= this.ResponseMessageValue as User;
          localStorage.setItem('CurrentUser', JSON.stringify(this.CurrentUser));
          // var retrievedObject = localStorage.getItem('CurrentUser');
          // console.log('retrievedObject: ', JSON.parse(retrievedObject));
          let route = '/Home';
          this.route.navigate([route]);   
       }
       else
       {
          this.ErrorMSG=this.CurrentUser.loginStatus;
          console.log(this.ErrorMSG);
       }
       // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
       //this.dataSource.data=this.OnSiteTasks;     
       
     },
     error: (e) => console.error(e)
   });
  }
}
