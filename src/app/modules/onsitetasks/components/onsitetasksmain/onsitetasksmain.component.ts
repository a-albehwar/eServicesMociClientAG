// import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { OnSiteTask } from 'src/app/modules/onsitetasks/models/task.model';
import { OnSiteTaskService } from 'src/app/modules/onsitetasks/services/task.service';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model'
import { MatDialog } from '@angular/material/dialog';
import { OnsitetaskscreateComponent } from '../onsitetaskscreate/onsitetaskscreate.component';
import { OnsitetasksdetailsComponent } from '../onsitetasksdetails/onsitetasksdetails.component';
import { User } from 'src/app/modules/users/models/user.model';
// import { Observable, of } from 'rxjs';
// import { map, mapTo, tap } from 'rxjs/operators'


@Component({
  selector: 'app-onsitetasksmain',
  templateUrl: './onsitetasksmain.component.html',
  styleUrls: ['./onsitetasksmain.component.scss']
})


// export class OnsitetasksmainComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class OnsitetasksmainComponent implements AfterViewInit {

  ResponseMessage!: ResponseMessage;
  OnSiteTasks!: OnSiteTask[];

  displayedColumns: string[] = ['id', 'taskTitle', 'taskDate','userDisplayName', 'taskStatus', 'taskActions'];


  // @ViewChild(MatPaginator, {static: true}) set matPaginator(paginator: MatPaginator) { this.dataSource.paginator = paginator; }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort, {static: true}) set MatSort(sort: MatSort) { this.dataSource.sort = sort; }
  @ViewChild(MatSort) sort!: MatSort;
  //  dataSource!: MatTableDataSource<OnSiteTask>;
  dataSource = new MatTableDataSource<OnSiteTask>();
  router: any;
  CurrentUser!: any;
  ParsedCurrentUser!: User;
  isAdmin!:boolean;

  constructor(private onsitetaskservice: OnSiteTaskService,
    private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this._MatPaginatorIntl.itemsPerPageLabel = 'عدد المهمات فى الصفحة';
    // this._MatPaginatorIntl.firstPageLabel = 'your custom text 2';
    // this._MatPaginatorIntl.lastPageLabel = 'your custom text 4';
    // this._MatPaginatorIntl.nextPageLabel = 'your custom text 5';
    // this._MatPaginatorIntl.previousPageLabel = 'your custom text 6'; 

    this.CurrentUser = localStorage.getItem('CurrentUser');
    this.ParsedCurrentUser = JSON.parse(this.CurrentUser);
    this.isAdmin=this.ParsedCurrentUser.roleID==1?true:false;
    this.fillTasks();
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
    // this.changeDetectorRefs.detectChanges();
  }
  fillTasks()
  {
    if (this.ParsedCurrentUser.roleID == 1) //manager
    {
      this.getAllTasks();
    }
    else if (this.ParsedCurrentUser.roleID == 2)//supervisor    
    {
      this.getMyTasks();
    }
  }
  getAllTasks() {
    this.onsitetaskservice.getAll()
      .subscribe({
        next:
          (data) => {
            this.ResponseMessage = data;
            this.OnSiteTasks = this.ResponseMessage.value as OnSiteTask[];

            // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
            this.dataSource.data = this.OnSiteTasks;
            console.log(data);
          },
        error: (e) => console.error(e)
      });
  }
  getMyTasks() {
    this.onsitetaskservice.getMyTasks(this.ParsedCurrentUser.id)
      .subscribe({
        next:
          (data) => {
            this.ResponseMessage = data;
            this.OnSiteTasks = this.ResponseMessage.value as OnSiteTask[];

            // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
            this.dataSource.data = this.OnSiteTasks;
            console.log(data);
          },
        error: (e) => console.error(e)
      });
  }
  openDialog() {
    // this.dialogRef = this.dialog.open(WarningComponent, {
    //   width: '450px',
    //   height: '380px',
    // });
    const dialogRef = this.dialog.open(OnsitetaskscreateComponent, { id: 'createdgid' });

    dialogRef.afterClosed().subscribe(result => {
      this.fillTasks();
      console.log(`Dialog result: ${result}`);
    });
  }
  openEditDialog(rowid: any) {

    const dialogRef = this.dialog.open(OnsitetasksdetailsComponent,
      {
        id: 'edittaskgid',
        data: { id: rowid, mode: 'view' },
        height: '500px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      this.fillTasks();
      console.log(`Dialog result: ${result}`);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editContact(onsitetask: OnSiteTask) {
    let route = '/OnSiteTasks/OnSiteTasksCreate';
    this.router.navigate([route], { queryParams: { id: onsitetask.id } });
  }

  viewContact(contact: OnSiteTask) {
    let route = '/contacts/view-contact';
    this.router.navigate([route], { queryParams: { id: contact.id } });
  }

}

/** Builds and returns a new User. */


// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
