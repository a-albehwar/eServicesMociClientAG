// import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ChangeDetectorRef, Component,OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { OnSiteTask } from 'src/app/modules/onsitetasks/models/task.model';
import { OnSiteTaskService } from 'src/app/modules/onsitetasks/services/task.service';
import { ResponseMessage } from 'src/app/core/models/responsemessage.model'

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

  ResponseMessage!:ResponseMessage;
  OnSiteTasks!: OnSiteTask[];

  displayedColumns: string[] = ['id', 'taskTitle', 'taskDescription','created','taskStatus'];


  // @ViewChild(MatPaginator, {static: true}) set matPaginator(paginator: MatPaginator) { this.dataSource.paginator = paginator; }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort, {static: true}) set MatSort(sort: MatSort) { this.dataSource.sort = sort; }
  @ViewChild(MatSort) sort!: MatSort;
  //  dataSource!: MatTableDataSource<OnSiteTask>;
   dataSource = new MatTableDataSource<OnSiteTask>();
  constructor(private onsitetaskservice: OnSiteTaskService ,private changeDetectorRefs: ChangeDetectorRef) {
    // Create 100 users
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    
    this.onsitetaskservice.getAll()
     .subscribe({
       next: 
      (data) => {
        this.ResponseMessage = data;
        this.OnSiteTasks=this.ResponseMessage.value;
       
        // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
        this.dataSource.data=this.OnSiteTasks;        
        console.log(data);
      },
      error: (e) => console.error(e)
    });


    
    // Assign the data to the data source for the table to render
      // this.dataSource = new MatTableDataSource(this.OnSiteTasks);
      // this.changeDetectorRefs.detectChanges();
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
